import { useState } from "react";

export default function UserFormComponent({
  user,
  handleOnSubmit,
  handleOnChange,
}) {
  return (
    <form className="users__form" onSubmit={handleOnSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleOnChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" onChange={handleOnChange} />
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleOnChange}
            checked={user.gender === "male"}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleOnChange}
            checked={user.gender === "female"}
          />
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
            onChange={handleOnChange}
            checked={user.status === "active"}
          />
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            id="inactive"
            name="status"
            value="inactive"
            onChange={handleOnChange}
            checked={user.status === "inactive"}
          />
          <label htmlFor="inactive">Inactive</label>
        </div>
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}
