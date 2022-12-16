import { TennisGame } from "./TennisGame";

/**
 * A Player is an object with a name property that is a string and a score property that is a number.
 * @property {string} name - This is the name of the player.
 * @property {number} score - number;
 */
class Player {
	name: string;
	score: number
	constructor(name: string){
		this.name = name;
		this.score = 0;
	}
	
	increaseScore(){
		this.score ++
	}
};

/* It creates a new object with two properties, player1 and player2, and assigns them to the values of the
arguments passed in */
export class TennisGame1 implements TennisGame {
	numberToStringPoints = ["Love", "Fifteen", "Thirty", "Forty"];
	private player1: Player;
	private player2: Player;

/**
 * It creates a new object with two properties, player1 and player2, and assigns them to the values of the
 * arguments passed in
 * @param {string} player1Name - string
 * @param {string} player2Name - string
 */
	constructor(player1Name: string, player2Name: string) {
		if (player1Name === player2Name)
			throw new Error("Error: the names are identical");
		this.player1 = new Player(player1Name)
		this.player2 = new Player(player2Name)
	}

/**
 * If the playerName is the same as the name of the player in the player1 property, increment the score
 * property of the player1 property.
 * @param {string} playerName - string
 */
	wonPoint(playerName: string): void {
		if (this.player1.name === playerName) {
			this.player1.increaseScore();
		}
		if (this.player2.name === playerName) {
			this.player2.increaseScore();
		}
	}

/**
 * If the score is 3 or greater, return Deuce, otherwise return the number of points followed by -All.
 * @param {number} pScore - number - The score of the player
 * @returns The score of the game.
 */
	getScoreForEqualPoints() {
		if (this.player1.score >= 3) {
			return "Deuce";
		}
		return `${this.numberToStringPoints[this.player1.score]}-All`;
	}

/**
 * If the score is normal, return the score; if the score is a win, return the win; if the score is an
 * advantage, return the advantage
 * @returns The score of the game.
 */
	getScoreForDifferentPoints() {
		// normal
		if (this.player1.score < 4 && this.player2.score < 4) {
			return `${this.numberToStringPoints[this.player1.score]}-${this.numberToStringPoints[this.player2.score]}`;
		}
		// win
		if (Math.abs(this.player1.score - this.player2.score) >= 2) {
			return `Win for player${this.player1.score > this.player2.score ? 1 : 2}`;
		}
		// advantage
		return `Advantage player${this.player1.score > this.player2.score ? 1 : 2}`;
	}

/**
 * If the players have equal points, return the score for equal points, otherwise return the score for
 * different points.
 * @returns The score of the game.
 */
	getScore(): string {
		if (this.player1.score === this.player2.score) {
			return this.getScoreForEqualPoints();
		}
		return this.getScoreForDifferentPoints();
	}
}
