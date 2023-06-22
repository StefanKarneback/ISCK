import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingScreen from "./screens/LandingScreen2";
import FirelessCooker from "./screens/FirelessCooker";
import SolarCookerScreen from "./screens/SolarCooker";
import TypeofCookers from "./screens/TypeofCookers";
import React from "react";
import ProductsScreen from "./screens/Products";
import Contact from "./screens/Contact";
import WhereToBuy from "./screens/WhereToBuy";
import Hamburger from "hamburger-react";
import { useState } from "react";
import FuelSavingStove from "./screens/FuelSavingStove";
import AdditionalInfo from "./screens/ReadMore";
import VendorTable from "./components/VendorsTable";

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="Hamburger hamPosition">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Router>
          <Routes>
            <Route
              path="/Integratedsolarcooking"
              element={<LandingScreen isOpen={isOpen} />}
            />
            <Route
              path="/FirelessCooker"
              element={<FirelessCooker isOpen={isOpen} />}
            />
            <Route
              path="/SolarCooker"
              element={<SolarCookerScreen isOpen={isOpen} />}
            />
            <Route
              path="/FuelSavingStove"
              element={<FuelSavingStove isOpen={isOpen} />}
            />
            <Route
              path="/TypeofCookers"
              element={<TypeofCookers isOpen={isOpen} />}
            />
            <Route
              path="/WhereToBuy"
              element={<WhereToBuy isOpen={isOpen} />}
            />
            <Route
              path="/Contact"
              element={<Contact isOpen={isOpen} />}
            />
            <Route
              path="/AdditionalInfo"
              element={<AdditionalInfo isOpen={isOpen} />}
            />
            <Route path="/Vendors" element={<VendorTable isOpen={isOpen} />} />
            <Route
              path="/*"
              element={<Navigate to="/Integratedsolarcooking" replace />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
