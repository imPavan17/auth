import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Inbox from "./pages/Inbox";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 
            <Route path="/inbox" element={<PrivateRoute />}>
              <Route path="/inbox" element={<Inbox />} />
            */}

            <Route element={<PrivateRoute />}>
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
