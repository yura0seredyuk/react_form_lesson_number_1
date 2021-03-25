import React from "react";
import { Input } from "./Input";
import { Form } from "./Form";

export class App extends React.Component {
  state = {
    title: "Hello!",
    users: []
  };

  handleSubmit = (user) =>
    this.setState((prev) => ({ users: [...prev.users, user] }));

  render() {
    const { title, users } = this.state;
    console.log("render App");

    return (
      <div>
        <h1>{title}</h1>

        <Input
          label="Title"
          value={title}
          onChange={(value) => this.setState({ title: value })}
        />

        <Form onSubmit={this.handleSubmit} />

        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    );
  }
}
