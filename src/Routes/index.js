//Pages
import Home from "../Components/Pages/Home/index";
import Skills from "../Components/Pages/Skills/index";
import Contact from "../Components/Pages/Contact/index";
import About from "../Components/Pages/About/index";
import Testimonial from "../Components/Pages/Testimonial/index";
import Service from "../Components/Pages/Service/index";
export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/skills", component: Skills },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
  { path: "/services", component: Service },
  { path: "/testimonial", component: Testimonial },
];

export const privateRoutes = [];
