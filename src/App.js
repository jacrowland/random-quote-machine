import React from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox';

let styles = {
  backgroundColor: 'blue'
}

const getRandomRGBColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;
  return color;
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : {
        text: 'Better be ignorant of a matter than half know it.',
        author: 'Publilius Syrus'
      },
      color: 'grey',
      tweetURL: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    let quotes = await this.fetchQuotes();
    this.setState({
      quote : quotes[Math.floor(Math.random() * quotes.length)],
      color: getRandomRGBColor()
    })
  }
  async fetchQuotes() {
    var data = await fetch("https://type.fit/api/quotes/").then(response => {
      return response.json();
    }).then(data => {
      return data;
    })
    return data;
  }
  render() {
    return (
      <div className="App" style={styles}>
      <main>
        <div class="wrapper transition-ease" style={{backgroundColor: this.state.color}}>
          <QuoteBox color={this.state.color} quote={this.state.quote} handleChange={this.handleChange}/>
          <span id="page-author"> By <a href="https://jacobrowland.me">Jacob Rowland</a></span>
        </div>
      </main>
    </div>
    );
  }
}

export default App;
