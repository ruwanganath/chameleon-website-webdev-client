import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import Home from '../pages/Home.vue'
import AboutUs from '../pages/AboutUs.vue'
import OurServices from '../pages/OurServices.vue'
import Portfolio from '../pages/Portfolio.vue'
import Resources from '../pages/Resources.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'

import Login from '../pages/Login.vue'
import Register from  '../pages/Register.vue'
import Profile from  '../pages/Profile.vue'


const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/web/home'
  },
  {
    path: '/web',
    component: DashboardLayout,
    redirect: '/web/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about-us',
        name: 'About Us',
        component: AboutUs
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'our-services',
        name: 'Our Services',
        component: OurServices
      },
      {
        path: 'resources',
        name: 'Resources',
        component: Resources
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
    ]
  },
  { path: '*', component: NotFoundPage }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
