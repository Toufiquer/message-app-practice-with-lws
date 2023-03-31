import React from "react";
import { useParams } from "react-router-dom";

const Outlet1 = () => {
  const { id } = useParams();
  return <div>Out let 1 id: {id}</div>;
};

export default Outlet1;
