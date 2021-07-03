import Home from '../Home/Home';
import Login from '../data/Login';
import Signup from '../data/Signup';
import Page404 from '../data/Page404';
import IPubRoute from '../interfaces/IPubRoute';

const routes: IPubRoute[] = [
  {
    path: '/',
    name: 'Landing Page',
    exact: true,
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login,
  },
  {
    path: '/signup',
    name: 'Sign up',
    exact: true,
    component: Signup,
  },
  {
    path: '/',
    name: '404 Page',
    exact: false,
    component: Page404,
  },
];

export default routes;
