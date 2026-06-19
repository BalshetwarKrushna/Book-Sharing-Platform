import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Marketplace from "./pages/Marketplace";

import SellDashboard from "./pages/SellDashboard";

import ItemDetails from "./pages/ItemDetails";

import SellingRequests from "./pages/SellingRequest";

import MyListings from "./pages/MyListing";

import Wishlist from "./pages/Wishlist";

import MyRequests from "./pages/MyRequest";

import About from "./pages/About";

import Contact from "./pages/Contact";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <Routes>

      {/* PUBLIC ROUTES */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/items/:id"
        element={<ItemDetails />}
      />


      {/* PRIVATE ROUTES */}

      <Route
        path="/sell-dashboard"

        element={
          <ProtectedRoute>
            <SellDashboard />
          </ProtectedRoute>
        }
      />


      <Route
        path="/selling-requests"

        element={
          <ProtectedRoute>
            <SellingRequests />
          </ProtectedRoute>
        }
      />


      <Route
        path="/my-listings"

        element={
          <ProtectedRoute>
            <MyListings />
          </ProtectedRoute>
        }
      />


      <Route
        path="/wishlist"

        element={
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        }
      />


      <Route
        path="/my-requests"

        element={
          <ProtectedRoute>
            <MyRequests />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
}

export default App;