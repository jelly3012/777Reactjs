import Schedule from "../pages/Schedule";
import News from "../pages/News";
import Champion from "../pages/Champion";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const publicRoutes = [
  { path: "/", components: Schedule },
  { path: "/lich-thi-dau", components: Schedule },
  { path: "/tin-tuc", components: News },
  { path: "/champion", components: Champion },
  { path: "/gioi-thieu", components: AboutUs },
  { path: "/lien-he", components: Contact },
];

export { publicRoutes };
