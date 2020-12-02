import './saved.scss'
import Domain from '../domain/Domain';
import { Container, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: JSON.parse(localStorage.getItem('saved')),
      result: {}
    };
  }

  handleDelete(index) {
    this.state.saved.splice(index, 1);
    localStorage.setItem('saved', JSON.stringify(this.state.saved));
    this.setState({
      saved: JSON.parse(localStorage.getItem('saved')),
      result: {}
    })
  }
  handleMoreInfo(index) {
    let res = this.state.saved[index];
    this.setState({ result: res });
  }

  render() {
    return (
      <Container className="savedList">
        <h2>Saved list:</h2>
        <ul>
          {this.state.saved.map((item, index) =>
            <li key={index}>{item.domain}
              <Button
                size="sm"
                className="ml-1"
                variant="outline-primary"
                onClick={() => this.handleDelete(index)}
              ><FontAwesomeIcon icon={faTrash} /></Button>
              <Button
                size="sm"
                className="ml-1"
                variant="outline-primary"
                onClick={() => this.handleMoreInfo(index)}
              >Info <FontAwesomeIcon icon={faInfo} /></Button>
            </li>)}
        </ul>
        {(this.state.result !== undefined && Object.keys(this.state.result).length !== 0)
          ? <div>
            <h2>Saved Domain:</h2>
            <Domain
              domain={this.state.result.domain}
              country={this.state.result.country}
              date={this.state.result.create_date}
              a={this.state.result.A}
              ns={this.state.result.NS}
              cname={this.state.result.CNAME} />
          </div>
          : null
        }
      </Container>
    )
  }
}

export default Saved;