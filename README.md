# Phase 1 Project

This is the end of Phase 1 project for Flatiron School.   
For my project, I wanted to do something that I thought may be of use to me later on as well as something that I would be able to build onto in the future. Creating a list of public APIs seemed like a very useful idea to me because it was annoying to try to find the perfect public API for this project in the first place. I also liked the idea of, in the future, being able to add alphabetical organization, dropdown features for more info on the APIs, a search bar, etc.   
My project is not that complex, but I acheived my goals. I wanted to be able to change the background color to my favorite hex color (#ffd1dc). I also wanted the list to show only the public APIs that did not require an auth key. In order to make it easier to seach through the large list of APIs, I wanted some sort of way to sort or organize/shorten the list, which I achieved by adding the keydown event. Last, to make the wall of text more readable, I was able to add style to the text based on hover which makes the info pop.   
The main purpose of this project is to provide one place where someone could look for a public API that does not require an auth key rather than having to scour multiple different websites that may only have 10 or so APIs liisted on each site.   

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
Webpage can be found at: https://costabileisa.github.io/phase-1-project/   
Video walkthrough can be found at:   
Blogpost can be found at:   

[Public API for Public APIs]: https://api.publicapis.org/