import React from "react";

const Home = () => {
  return (
    <>
      <div>I'm the home component </div>
      <button onClick={() => console.log('Hi there')}>Press me!</button>
    </>
  );
};

export default Home;
