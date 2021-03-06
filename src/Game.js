const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = '';
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    let cards = this.generateCards();
    let deck = this.createDeck(cards);
    let round = this.startNewRound(deck);

    this.printMessage(deck, round);
    this.printQuestion(round);
    this.currentRound = round;
  }

  generateCards() {
    const cards = prototypeQuestions.map(question => {
      return new Card(question.id, question.question, question.answers, question.correctAnswer);
    });

    return cards;
  }

  createDeck(cards) {
    return new Deck(cards);
  }

  startNewRound(deck) {
    return new Round(deck);
  }
}

module.exports = Game;