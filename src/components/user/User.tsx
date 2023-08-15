import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function User() {
  const { isLoading, error, user } = useTypedSelector((state) => state.user);

  const {getUserById} = useActions()

  return (
    <div>
        <button onClick={() => getUserById(1) } >
            Get user
        </button>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : user?.name ? (
        <h2>User: {user.name}</h2>
      ) : (
        <h2>USER NOT FOUND</h2>
      )}
    </div>
  );
}

export default User;
