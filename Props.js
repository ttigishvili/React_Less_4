import React, { Component } from "react";
import {useState} from 'react';

export class Props extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  aleto = () => {
    console.log("Zdrastibaro");
  };


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    const last = this.state.users[this.state.users.length - 1];
    let age = (Math.random() * this.state.users.length) | 0;
    var joined = this.state.users.concat({id: last.id +1, name: this.state.value, age:age});
    this.setState({ users: joined })
    this.state.value = "";
    event.preventDefault();
  }

  componentDidMount() {
    this.setState((state, props) => {
      return { users: (state.users = props.users) };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.neededField.value);
  }
  deleteRandomUser = () => {
    let i = (Math.random() * this.state.users.length) | 0;
    return this.setState(this.state.users.splice(i, 1)[0]);
  };
  0;

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {this.state.users.map((user) => (
            <div key={user.id}>
              <span>Name: {user.name} </span> ,<span>Age: {user.age} </span>
            </div>
          ))}
        </div>

        <button onClick={() => this.deleteRandomUser()}>წაშლა </button>
        <span>There are {this.state.users.length} users left</span>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" placeholder="Enter Name" value={this.state.value} onChange={this.handleChange} />

          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
