Simple app for displaying numbers in the fibonacci sequence.



Instructions for running:

\>git clone https://github.com/Taylor-White/Fibonacci_App

\>npm install

\>npm start

Go to localhost.  The app should be running.

If there is an error about missing 'start', go to package.json and add

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
