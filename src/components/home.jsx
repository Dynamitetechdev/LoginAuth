import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homepage text-center mt-5">
      <h1 className="text-dark">Welcome To LoginAuth</h1>

      <Link to="/dashboard" className="text-white">
        <button className="button1 text-white mt-5">Log In</button>
      </Link>
    </div>
  );
}
