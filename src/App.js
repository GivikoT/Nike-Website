import {
  CustomReviews,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  Footer,
  SpecialOffer,
} from "./sections";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { HOME, DETAIL_PAGE } from "./constants/routes";
import Home from "./pages/Home";
import DetailPage from "./sections/DetailPage/DetailPage";

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={DETAIL_PAGE} element={<DetailPage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
