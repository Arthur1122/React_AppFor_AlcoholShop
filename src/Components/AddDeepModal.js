import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export default class AddDeepModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <div className="container">To add Form details for Alcohol</div>
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
