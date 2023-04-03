import Dashboard from "../components/dashboard/Dashboard"
import Users from '../components/users/Users';
import Products from '../components/products/Products';
import Comments from "../components/comments/Comments";
import Cart from "../components/cart/Cart";

export const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/products', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/comments', element: <Comments /> },
    { path: '/cart', element: <Cart /> }
]

