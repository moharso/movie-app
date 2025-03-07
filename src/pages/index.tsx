import { Route, Routes } from "react-router-dom";
import HomePage from "./home/Home";
import Overview from "./overview/Overview";
import Favorites from "./favorites/Favorites";
import HeaderContainer from "../components/Layout/Layout";

export function AppRouterProvider() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeaderContainer />}>
          <Route index element={<HomePage />} />
          <Route path="/movies/:id" element={<Overview />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}
