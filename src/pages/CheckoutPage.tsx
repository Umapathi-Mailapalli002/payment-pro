import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { motion } from 'motion/react';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface PaymentFormProps {
  title: string;
  price: number;
  priceId: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ price, priceId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/create-payment-intent`, {
        amount: price * 100,
        priceId,
        customerInfo: { name, email }
      });

      const clientSecret = res.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
          billing_details: { name, email },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        window.location.href = '/fail';
      } else if (result.paymentIntent?.status === 'succeeded') {
        window.location.href = '/success';
      }
    } catch (err) {
      console.error(err);
      alert('Payment failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <input
        type="text"
        required
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 bg-[#1a1a1a] text-white placeholder-gray-400 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-700">
        <CardElement
          className="text-white"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#1a1a1a',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#fa755a',
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-2 rounded-lg font-semibold text-white transition ${
          loading
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 shadow-lg'
        }`}
      >
        {loading ? 'Processing...' : `Pay ₹${price}`}
      </button>
    </form>
  );
};

const CheckoutPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title') ?? 'Sample Product';
  const price = parseInt(params.get('price') ?? '0');
  const priceId = params.get('priceId') ?? 'invalid';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center p-6 text-white">
      <motion.div
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 w-full max-w-xl shadow-2xl"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-3xl font-bold mb-2 text-center text-green-300">Secure Checkout</h1>
        <p className="mb-1 text-center text-white">You're purchasing: <strong>{title}</strong></p>
        <p className="mb-4 text-center text-gray-300">Total: ₹{price}</p>

        <Elements stripe={stripePromise}>
          <PaymentForm title={title} price={price} priceId={priceId} />
        </Elements>
      </motion.div>
    </div>
  );
};

export default CheckoutPage;
