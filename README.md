# Pokédex

## Introduction
Pokédex is the website I created to provide the most crucial information that all the Pokémon game player need for the battle gameplay.  

The information are mainly targetted at players with Nintendo main Pokémon series instead of the side series like Pokémon Go.  

It provide an clear overview of the base statistic along with all the damage information they required to put their Pokémon on the battle.

## UX
The Pokédex site has be designed to be one single page with one single input (via Name or Index) required and it has been inspired by actual mobile application (Pokémon Go) & Pokédex in anime/game series to ensure the ease of use for all users.

## Technologies
1.HTML  
2.CSS  
3.Bootstrap (v4.3.1)  
4.D3  
5.Google Fonts  
6.Jquery  
7.Axios  
8.SweetAlert2  
9.Jasmine

## Features
The features are as of following:  
- Single input field (Can be in Index number or Pokémon name regardless of the casing)
- D3 chart for easy understanding for each Pokémon strongest/weakest stats. The stats goes from strongest at 12 O'Clock point and goes clockwise to the weakest stats.
- The stats shown are the base stats of each Pokémon, base stats are often the prime representation of the potential a Pokémon species has in battle.
- Damange overview to provide user with all-in-one knowleadge of how to engage the battle in best possible way.
- Audio player with the music from first Pokémon game at the bottom for user to enhance the overall experience.

## Testing
The layout has been tested on Windows laptop/Macbook /iPad Mini(2018) /Pixel 2 XL/iPhone SE covering various screen-size. Browser used for testing are Microsoft Edge, Google Chrome & Apple Safari.

Site testing findings:  
- D3 chart is not mobile responsive as it lack of auto resizing feature, hence I have included the CSS feature "overflow: scroll" so that users from different screen size are still be able to view the chart on their screen by scrolling left/right.
- The PokéAPI consists of many different Pokémon that varies in term of the number of information available (example, Pokémon Rattata is consider a Normal Type only while Charlizard is a Fire/Flying Type). The whole javascript will stop functioning if 2nd Type information is unavailable & Axios experience timeout failure.
In order to prevent this, I have included multiple Try/Catch feature to ensure that the javascript is able to continue move on to the next operation. 
- I have initially set the music to be autoplay once the user visited the site to enhance the experience. However, in order to save data usage and avoiding unnecessary playback especially on mobile devices, I have since disabled the autoplay hence users will be able to play the music only when they like it.
- For the Stats & Damage Overview section title, I initially created it using bootstrap column function to centralize the section title. However I realised that the unresponsive chart will extended the column width and shifted the section title to the right. Hence instead of using bootstrap column function, I have instead using Margin-left/Margin-right:Auto to ensure that the section title maintain in their center aligned with the remaining of the site.

Jasmine Testing findings : 
- Jasmine is unable to identify link that returned 'Not Found' for link with invalid name/index (example: https://pokeapi.co/api/v2/pokemon/codeinstitute) as it is still consider as an valid url site.
- As all Pokémon are varies in their type & ability, the main purpose of jasmine testing is to test if each axios api test is able to retrieve the exact details based on each Pokémon's API.
- For information that Axios faced error fetching due to empty object/array, try/catch feature has been deployed in the javascript (see above on site testing) instead of testing in jasmine environment.

## Deployment
The site is hosted & deployed directly on the GitHub pages. The html page has to be named as index.html to ensure Github deployment will be able to display the page successfully.

Public will be able to fork the repo easily with git clone function and able to preview/deploy the website immediately as all of the feature are included in the 
'Test' folder does not have any impact on the deployment of the website itself as it is a external Jasmine testing method on the javascipt.
in order to save resource, users can choose to delete the 'test' folder which I created to ensure that all the function are working through Jasmine testing.

## Credits 

### Content 
PokéAPI @ pokeapi.co

### Media
Pokémon Original Game Soundtrack @ khinsider.com

### Design
Pokémon Go for overall design inspiration