import Schedule from "../pages/Schedule";
import News from "../pages/News";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: "/lich-thi-dau", components: Schedule },
  { path: "/tin-tuc", components: News },
  { path: "/gioi-thieu", components: AboutUs },
  { path: "/lien-he", components: Contact },
  { path: "/", components: Schedule },
];

export { publicRoutes };
