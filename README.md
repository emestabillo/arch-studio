# Frontend Mentor - Arch Studio multi-page website

This is a solution to the [Arch Studio multi-page website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/arch-studio-multipage-website-wNIbOFYR6).

## Screenshot

![](public/preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

## The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site

#### Home Page

- Clicking on one of the 3 Featured projects should navigate to the `/portfolio` page.

#### Portfolio

- The thumbnails on the `/portfolio` index page do not link anywhere. If this were a real site, these could link to the project websites individually.

#### Contact

- Clicking on "View on Map" should highlight the office that the link was clicked for
- Receive an error message when the contact form is submitted if:
  - The `Name`, `Email` or `Message` fields are empty should show "Can't be empty"
  - The `Email` is not formatted correctly should show "Please use a valid email address"

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- [Live Site URL](https://arch-studio-alpha.vercel.app/)

### Built with

- [Next.js](https://nextjs.org/)
- [CSS modules](https://css-tricks.com/css-modules-part-1-need/)
- [Contentful](https://www.contentful.com/)
- [Google Maps](https://developers.google.com/maps/documentation/javascript)
- [GSAP](https://gsap.com/)
- [Swiper](https://swiperjs.com/)
- Semantic HTML5 markup
- Mobile-first workflow

### What I learned

I initially envisioned this project as a straightforward design-to-development exercise, but as I started working on it, I decided to add some complexity. I migrated the provided JSON data into Contentful, and I made an attempt to implement the bonus challenge where users can view office locations on an embedded Google Map by clicking on the links on the contact details section. Intersecting Next.js' app router, Contentful, and GSAP along with Typescript was new to me, and it presented valuable learning opportunities.

From a design perspective, there were some components that were tricky to implement like the responsive layout of the internal hero and keeping the the employee cards (on the `/about` page) accessible on desktop, where the social media links are only visible on hover. I also saw the chance to apply Andy Bell's pseudo-content technique on the project cards found on the `/portfolio` page, keeping them accessible while structuring them as list items in the markup.

### Continued development

The current design doesn't include a project detail page. I'm considering developing this feature and adding it to the site.

### Useful resources

- [Integrate Contentful to Next.js](https://www.contentful.com/blog/integrate-contentful-next-js-app-router/)
- I found [this article](https://www.99darshan.com/posts/interactive-maps-using-nextjs-and-google-maps) to be helpful in implementing the map
- [Andy Bell's Inclusive Components](https://inclusive-components.design/cards/) for making the project cards accessible

## Author

- Frontend Mentor - [@emestabillo](https://www.frontendmentor.io/profile/emestabillo)
- X - [@emestabillo](https://www.x.com/emestabillo)
