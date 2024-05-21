# Kasa : React web app

This project was completed as part of the Web Developper training program at [OpenClassrooms](https://openclassrooms.com/fr/paths/899-developpeur-web).

> Implement the front-end of a housing rental application 🏘️ <br>
> Set up components with React and application routes with React Router ⚛️

### Technical constraints :

-   Tools:
    -   Create React App.
    -   React Router.
    -   The use of Sass is optional. CSS is to be used by default.
    -   No external React library.
-   React:
    -   Logical structure of different files.
    -   Modular and reusable component breakdown (one component per file).
    -   It is recommended to use functional components instead of class components.
    -   Use of props between components.
    -   Use of state in components when necessary.
    -   Event handling.
    -   Use lists as much as possible by iterating over them (for example with map).
-   React Router:
    -   Router logic is consolidated into a single file.
    -   There is one page per route.
    -   Route parameters are managed by React Router in the URL to retrieve information for each lodging.
    -   The 404 page is returned for each non-existent route, or if a value in the URL is not part of the data provided.
    -   General: The code should not produce any errors or warnings in the console.

### Functional constraints :

-   For scrolling through photos in the gallery (Gallery component):
    -   If the user is on the first image and clicks "previous", the gallery displays the last image.
    -   Conversely, when the displayed image is the last in the gallery, if the user clicks "next", the gallery displays the first image.
    -   If there is only one image, the "next" and "previous" buttons do not appear.
    -   The gallery must always remain the same height, as indicated in the Figma mockup. The images will therefore be cropped and centered within the image frame.
-   Collapse:
    -   By default, the Collapses are closed when the page is initialized.
    -   If the Collapse is open, the user's click should close it.
    -   Conversely, if the Collapse is closed, a click should open it.

## Built with :

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,sass,figma,github,html,js,vscode" />
  </a>
</p>

Use of `Figma` for design.<br>
Use of `React` for development and `Saas` for styling.<br>
Use of `GitHub` for version control.<br>

## Installation:

1. Clone the repository :

-   `git clone https://github.com/Nienkepuiss/projet5`

2. Install all dependencies for Front-end:

-   `npm install` or `yarn`

3. Launch front-end:

-   `npm start` or `yarn start`

Front-end will launch at URL:
`http://localhost:3000`