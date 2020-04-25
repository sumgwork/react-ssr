import React from "react";

const Home = () => {
  return (
    <div>
      <div>I'm the the very very best home component</div>
      <button
        onClick={() => {
          console.log("Hi there");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
