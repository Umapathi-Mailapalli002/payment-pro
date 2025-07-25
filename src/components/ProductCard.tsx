interface ProductCardProps {
  title: string;
  price: number;
  description: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  description,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-[#1a1a2e] text-white rounded-2xl shadow-md border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm h-[230px] flex flex-col justify-between p-6"
    >
      <div>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-300 mb-3 line-clamp-3">{description}</p>
        <p className="text-lg font-semibold text-green-400 mb-4">Price: ₹{price}</p>
      </div>
      <button className="w-full py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition">
        Enroll Now
      </button>
    </div>
  );
};

export default ProductCard;
