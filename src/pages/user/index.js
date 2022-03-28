import React from "react";
import "./style.css";
import EmptyStateComponent from "../../components/emptyState";

class UserPage extends React.Component {
  state = {
    data: [
      {
        name: "Rudi",
      },
      {
        name: "Wisesa",
      },
    ],
  };

  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <div className="users__box">
          <div className="users__box--left">
            <div className="users__title">User List</div>
            <div className="users__list">
              <ul>
                {data.map((user) => (
                  <li>
                    {user.name}
                    <div class="users__status--active"> online</div>
                  </li>
                ))}
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
