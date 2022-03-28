import emptyState from "./empty_state.png";

export default function EmptyStateComponent() {
  return (
    <div className="users__empty">
      <img src={emptyState} width={200} height={200} alt="empty" />
      <h3>You need to select the user first</h3>
    </div>
  );
}
