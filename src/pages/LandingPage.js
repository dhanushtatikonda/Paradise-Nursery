import React from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="landing"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 5px black"
      }}
    >
      <h1>Welcome to Paradise Nursery 🌱</h1>
      <p>Bringing nature closer to you with fresh and beautiful plants.</p>
      <button onClick={() => navigate("/products")}>Get Started</button>
    </div>
  );
}

export default LandingPage;
