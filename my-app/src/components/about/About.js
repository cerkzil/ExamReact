import './about.scss'
import { Container } from 'react-bootstrap';
import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <Container>
        <h2>About Me:</h2>
        <p>I'm Žilvinas Čerkauskas a student at <a href="http://kitm.lt/" target="_blank" rel="noreferrer">KITM</a></p>
        <p>You can find everything I code at: <a href="https://github.com/cerkzil/" target="_blank" rel="noreferrer">GitHub</a> and everything I create at: <a href="https://www.artstation.com/milkysenpai/" target="_blank" rel="noreferrer">ArtStation</a>😋</p>
      </Container>
    )
  }
}

export default About;