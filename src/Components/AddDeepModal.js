import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

export default class AddDeepModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model_Name: "",
      model_Alcohol_type: "",
      model_Year_of_alcohol: "",
      model_Alcohol_degree: "",
      model_Pulled_from: "",
      model_Made_In: ""
    };
  }

  //When input data it will be changed here
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Implementing POST request
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:1111/api/alcohols", this.state)
      .then(response => {
        console.log(response);
        alert("Added succesfuly");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      model_Name,
      model_Alcohol_type,
      model_Year_of_alcohol,
      model_Alcohol_degree,
      model_Made_In,
      model_Pulled_from
    } = this.state;
    return (
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
                      value={model_Name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="model_Alcohol_type">
                    <Form.Label>Alcohol type</Form.Label>
                    <Form.Control
                      type="text"
                      name="model_Alcohol_type"
                      required
                      placeholder="Input Alcohol type"
                      value={model_Alcohol_type}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="model_Year_of_alcohol">
                    <Form.Label>Alcohol old</Form.Label>
                    <Form.Control
                      type="number"
                      name="model_Year_of_alcohol"
                      required
                      placeholder="Input Alcohol old"
                      value={model_Year_of_alcohol}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="model_Alcohol_degree">
                    <Form.Label>Alcohol degree</Form.Label>
                    <Form.Control
                      type="number"
                      name="model_Alcohol_degree"
                      required
                      placeholder="Input Alcohol degree"
                      value={model_Alcohol_degree}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="model_Made_In">
                    <Form.Label>Made In</Form.Label>
                    <Form.Control
                      type="text"
                      name="model_Made_In"
                      required
                      placeholder="Input Made in"
                      value={model_Made_In}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="model_Pulled_from">
                    <Form.Label>Pulled from</Form.Label>
                    <Form.Control
                      type="text"
                      name="model_Pulled_from"
                      required
                      placeholder="Input from puuld ?"
                      value={model_Pulled_from}
                      onChange={this.handleChange}
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
    );
  }
}
