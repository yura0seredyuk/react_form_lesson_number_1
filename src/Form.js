import React from "react";
import "./Form.css";

export class Form extends React.Component {
  state = {
    name: "",
    age: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { name, age } = this.state;

    onSubmit({ name: name.toUpperCase(), age: age + 1000 });

    this.setState({ name: "", age: "" });
  };

  render() {
    const { name, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit} name="user">
        <label className="control">
          Name
          <input
            className="control__input"
            value={name}
            onChange={this.handleChange}
            name="name"
            type="text"
          />
        </label>
        <label className="control">
          Age
          <input
            className="control__input"
            value={age}
            onChange={this.handleChange}
            name="age"
            type="number"
          />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
