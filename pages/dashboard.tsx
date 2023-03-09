import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      const user = await response.json();
      setUser(user.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <br />
      <h3>Name : {user || ""}</h3>
    </div>
  );
};

export default Dashboard;
