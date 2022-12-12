# Phase 1 Project

This is the end of Phase 1 project for Flatiron School.    
     
For this project, the primary goals were to create something that would be useful and could be added on to for more practicality later on while still satisfying the project requirements.     
Creating a list of public APIs was an easy way to acheive these goals. Most websites that list public APIs without an authoriztion key will only list a few different APIs. It can become quite tedious searching through multiple different websites to try to find the perfect API. This project solves that problem. A large collection of APIs was also a great way to introduce add-ons later for functionality/usability (alphabetical organization, dropdown features, search bar, etc.).     
This project, most importantly, satisfies the project requirements set by Flatiron School. On a single page application made from HTML/CSS/JS, it pulls from a public API of public APIs, has at least three event listeners (click, keydown, mouseover, mouseout), and uses array iteration to keep code clean.     
To make the page interactive, multiple event listers were used. The click event will change the background color pink (hex color: #ffd1dc). When hovering over an API, the style will change to make the font larger and a different color for better readability. When a key is pressed, the page will be updated (without refreshing) to show only the APIs that start with that key.      

## Requirements
The requirements for this project included the following:
- Must be written in HTML/CSS/JS that accesses a public API with no auth key
- Must be a single page application
- Use three different event listeners
- Must have one instance of array iteration
- Keep code clean; utilize functions to prevent repeating code

## Features
- The page will load a list of public APIs from this [Public API for Public APIs]
- It immediately filters out the ones that require an auth key, so it only displays the ones that do not require an auth key
- The info about the APIs that is displayed has been filtered to only include the name, a short description, and the link
- On hover, it increases the font size and changes the color of the hovered API for better readability; when the mouse leaves, the style returns back to normal
- On keypress, it will display only the APIs whose first letter matches the key pressed
- If the key pressed is "Escape" the list will return back to default
- On click, the background of the page will turn pink

## Links
Webpage: https://costabileisa.github.io/phase-1-project/   
Video walkthrough:   
Blog post: [First Attempt] [Second Attempt]

[Public API for Public APIs]: https://api.publicapis.org/
[First Attempt]: https://costabileisa.medium.com/flexible-thinking-to-accomplish-the-goal-508c336aaa00
[Second Attempt]: https://costabileisa.medium.com/html-elements-63eb3c0362e