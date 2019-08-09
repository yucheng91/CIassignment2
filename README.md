# Pokédex

## Introduction
Pokédex is the website I created to provide the most crucial information that all the Pokémon video game player need for the gameplay.  

It provides a clear overview of the base statistic (or base stats) consists of Speed/Attack/Defense/Special Attack/Special Defense/HP along with all the damage information the players would need to plan & battle to their advantage in the game. 

The information is mainly targetted at players with Nintendo main Pokémon series instead of the side series like Pokémon Go due to different base stats, however, Pokémon Go player still can refer to the 'damage overview' for their Pokémon Go battle.

## UX
The Pokédex site has been designed to be one single page with one single input (via Name or Index) required to ensure the ease of use for all mobile users.  

Background, colour scheme and layout are inspired by Pokémon Go & Pokédex.

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
The features are of the following:  
- Single input field (Can be in Index number or Pokémon name regardless of the casing)
- Pokémon in-game appearance will shown as thumbnail (if available,based on PokéAPI). Otherwise it will return as blank or no image will be shown.
- D3 chart for easy understanding for each Pokémon strongest/weakest stats. The stats go from strongest stats at 12 O'Clock point and goes clockwise to the weakest stats.
- The stats shown are the base stats of each Pokémon, base stats are often the prime representation of the potential a Pokémon species has in battle.
- Damage overview to provide the user with all-in-one knowledge of how to engage the battle in the best possible way.
- Damage overview is shown based on Pokémon type and the result has been highlighted with border colour under each type for easy reference.
- If the result is none, empty space will appear.
- Audio player with the music from first Pokémon game at the bottom for user to enhance the overall experience.

## Testing
The layout has been tested on Windows laptop/Macbook /iPad Mini(2018) /Pixel 2 XL/iPhone SE covering various screen-size. Browsers used for testing are Microsoft Edge, Google Chrome & Apple Safari. All the testing screenshot can be found under demo folder.

Site testing findings:  
- D3 chart is not mobile responsive as it lack of auto-resizing feature, hence I have included the CSS feature "overflow: scroll" so that users from different screen size are still able to view the chart on their screen by scrolling left/right.
- The PokéAPI consists of many different Pokémon that varies in term of the number of information available (example, Pokémon Rattata is considered a single Normal Type only while Charizard is a dual Fire/Flying Type). The whole javascript will stop functioning if 2nd Type information is unavailable & Axios experience timeout failure.
In order to prevent this, I have included multiple Try/Catch feature to ensure that the javascript is able to continually move on to the next operation. 
- I have initially set the music to be autoplay once the user visited the site to enhance the experience. However, in order to save data usage and avoiding unnecessary playback especially on mobile devices, I have since disabled the autoplay hence users will be able to play the music only when they like it.
- For the Stats & Damage Overview section title, I initially created it using bootstrap column function to centralize the section title. However, I realised that the unresponsive chart will extend the column width and shifted the section title to the right. Hence instead of using bootstrap column function, I used Margin-left/Margin-right: Auto to ensure that the section title maintains in their centre aligned with the remaining of the site.

Jasmine Testing findings : 
- Jasmine test has to be done specifically based on each Pokémon API result, as all Pokémon are varied in their type & ability, the main purpose of jasmine testing is to test if each Axios API test is able to retrieve the exact details based on each Pokémon's API.
- Jasmine is unable to identify the link that returned 'Not Found' for the link with invalid name/index (example: https://pokeapi.co/api/v2/pokemon/codeinstitute) as it is still considered as a valid URL site hence it has been done manually.

## Deployment
The site is hosted & deployed directly on the GitHub pages. The HTML page has to be named as index.html to ensure Github deployment will be able to display the page successfully.

The public will be able to fork the repo easily with git clone function and able to preview/deploy the website immediately as all of the features are included in the 
'Test' folder does not have any impact on the deployment of the website itself as it is an external Jasmine testing method on the javascript.
in order to save resource, users can choose to delete the 'test' folder which I created to ensure that all the function are working through Jasmine testing.

## Credits 

### Content 
PokéAPI @ pokeapi.co  
Nintendo  
The Pokémon Company  
Game Freak Inc  

### Media
Pokémon Original Game Soundtrack @ khinsider.com

### Design
Pokémon Go/Pokédex for overall design inspiration