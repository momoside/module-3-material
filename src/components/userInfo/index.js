export default function UserInfoComponent({ name, status }) {
  return (
    <div className="users__profile">
      <div className="users__avatar" />
      <div className="users__info">
        <div className="users__name">{name}</div>
        <div className={`users__status--${status}`}>
          {status === "active" ? "online" : "offline"}
        </div>
      </div>
    </div>
  );
}
