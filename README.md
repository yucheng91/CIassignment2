# Pokedex

## Introduction
Pokedex is the most useful site for all the current Nintendo Pokemon game players around the globe. 
It provide an clear overview of the base statistic along with all the information they required to put their Pokemon on the battlefield.

## UX
The Pokedex site has be designed to be one single page with one single input (via Name or Index) required and it has been modeled after the actual mobile application (Pokémon Go) to ensure the ease of use for all users.


## Technologies
1.HTML  
2.CSS  
3.Bootstrap (v4.3.1)  
4.D3
5.Google Fonts  
6.Jquery
7.Axios

## Features
The interactive features are as of following:  
- Social Media buttons under main group logo (Facebook/Twitter/Instagram/Youtube)
- Spotify embedded player for visitors to have sneak peek of the song on site itself
- Youtube player for viewing of their music video 
- The RSVP Button for visitors to RSVP to the event

## Testing
The layout has been tested on Windows laptop/Macbook /iPad Mini(2018) /Pixel 2 XL/iPhone SE covering various screen-size. Browser used for testing are Microsoft Edge, Google Chrome & Apple Safari.

During the testing, these are the following findings :  
- D3 chart is not mobile responsive as it lack of auto resizing feature, hence I have included the CSS as overflow: scroll so that users from different screen size are still be able to view the chart on their screen by scrolling left/right.
- The PokéAPI consists of many different Pokemon that varies in term of the number of information available (example, Pokemon Rattata is consider a Normal Type only while Charlizard is a Fire/Flying Type). The whole javascript will stop functioning if 2nd Type information is unavailable & Axios experience timeout failure.
In order to prevent this, I have included multiple Try/Catch feature to ensure that the javascript is able to continue move on to the next operation. 
- I have initially set the music to be autoplay once the user visited the site to enhance the experience. However, in order to save data usage and avoiding unnecessary playback especially on mobile devices, I have since disabled the autoplay hence users will be able to play the music only when they like it.

## Deployment

## Credits 

### Content 
PokéAPI @ pokeapi.co

### Media
Pokémon Original Game Soundtrack @ khinsider.com

### Design
Pokémon Go for overall design inspiration