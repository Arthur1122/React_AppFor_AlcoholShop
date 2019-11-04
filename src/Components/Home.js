import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("http://localhost:1111/api/Alcohols")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  render() {
    const { items } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Alcohol_type</th>
            <th>Year_of_alcohol</th>
            <th>Alcohol_degree %</th>
            <th>Made_In</th>
            <th>Pulled_from</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.model_Id}>
              <td>{item.model_Name}</td>
              <td>{item.model_Alcohol_type}</td>
              <td>{item.model_Year_of_alcohol}</td>
              <td>{item.model_Alcohol_degree}</td>
              <td>{item.model_Made_In}</td>
              <td>{item.model_Pulled_from}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
