import React, {Component} from 'react';
import './App.css';
import Container from './organisms/Container/Container';
import InnerContainer from './organisms/InnerContainer/InnerContainer';
import Navbar from './molecules/Navbar/Navbar';
import DrawCardsInput from './molecules/DrawCardsInput/DrawCardsInput';
import Button from './atoms/Button/Button';
import CardDisplayGroup from './organisms/CardDisplayGroup/CardDisplayGroup';
import CardDeck from './data/cardDeck.json';

class App extends Component {
  state = {
    mainDeck: CardDeck,
    drawnDeck: [],
    drawSelection: {number: '0', drawType: 'random'}
  };
  
  shuffleDeckHandler = () => {
    let tempDeck = this.state.mainDeck;
    for(let i = tempDeck.length-1; i>=1; i--){
      let randIndex = Math.floor(Math.random()*i);
      let temp = tempDeck[i];
      tempDeck[i] = tempDeck[randIndex];
      tempDeck[randIndex] = temp;
    }
    this.setState({mainDeck: tempDeck})
  }

  drawTypeChangeHandler = (event) => {
    this.setState(
      {
        drawSelection: {drawType: event.target.value, number: this.state.drawSelection.number}
      }
    );
  }

  drawNumberChangeHandler = (event) => {
    this.setState(
      {
        drawSelection: {drawType: this.state.drawSelection.drawType, number: event.target.value}
      }
    );
  }

  drawCardsHandler = () => {
    const numberOfCards = this.state.drawSelection.number;
    let drawnDeck = this.state.drawnDeck;
    if (this.state.drawSelection.drawType === 'random'){
      for(let i=0; i< numberOfCards; i++){
        let randIndex = Math.floor(Math.random()*(this.state.mainDeck.length));
        let removedCard = this.state.mainDeck.splice(randIndex, 1);
        drawnDeck =[...drawnDeck,...removedCard];
      }
      this.setState({drawnDeck: drawnDeck});
    }
    else if (this.state.drawSelection.drawType === 'top'){
      let removedCards = this.state.mainDeck.splice(0, numberOfCards);
      drawnDeck =[...drawnDeck,...removedCards];
      this.setState({drawnDeck: drawnDeck});
    }
  }

  sortDrawnCardsHandler = (deck) => {
    deck.sort((a, b) => (a.valueRank < b.valueRank) ? 1 : -1)
    deck.sort((a, b) => (a.suitRank > b.suitRank) ? 1 : -1)
    this.setState({drawnDeck: deck})
  }

  sortMainCardsHandler = (deck) => {
    deck.sort((a, b) => (a.valueRank < b.valueRank) ? 1 : -1)
    deck.sort((a, b) => (a.suitRank > b.suitRank) ? 1 : -1)
    this.setState({mainDeck: deck})
  }

  resetHandler = () => {
    let resetMainDeck = [...this.state.mainDeck, ...this.state.drawnDeck];
    resetMainDeck.sort((a, b) => (a.id > b.id) ? 1 : -1)
    this.setState(
      {
        mainDeck: resetMainDeck,
        drawnDeck: [],
        drawSelection: {number: '0', drawType: 'random'}
      }
    );
  }

  render() {
    let drawCardsDisplay = null;
    let totalCards = this.state.drawnDeck.length + parseInt(this.state.drawSelection.number);
    if(this.state.drawSelection.number !== '0'){
      if(totalCards < 53){
        drawCardsDisplay = (
          <InnerContainer>
              <Button title = "Draw Cards" onClick={this.drawCardsHandler}/>
              <Button title = "Sort Cards" onClick={this.sortDrawnCardsHandler.bind(this, this.state.drawnDeck)}/>
              <Button title = "Reset Selection" onClick={this.resetHandler}/>
          </InnerContainer>
        )
      }
      else {
        drawCardsDisplay = (
        <p>Number of selected cards is more than the number of cards available to draw. Please select a smaller number of cards to draw.</p>
        )
      }
    }

    return (
      <div className="App">
        <Navbar title="Deck of Cards"/>
        <Container title ='Shuffle'>
          <InnerContainer>
            <Button title = 'Shuffle Deck' onClick = {this.shuffleDeckHandler} />
            <Button title = 'Sort Cards' onClick={this.sortMainCardsHandler.bind(this, this.state.mainDeck)}/>
          </InnerContainer>
          <CardDisplayGroup deck={this.state.mainDeck} />
        </Container>
        <Container title ='Draw' >
          <DrawCardsInput 
            numberToDraw={this.state.drawSelection.number}
            typeOfDraw={this.state.drawSelection.drawType}
            selectDrawNumberChange = {this.drawNumberChangeHandler}
            selectDrawTypeChange = {this.drawTypeChangeHandler}
            />
            {drawCardsDisplay}
            <CardDisplayGroup deck={this.state.drawnDeck} />
        </Container>
      </div>
    );
  } 
}

export default App;
