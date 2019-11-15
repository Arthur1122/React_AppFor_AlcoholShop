import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import AddDeepModal from "./AddDeepModal";
import EditAlcModal from "./EditAlcModal";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      addModalShow: false,
      editModalShow: false,

      alcId: null,
      alcName: "",
      alctype: "",
      alcyear: "",
      alcDegre: "",
      alcpulled: "",
      alcMade: ""
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("http://localhost:1111/api/alcohols")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  deletetAlc(alcId) {
    if (window.confirm("Are you sure ?")) {
      fetch("http://localhost:1111/api/alcohols/" + alcId, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "applcation/json"
        }
      }).then(result => {
        console.log(result);
        this.componentDidMount();
      });
    }
  }

  render() {
    const {
      items,
      alcid,
      alcname,
      alctype,
      alcold,
      alcdegre,
      alcfrom,
      alcmade
    } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Alcohol_type</th>
              <th>Year_of_alcohol</th>
              <th>Alcohol_degree %</th>
              <th>Made_In</th>
              <th>Pulled_from</th>
              <th>Option</th>
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
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() => {
                        this.setState({
                          editModalShow: true,
                          alcid: item.model_Id,
                          alcname: item.model_Name,
                          alctype: item.model_Alcohol_type,
                          alcold: item.model_Year_of_alcohol,
                          alcdegre: item.model_Alcohol_degree,
                          alcfrom: item.model_Pulled_from,
                          alcmade: item.model_Made_In
                        });
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      className="mr-2"
                      onClick={() => this.deletetAlc(item.model_Id)}
                      variant="danger"
                    >
                      Delete
                    </Button>

                    <EditAlcModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      alcid={alcid}
                      alcname={alcname}
                      alctype={alctype}
                      alcold={alcold}
                      alcdegre={alcdegre}
                      alcmade={alcmade}
                      alcfrom={alcfrom}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add alcohol
          </Button>
          <AddDeepModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </>
    );
  }
}
