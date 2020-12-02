import './home.scss'
import Domain from '../domain/Domain';
import { Container, Alert, Spinner, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken, faSmile, faInfo, faExclamation, faSave } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {

  render() {
    return (
      <Container className="p-2">
        {(this.props.status === "default")
          ? <Alert variant="info">You should try searching for a domain! <FontAwesomeIcon icon={faInfo} /></Alert>
          : null}
        {(this.props.status === "empty")
          ? <Alert variant="warning">Please fill out the search field! <FontAwesomeIcon icon={faExclamation} /></Alert>
          : null}
        {(this.props.status === "error")
          ? <Alert variant="danger">Something went wrong... <FontAwesomeIcon icon={faHeartBroken} /></Alert>
          : null}
        {(this.props.status === 'loading')
          ? <Alert variant="success">Loading <Spinner animation="border" size="sm" /></Alert>
          : null}
        {(this.props.result !== undefined && this.props.status === 'success')
          ? <div>
            <Alert variant="success">Domain found! <FontAwesomeIcon icon={faSmile} /></Alert>
            <Domain
              domain={this.props.result.domain}
              country={this.props.result.country}
              date={this.props.result.create_date}
              a={this.props.result.A}
              ns={this.props.result.NS}
              cname={this.props.result.CNAME} />
            <Button
              className="pt-2"
              variant="outline-primary"
              onClick={this.props.handleSave}
            >Save Domain <FontAwesomeIcon icon={faSave} /></Button>
          </div>
          : null}
      </Container>
    )
  }
}

export default Home;