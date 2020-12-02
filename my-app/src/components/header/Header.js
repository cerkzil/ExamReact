import './header.scss';
import { Form, Button, Container } from 'react-bootstrap/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

class Header extends Component {

  handleEnter = event => {
    if (event.keyCode === 13) {
      this.props.handleSubmit(event);
      event.preventDefault();
    }
  };

  render() {
    return (
      <header>
        <Container className="p-2">
          <Form>
            <Form.Group controlId="domainForm">
              <Form.Label>Domain:</Form.Label>
              <Form.Control type="text"
                value={this.props.domain}
                name="domain"
                onKeyDown={this.handleEnter}
                onChange={this.props.handleChange}
                placeholder="Enter Domain..." />
            </Form.Group>
            <Button variant="outline-primary"
              onClick={this.props.handleSubmit}
            >Find Domain <FontAwesomeIcon icon={faSearch} /></Button>
          </Form>
        </Container>
      </header>
    );
  }
}

export default Header;