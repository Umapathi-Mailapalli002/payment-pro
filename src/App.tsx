import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CheckoutPage, FailurePage, ProductsPage, SignUpPage, SuccessPage} from './pages';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}
