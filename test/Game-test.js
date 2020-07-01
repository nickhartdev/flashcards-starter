const chai = require('Chai');
const expect = chai.expect;

const Game = require('../src/Game');

describe('Game', function() {

    it('should be a function', function() {
        const game = new Game();
        expect(Game).to.be.a('function');
    });

    it('should be an instance of Game', function() {
        const game = new Game();
        expect(game).to.be.an.instanceOf(Game);
    });

    it('should have a way of keeping track of the current round', function() {
        const game = new Game();

        expect(game.currentRound).to.exist;
    });
})