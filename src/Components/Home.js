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
    this.setState({
      items: [
        {
          Id: 1,
          Name: "Ararat",
          Alcohol_type: "Congac",
          Year_of_alcohol: 20,
          Alcohol_degree: 65,
          Made_In: "Armenia",
          Pulled_from: "Grapes"
        },
        {
          Id: 2,
          Name: "Nane",
          Alcohol_type: "Congac",
          Year_of_alcohol: 20,
          Alcohol_degree: 65,
          Made_In: "Armenia",
          Pulled_from: "Grapes"
        }
      ]
    });
  }

  render() {
    const { items } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
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
            <tr Key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Alcohol_type}</td>
              <td>{item.Year_of_alcohol}</td>
              <td>{item.Alcohol_degree}</td>
              <td>{item.Made_In}</td>
              <td>{item.Pulled_from}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
