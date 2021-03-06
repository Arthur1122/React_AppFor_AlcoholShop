import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

export default class AddDeepModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbaropen: false,
      snackbarmsg: ""
    };

    this.submitHandler = this.submitHandler.bind(this); // for snackbar
  }

  //snack bar close
  snackbarClose = event => {
    this.setState({ snackbaropen: false });
  };

  //When input data it will be changed here
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Implementing POST request
  submitHandler = e => {
    e.preventDefault();

    fetch("http://localhost:1111/api/alcohols", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model_Name: e.target.model_Name.value,
        model_Alcohol_type: e.target.model_Alcohol_type.value,
        model_Year_of_alcohol: e.target.model_Year_of_alcohol.value,
        model_Alcohol_degree: e.target.model_Alcohol_degree.value,
        model_Pulled_from: e.target.model_Pulled_from.value,
        model_Made_In: e.target.model_Made_In.value
      })
    })
      .then(response => {
        this.setState({
          snackbaropen: true,
          snackbarmsg: "Added succesfuly"
        });
        console.log(response);
        //alert("Added succesfuly");
      })
      .catch(error => {
        this.setState({ snackbaropen: true, snackbarmsg: "Failed" });
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} //snack bar code
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              X
            </IconButton>
          ]}
        />
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Alchohol
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              {" "}
              {/*Here Form for Add alcohol */}
              <Row>
                <Col sm={6}>
                  <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="model_Name">
                      <Form.Label>Alcohol Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="model_Name"
                        required
                        placeholder="Input Alcohol name"
                      />
                    </Form.Group>
                    <Form.Group controlId="model_Alcohol_type">
                      <Form.Label>Alcohol type</Form.Label>
                      <Form.Control
                        type="text"
                        name="model_Alcohol_type"
                        required
                        placeholder="Input Alcohol type"
                      />
                    </Form.Group>
                    <Form.Group controlId="model_Year_of_alcohol">
                      <Form.Label>Alcohol old</Form.Label>
                      <Form.Control
                        type="number"
                        name="model_Year_of_alcohol"
                        required
                        placeholder="Input Alcohol old"
                      />
                    </Form.Group>
                    <Form.Group controlId="model_Alcohol_degree">
                      <Form.Label>Alcohol degree</Form.Label>
                      <Form.Control
                        type="text"
                        name="model_Alcohol_degree"
                        required
                        placeholder="Input Alcohol degree"
                      />
                    </Form.Group>
                    <Form.Group controlId="model_Made_In">
                      <Form.Label>Made In</Form.Label>
                      <Form.Control
                        type="text"
                        name="model_Made_In"
                        required
                        placeholder="Input Made in"
                      />
                    </Form.Group>
                    <Form.Group controlId="model_Pulled_from">
                      <Form.Label>Pulled from</Form.Label>
                      <Form.Control
                        type="text"
                        name="model_Pulled_from"
                        required
                        placeholder="Input from puuld ?"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Button variant="primary" type="submit">
                        Add alcohol
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
