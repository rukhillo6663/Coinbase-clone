import React from "react";
import Coins from "../components/Coins";
import Trending from "../components/Trending";

function Home({ coins }) {
  return (
    <div>
      <Coins coins={coins} />
      <Trending />
    </div>
  );
}

export default Home;
