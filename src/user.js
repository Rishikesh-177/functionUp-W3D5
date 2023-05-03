import React, { useState } from "react";

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar} alt="user avatar" />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>{user.email}</p>
    </div>
  );
}

function UserCards() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();
    setUsers(data);
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div id="user-cards">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}



export default UserCards;