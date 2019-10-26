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
    * Go to the "Home" page from a desktop.
    * Verify that the navigation bar is responsive and switches from in line menu to select menu based on screen size.
    * Click logo to ensure it links to the Home page
    * Check each link on the navigation bar to ensure it directs as labelled.
    * Check that the active page link is shown based on the gray colour.
    * Hover over the social icons and verify the hover colour change works.

2. "How to Play" modal:
     * Alter width of window to verify that image looks good on all devices and is not included in some devices.

3. Power button:
    * Hover over call to action button and ensure that it changes colour
    * Click the call to action button to ensure that it links to the correct page.

4. Start button:
    * Hover over call to action button and ensure that it changes colour
    * Click the call to action button to ensure that it links to the correct page.

5. Strict Slider:
    * Hover over call to action button and ensure that it changes colour
    * Click the call to action button to ensure that it links to the correct page.

6. When the game is in play:
    * Hover over call to action button and ensure that it changes colour
    * Click the call to action button to ensure that it links to the correct page.

4. Footer:
    * Check the responsive design at each width.




## Further testing:

1. Received feedback from students, friends and family who viewed the website on different devices. _Nav bar was taking up half the screen in medium devices and needed to be fixed so it was left at the top of the page._
2. Difficulty with creating the links when in <select> mode for mobiles. Need to learn JavaScript to implement this feature.




















