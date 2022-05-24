import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, id, username } = props.friend;
  const navigate = useNavigate();
  const showFriendDetails = () => {
    // const path = `/friend/${id}`;
    navigate("/friend/" + id);
  };
  return (
    <div>
      <h3>{name}</h3>
      <Link to={"/friend/" + id}>Friend Details</Link>
      <button onClick={showFriendDetails}>
        {username} {id}
      </button>
    </div>
  );
};

export default Friend;
