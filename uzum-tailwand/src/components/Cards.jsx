import React from "react";
import Posts from "../Post/Posts";
import CardTemplate from "./CardTemplate";


const Cards = () => {
    return (
        <>
       <CardTemplate detail={Posts} />
    </>
  );
};

export default Cards;
