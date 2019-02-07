import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import GridContainer from "./components/GridContainer";
import PicCard from "./components/PicCard";
import cards from "./cards.json";
import * as Animatable from 'react-native-animatable';

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    score: 0,
    topScore: 0,
    cards,
  };

  shuffleArray = ()=> {
    let orderListRandom = cards.slice()
    for (let i = orderListRandom.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [orderListRandom[i], orderListRandom[j]] = [orderListRandom[j], orderListRandom[i]];
    };
    this.setState({cards:orderListRandom})
  };
  resetGame = ()=>{
    let newcards=cards.slice();
    newcards.forEach(card=>card.click=false);
    this.setState({cards:newcards, score:0})
  }
  // Set random order of the list when the component mounts
  componentDidMount() {   
    let orderListRandom = cards.slice()
    for (let i = orderListRandom.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [orderListRandom[i], orderListRandom[j]] = [orderListRandom[j], orderListRandom[i]];
    };
    this.setState({cards:orderListRandom})
  };
  // Set new Top Score
  setTopScore = newtopscore => {
    this.setState({ topScore: newtopscore });
  };
    // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
  rightchoice = ()=> {
    let newscore = this.state.score +1;
    this.setState({score:newscore});
    this.setTopScore(Math.max(this.state.topScore,newscore));
    this.shuffleArray()
  }
  wrongchoice = ()=> {
    this.setState({score:0});
    this.resetGame();
    this.shuffleArray()
  }

  handleBtnClick = event => {
    // Get the data-click of the clicked card
    const clickstatus = event.target.attributes.getNamedItem("data-click").value;
    // Get the id of the clicked card
    const clickedCardId = parseInt(event.target.attributes.getNamedItem("data-id").value);
    console.log("clickcardid: "+clickedCardId)
    // Find the index of card object from the array
    const objIndex = this.state.cards.findIndex(obj => obj.id === clickedCardId);
    console.log("index: "+objIndex)
    // We will modify the object
    const newState = { ...this.state };
    // Change the click value to true for the object that was clicked. This newState however will not be merged with the current state if right click happens
    newState.cards[objIndex].click=true;
    console.log(clickstatus)

    if (clickstatus==="false") {
      this.setState(newState);      
      this.rightchoice()
    } else {
      this.wrongchoice()
    }
  };  

  // Map over this.state.cards and render a PicCard component for each cards object
  render() {
    return (
      <div>
      <Navbar score={this.state.score} topScore={this.state.topScore}/>      
      <Container>
        <GridContainer>
          {this.state.cards.map(card => (
            <PicCard
              id={card.id}
              click={card.click}
              imgUrl={card.image}
              key={card.id}
              picCardClicked = {this.handleBtnClick}
            />
          ))}        
        </GridContainer>
      </Container>
    </div>      
    );
  }
}

export default App;
