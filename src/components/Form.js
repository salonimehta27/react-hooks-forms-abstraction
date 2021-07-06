
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  });

  function handleChange(event) {
    const name = event.target.name
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" checked={formData.admin} name="admin" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
