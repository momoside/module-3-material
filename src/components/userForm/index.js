export default function UserFormComponent() {
  return (
    <form className="users__form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <div>
        <label>Gender:</label>
        <div>
          <input type="radio" id="male" name="gender" value="male" checked />
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
      </div>

      <div>
        <label>Status:</label>
        <div>
          <input
            type="radio"
            id="active"
            name="status"
            value="active"
            checked
          />
          <label htmlFor="active">Active</label>
          <input type="radio" id="inactive" name="status" value="inactive" />
          <label htmlFor="inactive">Inactive</label>
        </div>
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}
