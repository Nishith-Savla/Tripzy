import React from "react";
import Card from "./card";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <h1>My trips</h1>

      <div
        style={{
          display: "inline-flex",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <Card name="spain" />
      </div>
    </>
  );
}

export default Home;
