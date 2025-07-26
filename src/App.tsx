import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {CheckoutPage, FailurePage, ProductsPage, SignUpPage, SuccessPage} from './pages';
import MyCoursesPage from './pages/MyCoursesPage';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/mycourses" element={<MyCoursesPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}
