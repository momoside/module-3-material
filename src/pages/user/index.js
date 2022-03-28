import React from "react";
import "./style.css";
import EmptyStateComponent from "../../components/emptyState";
import axios from "axios";

class UserPage extends React.Component {
  state = {
    data: [
      {
        id: 213123,
        name: "Rudi",
      },
      {
        id: 123123213,
        name: "Wisesa",
      },
    ],
  };

  async componentDidMount() {
    const { data } = await axios.get("https://gorest.co.in/public/v2/users");
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="users__box">
          <div className="users__box--left">
            <div className="users__title">User List</div>
            <div className="users__list">
              <ul>
                {data.map((user) => {
                  const isActive = user.status !== "inactive";
                  return (
                    <li key={user.id}>
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
            <EmptyStateComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
