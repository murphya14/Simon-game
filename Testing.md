# Simon Game - Testing

[README.md](https://github.com/murphya14/Simon-game/blob/master/README.md)

[Website available to view in GitHub Pages](https://github.com/murphya14/Simon-game)


## Testing

The following validators were used to test the code:

* [W3C Markup Validation]( https://validator.w3.org/)
* [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
* [JS Hint](https://jshint.com/)

### Client stories testing:

Most common path through the website:
- The user will be brought to the Home page(the only page) be default.
  Depending on the user, they may want to get more information on how to play the game before starting.

### Testing client stories from UX section of README.md

1. A striking design that is visually stimulating and provides an incentive to play the game.
     * The text is Orbitron which allows for an element of futuristic/space theme that may gain the potential players interest.
     * The gradient background adds to the theme and contrats effectively with the colour pads.
     * The striking pink colour of the "How to Play" button may incentive the potential to click it and find out about the game.

2. I want to be able to access information so I can understand more about the game.
    * The modal button provides a conscise tool to portray the infromation about the game.
    * Its contrasting colours make it easily identifiable for the player and the information provided is clear so they can get started as soon as possible.

3. I want to be able to control the power button so I can experience the interactive nature of the game.
    * A clearly labelled POWER button indicates how the game is turned on.
    * Once clicked, the pads light up and so does the button and this demonstrates the interactive nature of the game.
    * "SCORE" will appear on the scoreboard which indicates the function of the board.

4. I want to be able to control the start button so as to begin when I am ready.
     *  The start button will not light up until clicked.
     *  This initializes the game as shown by the score board "0."

5. I want to be able to set a challenge level.
     *  A clearly labelled "STRICT" slider is in the controls and once clicked it changes to red indicating the challenge that is set.
     *  All instructions for this are shown in the "How to Play" modal.

6. I want to be able to get instant feedback on whether I have lost/game over or gone ahead to the next level/win.
     * The scoreboard displays the level the player is on and if they have won/lost.

### Manual (logical) testing of all elements and functionality on every page.

#### Home Page:

1. Dashboard:
Confirmed
    * the dashboard was displaying properly on all screens.
    * The score board was displaying --
    * Nothing lights up until the power button is pressed.
    * The header and footer were sitting correctly.
    * Spelling was correct and clear.
    * All controls were placed appropriately.

2. "How to Play" modal:
Confirmed
     * Positioned correctly when the page was opened,
     * Visually appealing and obvious to the user.
     * All spelling is correct.
     * Closing the modal is accessable by re-clicking the button or clicking "Close."

3. Power button:
Confirmed
    * Hover over the button and ensure that it changes colour.
    * Once clicked the game reacts by lighting up and changing the scoreboard from "--" to "Score."

4. Start button:
Confirmed
    * The user has the option of pressing the start button once the power button has been activated.
    * Once clicked the game reacts by lighting down and the scoreboard showing the first round.

5. Strict Slider:
Confirmed
    * Switch the slider to ensure it changes colour.
    * Sound also demonstrates the the Strict Mode is on.
    * The game initializes the strict mode when the player begins the game.

6. When the game is in play:
Confirmed
    * The pads display the sound and visual effects for the computer sequence.
    * The pads respond to the user clicks and display the sound and visual effects for the player sequence.
    * There is sufficient time between pad displays.

4. Footer:
Confirmed
    * Check the responsive design at each width.




## Further testing:

1. Received feedback from students, friends and family who viewed the game on different devices. _ There was a problem with the sequence gap time for both playerSequence and computerSequence. This was rectified by using timing intervals._
2. Used Chrome Developer tools to get appropriate placing and design.




















