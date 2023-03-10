import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  
  const handleRedirect = () => {
    router.push("/user");
  };
  
  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <button onClick={handleRedirect}>click to check user details</button>
    </div>
  );
};

export default Dashboard;
