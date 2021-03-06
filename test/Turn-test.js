const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should include an answer', function() {
    const turn = new Turn('Answer');    
    expect(turn.answer).to.equal('Answer');
  });

  it('should include an instance of Card', function() {
    const card = new Card();
    const turn = new Turn('Answer', card);

    expect(turn.card).to.be.an.instanceOf(Card);
  });

  it('should be able to return a guess', function() {
    const card = new Card();
    const turn = new Turn('Answer', card);

    expect(turn.returnGuess()).to.equal('Answer');
  });

  it('should be able to return the card', function() {
    const card = new Card();
    const turn = new Turn('Answer', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to tell you if you get the answer wrong', function() {
    const card = new Card(1, 'What is Nick\'s cat\'s name?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    const turn = new Turn('Toby', card);

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to tell you if you get the answer right', function() {
    const card = new Card(1, 'What is Nick\'s cat\'s name?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    const turn = new Turn('Hobbes', card);
    
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should be able to return the correct response if your guess is wrong', function () {
    const card = new Card(1, 'What is Nick\'s cat\'s name?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    const turn = new Turn('Toby', card);

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should be able to return the correct response if your guess is right', function() {
    const card = new Card(1, 'What is Nick\'s cat\'s name?', ['Toby', 'Hobbes', 'Ollie'], 'Hobbes');
    const turn = new Turn('Hobbes', card);

    expect(turn.giveFeedback()).to.equal('correct!');
  });
});