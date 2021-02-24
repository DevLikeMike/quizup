import React from "react";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <Link to='/' className='home-btn'>
      New Quiz?
    </Link>
  );
};

export default HomeBtn;
