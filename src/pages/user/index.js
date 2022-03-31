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
          {/* <EmptyStateComponent /> */}
          <UserInfoComponent />
          <UserFormComponent />
        </div>
      </div>
    </div>
  );
}
