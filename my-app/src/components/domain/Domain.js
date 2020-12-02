import './domain.scss'
import { Container, Accordion, Button } from 'react-bootstrap';
import React, { Component } from 'react';

class Domain extends Component {

  render() {
    var d = new Date(this.props.date);
    return (
      <Container className="domainResult p-0">
        <h3>Domain name: {this.props.domain}</h3>
        {(this.props.country !== null)
          ? <div className="p-0">
            <h3>Country: {this.props.country}</h3>
          </div>
          : <h3>Country not found.</h3>
        }
        {(this.props.date !== null)
          ? <div className="p-0">
            <h3>Creation date: {d.getFullYear() + "-" + (d.getMonth() < 10 ? '0' : '') + d.getMonth() + "-" + (d.getDate() < 10 ? '0' : '') + d.getDate()}</h3>
            <h3>Creation time: {(d.getHours() < 10 ? '0' : '') + d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()}</h3>
          </div>
          : <h3>Creation date/time not found.</h3>
        }
        {(this.props.a !== undefined && this.props.a !== null)
          ? <div className="pb-2">
            <Accordion>
              <Accordion.Toggle as={Button} variant="success" eventKey="0">A Records</Accordion.Toggle>
              {this.props.a.map((item, index) =>
                <Accordion.Collapse key={index} eventKey="0">
                  <p>{item}</p>
                </Accordion.Collapse>)}
            </Accordion>
          </div>
          : <Button className="mb-2" variant="danger" disabled>A Records</Button>}
        {(this.props.ns !== undefined && this.props.ns !== null)
          ? <div className="pb-2">
            <Accordion>
              <Accordion.Toggle as={Button} variant="success" eventKey="1">NS Records</Accordion.Toggle>
              {this.props.ns.map((item, index) =>
                <Accordion.Collapse key={index} eventKey="1">
                  <p>{item}</p>
                </Accordion.Collapse>)}
            </Accordion>
          </div>
          : <Button className="mb-2" variant="danger" disabled>NS Records</Button>}
        {(this.props.cname !== undefined && this.props.cname !== null)
          ? <div>
            <Accordion>
              <Accordion.Toggle as={Button} variant="success" eventKey="2">CNAME Records</Accordion.Toggle>
              {this.props.cname.map((item, index) =>
                <Accordion.Collapse key={index} eventKey="2">
                  <p>{item}</p>
                </Accordion.Collapse>)}
            </Accordion>
          </div>
          : <Button className="mb-2" variant="danger" disabled>CNAME Records</Button>}
      </Container>
    )
  }
}

export default Domain;
