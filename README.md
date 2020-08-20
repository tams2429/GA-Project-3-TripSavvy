# GA-Project-3-TripSavvy
Repo. for GA SEI Group Project No. 3 (Full-Stack)
Dan woz 'ere

# Brief

- **Deadline** Friday 28th Aug. (1.5 weeks),
- **Full-stack** application,
- **Front-End** = **React JS**,
- **Back-End** = **Node JS** with **Express** **(Server API)** and **Mongo DB** **(Database)**,
    - **CRUD** (Create Read Update Delete) functionality,
    - **Multiple Models/Collections** in Database,
- Have a **git repositry** hosted on **Github**,
- Be **deployed online** for **public accessibility**,

# Idea (Inspire trip, Grad trip, Take a Trip, TripSavvy)

- A European (with potential to include other continents) trip planner travel app,
    - For people who want some inspiration on where to go,
    - Selects a random city from an initial filter based on certain predefined user search criterias (i.e. 'hot', 'culture'),
    - Idea inspired from 'Luckytrip' app ([https://luckytrip.co.uk/](https://luckytrip.co.uk/)),

# MVP (By Weds 26th Aug?)

- A homepage with some basic filters in the style of images (functions as a checkbox) that will search the Database with a few initial city records (i.e. 4/5) and present back a 'Show' Card containing information about the city,
    - Within the 'Show' page, there will be added functionality for registered and logged in users, where they can add a city to their 'favorites' and/or 'wishlists'

    Home Page wireframe:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4536a23e-6816-41e5-b8d6-cdcdce277423/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4536a23e-6816-41e5-b8d6-cdcdce277423/Untitled.png)

    'Show' Page wireframe:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f78f660a-a90a-41c7-ac84-74f4bf6974d6/Screenshot_2020-08-20_at_09.20.09.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f78f660a-a90a-41c7-ac84-74f4bf6974d6/Screenshot_2020-08-20_at_09.20.09.png)

- There will also be added functionality, to allow users to register and login to their account on the application,
    - From here, they can chat with other users, see their 'favourite' cities, their 'wishlist' cities,
    - There will be a map showing a users 'favorites' and 'wishlist' cities within a map,

    Profile Page wireframe:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6f58257-5f86-428d-b2fb-3bd279a9c116/Screenshot_2020-08-20_at_09.21.58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6f58257-5f86-428d-b2fb-3bd279a9c116/Screenshot_2020-08-20_at_09.21.58.png)

- For the Back-End side, the Database will initially consist of 2 models, one for the cities, one for the users that will registering and signing into the application,
- For the MVP stage, the database will have 2 models/collections (i.e. cities, users) and will initially contain 4/5, city records and some user information that will be handtyped,
    - For the final product, the city information may be pulled in from an external API,

# Extras/'Nice to haves...'

- External APIs
    - Pull external APIs into Back-End for automated information pulling for the Database (Back-End),
    - Pull external APIs (Hotel, Skyscanner) to Front-End i.e. pictures of hotels, prices of hotels, lat. & long. hotels, prices of flights (Front-End),
- Additional user functionality to create new cities to add to the database,
- Search bar (searching city name in *Cities API* to extract lat & long)
- Add things to the map -> restaurants etc
- Can see where other profiles have been? Message other people that have been to one of your wishes => (Chat function, back end => restricted user access to another chat page)
