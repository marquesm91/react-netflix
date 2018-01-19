# React Netflix Clone App

This project was inpired in Netflix interface and was reproduced for study purposes. Also, it was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Test yourself

Follow these steps

* `git clone https://github.com/marquesm91/react-netflix`
* `npm install` or `yarn`
* `npm run start` or `yarn start`

The application will open your default browser on https://localhost:3000/

# About the application

Besides the default installation with `create-react-app`, two 3rd party library was added:

* `react-router-dom` found [here](https://github.com/ReactTraining/react-router).
* `react-items-carousel` found [here](https://github.com/bitriddler/react-items-carousel).

The first one was used to user have a better experience with url navigation and keep react application sync'd. The other one was to ease the use of horizontal carousel like Netflix.

# Features

* The application consumes the [MovieDB API](https://www.themoviedb.org/documentation/api) to fill the application with real data.
* The search input on navbar has a nice translate style like netflix and can search for movie names and movies related to a famous person. eg. search for Dory and search for Chris Evans.
* When you search for something and hit enter you will be redirect to Search page only if your results have at least one movie.
* For each Movie Card you can add to your favorite list and it was accessible in Minha Lista on navbar. If the movie already exists on your favorite list a check icon will be visible until you choose to remove it.

# Ways to improve this project

* Make use of Redux to a better state management
* Implement another carousel to have a better way to apply style
* Improve responsiveness to be mobile friendly
