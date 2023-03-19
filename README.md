# E-Learn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. Run `npm run start` for run with proxy (that fix CORS issue). The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project features

E-Learn is an educational application. It has a home page with a list of courses and course page (with list of lessons).  

The main screen displays course cards in the form of tiles (implemented using the `flex` property). Hovering over a course card launches a video preview without sound.  Added `pagination` (10 elements per page). 

Clicking on a course card redirects in to the course page with a list of lessons. Lessons are  sorted in order and unlocked one by one ( can not view the next lesson until completing the current one). 

If the lesson is <u>unlocked</u>, clicking on the lesson launches the video of the lesson in the `Pop Up` component. Added changing the playback speed using the keyboard (instructions and the current video speed are located below the video).

If the lesson is <u>locked</u> - when you hover over the cursor, a `Tooltip` is displayed with information that the lesson is locked.

Lesson progress is saved using `Local Storage`. When the lesson is opened, the program reads the last saved data and, if there is any saved time, sets the video to start playing. The current video viewing time is recorded every 5 seconds.

When the application is initialized, the presence of a `token` in the local storage is checked, and if there is no `token`, the `token` is obtained using the API and saved to the local storage. During the execution of requests, it is read and used for the request. While executing a request, the first error is handled. In this case, the token is updated and the request is resubmitted. This can be useful if the token is outdated or damaged.
