# Frontend Mentor - Space tourism website solution

[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/guilhermemotta/space-tourism-fm-challenge/blob/main/README.pt-br.md)

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Space tourism website solution](#frontend-mentor---space-tourism-website-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Experience](#experience)
    - [Continued development](#continued-development)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./Screenshot-Space-Tourism.png)

### Links

- Solution URL: https://github.com/guilhermemotta/space-tourism-fm-challenge
- Live Site URL: https://guilhermemotta.github.io/space-tourism-fm-challenge

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router]() - Routing lib for SPA
- [TailwindCSS](https://tailwindcss.com/) - For utility classes and styling
- [Vite](https://vitejs.dev/) - To run my dev environment, build the project and let Create React App fall to oblivion.
- Github Pages - To host the solution's demo.

### Experience

This challenge was a good oportunity to refresh my prior experience with responsive layouts and to keep my React knowledge sharpened.

In spite of the lack of the consumption of external APIs in this project, it was a nice excuse to explore TailwindCSS, which reminded me of my experience with using Bootstrap but without the bad parts! (Memories of abusing the !important rule to overload the native style system of Bootstrap)

Aside the "agony" of having elements with gigantic classes, I must confess that it was a joy to work with CSS in this way, sparing me of the overhead of creating names for each class (even with the practicality of using BEM, can't say I'm fond of the classic way of styling HTML).

This project also helped me to let go of the "need" to do everything responsive using flexbox and allowed me to explore the Grid way and using `grid-template-area` rule that empowered me to create pages where their elements had a specific ordering depending of the size of the screen.

### Continued development

In my next project, I intend to give more attention to accessibility, working with external APIs, route security and testing.

## Author

- Website - [Guilherme Motta](https://github.com/guilhermemotta)
- Frontend Mentor - [@guilhermemotta](https://www.frontendmentor.io/profile/guilhermemotta)
- [LinkedIn](https://www.linkedin.com/in/guilherme-motta-125042144)

## Acknowledgments

- Having the opportunity to see how the components in the lib [DaisyUI](https://daisyui.com/) were implemented played a huge part in me being able to implement the navigation bar used in this project. The team responsible of the lib is certainly doing a great job with it, I tip my hat!
- Josh Comeau's post [Scale with pseudo-elements](https://www.joshwcomeau.com/snippets/html/scale-with-pseudoelements/) gave me enough information that allowed me to implement the hover effect in the root page of the project.
- After hitting my head enough times trying to implement the page "Crew" using Flexbox, I managed to get it right using Grid thanks to [Kevin Powell](https://github.com/kevin-powell)'s CSS tips and the excelent article in CSS-Tricks: [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid).
