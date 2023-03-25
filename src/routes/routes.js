import Dashboard from "../components/dashboard/Dashboard"
import Users from '../components/users/Users';
import Products from '../components/products/Products';

export const routes = [
    { path: '/', element: <Dashboard /> },
    { path: '/products', element: <Products /> },
    { path: 'users', element: <Users /> }
]

