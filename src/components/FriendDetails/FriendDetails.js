import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h2>Welcome to Friend Details Page : {friendId}</h2>
      <h3>Name: {friend.name}</h3>
      <h4>Email: {friend.email}</h4>
      <h4>Phone: {friend.phone}</h4>
      <h5>
        Address: {friend.address?.street}, {friend.address?.city},{" "}
        {friend.address?.zipcode}
      </h5>
    </div>
  );
};

export default FriendDetails;
