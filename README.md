# GA Project 3: TripSavvy

## Table of Contents

- [Overview](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#f99c1c68a0be411ea21aebfba620afdd),
- [Technologies](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#c4e06631a3be4fceb9e534a52290e05d),
- [External APIs](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#9a46589e5ce64646bc78fa1fe13382ee),
- [Planning](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fe3af2ac0fd944c98a0bad3a79ddff88),
- [Getting Started](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#99b60c701ae0446998be70811a2726d1),
- [Wins](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#81e74b7a4ae74f2399c85b5ed0c61304),
- [Challenges](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#7fedc5eb0935405e992e4910a4d6d3a7),
- [Future Work](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fca88914eeb14fc0909ad0588d7ea20c),
- [Credits](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#71bb41b8ab4d425ebb81a67171e30fe8),

## Overview

### Brief

- **Group work**,
- **1 week timeframe**,
- **Build a full-stack application** by making your own Back-End and your own Front-End
- **Use an Express API** to serve your data from a Mongo database,
- **Consume your API with a separate front-end** built with React,
- **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models,
- **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut,
- **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this,
- **Be deployed online** so it's publicly accessible,

Working in a group of 3, we created **TripSavvy**, a Trip Selector App which finds European City destinations for users who cannot decide where to go for their next trip.

This uses a series of unique category filters (i.e. nature, snow, food etc) and based on the user's selection, a random City that satisfies their selected categories are presented to the user on a aesthetic 'show' page which contains additional information about the City, drawing from external APIs (like OpenWeather etc).

![Working Gif of TripSavvy](/ReadmeResources/TripSavvy-GIF.gif)

The is a full-stack app utilising the MERN stack (Mongo DB, Express, React, Node) and the initial motivation for this project came from an app I currently use, LuckyTrip.

## Technologies

- Front-End:
    - ReactJS,
    - HTML5,
    - SCSS (with Bulma framework),
- Back-End:
    - Node.js (with Express.js framework),
    - Mongo DB (with Mongoose) (NoSQL database),
- General:
    - Github,
    - Insomnia (Back-End Testing),

## External APIs

This application uses external APIs, in order to enjoy the full experience of this application,  please use the deployed version here ([https://tripsavvy.herokuapp.com/](https://tripsavvy.herokuapp.com/)) or to run it locally, you will need to sign up for an API key from each of the following links:

- [OpenCage Geocoding API](https://opencagedata.com/api) (Additional info. for Cities),
- [OpenWeatherMap API](https://openweathermap.org/guide) (Weather info. for Citites),
- [Mapbox API](https://docs.mapbox.com/api/) (Maps with markers)

## Planning

- RESTful Routes for Back-end (+images of using Insomnia),

    ![Insomnia Screenshot](/ReadmeResources/Insomnia.png)

- Trello for task allocation and tracking,

    ![Trello Screenshot](/ReadmeResources/Trello.png)

- Adobe XD for initial wireframe,

    ![Adobe XD Wireframe](/ReadmeResources/AdobeHomePageWireframe.png)

- Decided the following things for efficient and effective group work:
    - Daily standup (at the start and at the end of the day),
    - Each person working on a separate file, to minimise clashes during git merge,
    - Constant communication through Slack and Zoom for any problems which may lead to Pair Coding for more complex tasks,
    - Always commit and merge to main development branch before the end of the day,

### MVP

- Basic filter categories which will send a HTTP Get Request to our Back-End Mongo Database, with the response displayed on a City 'Show' page,
- City 'Show' page will contain basic information:
    - City Name,
    - Map of City and its vicinity,
    - Comments/Reviews from Users + functionality to delete if authenticated user created the Comment/Review,
    - Basic description of City,
    - Ability to Edit/Delete a City if authenticated user that created the City,
- User Profile page will containing the following:
    - User information (i.e. Username, Description),
    - List of Favorite/Wishlisted Cities,
    - Map of Favorite/Wishlisted Cities marked,
- Login + Register function,
- 'Create a City' + 'Edit a City' function,
- Basic error validation (i.e. password, unique username)

## Getting Started

As highlighted earlier, in order to enjoy the full experience of the application, it is recommended to use the deployed version at [https://tripsavvy.herokuapp.com/](https://tripsavvy.herokuapp.com/). If you wish to run it locally, you will need to follow the following steps:

- Fork or Clone the GitHub repository ([https://github.com/tams2429/GA-Project-3-TripSavvy](https://github.com/tams2429/GA-Project-3-TripSavvy)),
- In the root project folder (i.e. the Back-End directory), run `npm install` to install all Back-End dependencies,
- `npm run seed` to reseed all existing database records,
- Run `mongod --dbpath ~/data/db` to run Mongo DB,
- `npm start` to start Back-End Server,
- In the 'frontend' folder (i.e. Front-End directory), run `npm install` to install all the Front-End dependencies,
- `npm start` to start the development server for the whole application from the Front-End directory,

## Wins

The whole project was extremely rewarding in seeing and understanding, first-hand, how a full-stack application comes together and learning how to effectively work as a team with the help of tools like Trello and Agile methods (i.e. Bi-daily standups).

Another major win was being able to implement what we learnt in 2 weeks for the Back-End, especially in building a NoSQL database like Mongo DB and a server to handle responses from the Front-End.

It was also very insightful to learn how to use digital wireframing as opposed to hand-drawn.

## Challenges

One of the major challenges of this project was implementing a feature that allows users to 'Favorite/Wishlist' a city and save it onto their profile. This required a 'Reverse Referenced Relationship' between the Users and the Cities Model on the Back-End. A controller function, 'favoriteToggle', was coded to handle the response from the User to add/remove a City from their 'Favorites'.

```jsx
async function favouriteToggle(req, res, next) {
  try {
    const city = await City.findById(req.params.id)
    if (!city) throw new Error(notFound)
    if (!city.favoritedUsers.includes(req.currentUser._id)) {
      city.favoritedUsers.push(req.currentUser._id)
    } else {
      city.favoritedUsers = city.favoritedUsers.filter(id => !id.equals(req.currentUser._id))
    }
    await city.save()
    res.status(200).json(city)
  } catch (err) {
    next(err)
  }
}
```

## Future Work

### Bugs

- The 'Latitude' and 'Longitude' inputs for editing/creating a City can take non-numerical/invalid values which results in an error on the map within the City 'Show' page,
    - Can do conditional rendering to only show the map, when the 'Latitude' and 'Longitude' values are valid,
    - Use an external API to search and autofill the 'Latitude' and 'Longitude' values when a City name has been entered,
    - Error validation to stop invalid values from being inputted,

### Planned features/extensions

- Chat function between Users,
- Extended to cities outside of Europe,
- Link to external APIs where we can request and present 'Latest flight prices', 'Hotel prices',
- Adding a 'Cost' bar filter on the home page, which users can slide/adjust and use as an additional filter,

## Credits

I would like to thank my fellow team members, Dan Irons & Eliza Thompson, for their contribution in our first full-stack application, without whom, it would be impossible for any of us to produce a product like this within the timeframe we were given.
