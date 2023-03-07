import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls/apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }


  componentDidMount() {
    getUrls()
      .then(data => {this.setState({urls: data.urls})
      console.log(this.state.urls)
    })
  }

  grabResponse = (res) => {
    this.setState({ urls: [...this.state.urls, res] })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm grabResponse={this.grabResponse} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
