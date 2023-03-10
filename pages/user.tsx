import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <br />
      {user ? (
        <div>
          <h3>Name : {user.name}</h3>
          <h3>email : {user.email}</h3>
        </div>
      ) : (
        <p>user not found</p>
      )}
    </div>
  );
};

export default User;
