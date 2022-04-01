import React, { useEffect, useState } from "react";
import "./style.css";
import EmptyStateComponent from "../../components/emptyState";
import axios from "axios";
import UserInfoComponent from "../../components/userInfo";
import UserFormComponent from "../../components/userForm";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // cara 1
    // axios
    //   .get("https://gorest.co.in/public/v2/users")
    //   .then(({ data }) => setUsers(data))
    //   .catch((e) => console.log("Error", e));

    //cara 2
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          "https://gorest.co.in/public/v2/users"
        );
        setUsers(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetch();
  }, []); //only first render

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    status: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    // setUser({...user, [name]: value });

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    // console.log("user", user);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  return (
    <div className="container">
      <div className="users__box">
        <div className="users__box--left">
          <div className="users__title">User List</div>
          <div className="users__list">
            <ul>
              {users.map((user) => {
                const isActive = user.status !== "inactive";
                return (
                  <li key={user.id} onClick={() => {}}>
                    {user.name}
                    <div className={`users__status--${user.status}`}>
                      {isActive ? "online" : "offline"}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="users__box--right">
          <UserInfoComponent {...user} />
          <UserFormComponent
            user={user}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </div>
      </div>
    </div>
  );
}
