## Friends-Google-Map-Tracker

This project demonstrates using Google Maps Javascript API in an Angular application.

![screenshot](https://github.com/best-lucky1030/Friends-Google-Map-Tracker/blob/main/screenshot.png?raw=true)



## Getting Started

Clone the repo:

```
git clone https://github.com/best-lucky1030/Friends-Google-Map-Tracker
```

Install dependencies for both projects:

```
cd server
npm i
cd ../client
npm i
```

Open the `client/src/environments/environment.ts` and add a Google API key obtained from Google Developer Console. You need a key to use Maps API. Consult official documentation.
```
googleApiKey: 'AIzaSyD_**************2gFwmNRJAPk`
```

Start the backend server
```
cd server && npm start
```

Start the frontend project:
```
cd client && npm start
```
Visit `http://localhost:4200` in your browser.
