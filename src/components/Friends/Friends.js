import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h3>Welcome to Friends Page.</h3>
      <p>Friends Forever, Do not forget them</p>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
