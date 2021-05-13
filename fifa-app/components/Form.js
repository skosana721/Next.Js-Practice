import { useState } from "react";
const Form = () => {
  const [formInfo, setFormInfo] = useState({ team: "", name: "" });
  const { name, team } = formInfo;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && team) {
      console.log(formInfo);
      setFormInfo({ team: "", name: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="team">Team</label>
        <input
          type="text"
          id="team"
          onChange={handleChange}
          name="team"
          placeholder="Enter team"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          name="name"
          placeholder="Enter you name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
