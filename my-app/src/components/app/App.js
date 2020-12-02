import './app.scss';
import Header from '../header/Header';
import Navigation from '../nav/Nav';
import Home from '../home/Home';
import Footer from '../footer/Footer';
import About from '../about/About';
import Saved from '../saved/Saved';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: '',
      result: {},
      status: 'default',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    localStorage.setItem('saved', JSON.stringify([]));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    this.setState({
      status: (this.state.domain !== '') ? 'loading' : 'empty'
    });
    if (this.state.domain !== '') {
      let res = await fetch("https://api.domainsdb.info/v1/domains/search?domain=" + this.state.domain);
      let stat = this.handleValidation(res);
      if (stat === 'success') {
        let jsonRes = await res.json();
        let first = jsonRes.domains[0]
        this.setState({
          result: first
        });
      }
      this.setState({
        status: stat
      });
    }
    event.preventDefault();
  }

  async handleSave(event) {
    let sav = JSON.parse(localStorage.getItem('saved'));
    sav.push(this.state.result);
    localStorage.setItem('saved', JSON.stringify(sav));
    event.preventDefault();
  }

  handleValidation(res) {
    if (res.status === 200) {
      return 'success';
    }
    else {
      return 'error';
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <Header
            domain={this.state.domain}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange} />
          <Switch>
            <Route exact path="/" component={() =>
              (<Home
                result={this.state.result}
                status={this.state.status}
                handleSave={this.handleSave}
              />)} />
            <Route path="/saved" component={Saved} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 