import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import GridContainer from "./components/GridContainer";
import PicCard from "./components/PicCard";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    score: 0,
    topScore: 0,
    cards
  };

  // Set new Top Score
  setTopScore = newtopscore => {
    this.setState({ topScore: newtopscore });
  };
    // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // Map over this.state.cards and render a PicCard component for each cards object
  render() {
    return (
      <Container>
        <Navbar />
        <GridContainer>
          {this.state.cards.map(card => (
            <PicCard
              id={card.id}
              click={card.click}
              imgUrl={card.image}
              key={card.id}
            />
          ))}        
        </GridContainer>
      </Container>
    );
  }
}

export default App;
