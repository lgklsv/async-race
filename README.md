# Async-race

[Async-race](https://lgklsv-async-race.netlify.app/) - race game based on server requests and responses.

## Key features

- user can create, update, delete a car, and see the list of the cars
- it is also possible to create 100 random cars with the special button
- pagination is available on all the pages (garage, winners)
- when user clicks to the engine start button -> UI is waiting for car's velocity answer (waiting for API response) -> the car makes another request to drive and the animation starts. In case api returned 500 error car stops and broken engine animation is shown
- it is possible to start, reset one and all the races
- nice race, engine break animation
- race winners are saved to the local storage and shown on the winners page

## Screenshot

![image](https://user-images.githubusercontent.com/101424508/213935932-b9d01cd7-5afb-4a2b-a519-a4cd7cd85ebe.png)

## Key skills

- Communication with a server (fetch, REST API)
- Async coding / Promises
- Animations
- DOM API

## Tech stack

- typescript
- scss

## Server API (_the project will not work without it_)

Async race API ([github repo](https://github.com/mikhama/async-race-api))

## How run locally

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

# First of all install the provided server
$ git clone https://github.com/mikhama/async-race-api.git

# Go to downloaded folder:
$ cd async-race-api

# Install dependencies:
$ npm install

# Start server:
$ npm start

# Now you can send requests to the address: http://127.0.0.1:3000

# Next step is to clone this repository
$ git clone https://github.com/Alesia-Abaeva/rs-clone.git

# Install dependencies for the actual project
$ npm install

# Start the project
$ npm start
# For more commands read package.json
```
