# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Problem faced](#problem-faced)
  - [How I solved It](#how-i-solved-it)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot


![](<asset/Screenshot/Desktop Screenshot.png>)


![](<asset/Screenshot/Mobile Screenshot.png>)



### Links

- Solution URL: [Check out my solution on Front end mentor](https://www.frontendmentor.io/solutions/loopstudio-homepage-grid-and-flex-layout-xOCIHt9rCb)
- Live Site URL: [Check out the live site](https://martinsgundi.github.io/Loopstudios-Homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Js


### Problem faced

In this challenge, I encountered an issue with creating a seamless text overlay on a background image. My goal was to have the text overlay blend in with the background image while ensuring that there was no noticeable demarcation line between the two backgrounds.
When using a solid background color for the text overlay, I noticed a distinct contrast between the overlay and the background image, resulting in a visible line of separation.


### How I solved It

After experimenting with various techniques, I found a solution that addressed the issue effectively:

Gradient Background: Instead of using a solid color for the text overlay, I applied a gradient background that mimicked the background image's colors. This approach created a smooth transition between the two backgrounds, eliminating the visible demarcation line.

```css
.overlay {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
}
```

Adjusting the gradient colors and stops allowed me to fine-tune the blending effect.


### What I learned

Through this challenge, I learned several valuable lessons:

Creative Problem Solving: I learned to approach design challenges with a creative mindset, experimenting with various techniques until I found an effective solution.

CSS Techniques: I deepened my understanding of CSS properties, including linear-gradient, backdrop-filter, and opacity, and how they can be used to achieve specific design goals.

Attention to Detail: This challenge reinforced the importance of attention to detail in web design. Small adjustments in design choices can make a significant difference in the final outcome.

Adaptability: I learned to adapt to changing requirements and priorities during the design process, ensuring that the final solution met the project's needs.

Overall, this challenge provided an opportunity to enhance my web design skills and problem-solving abilities, and I'm excited to apply these lessons to future projects.


### Continued development

1. Overlay Techniques:
I will love to continue exploring and experimenting with various overlay techniques, such as CSS pseudo-elements, to enhance the visual effects and presentation of content.

2. Gradient Backgrounds:
I'm excited to keep refining and expanding the use of gradient backgrounds to create compelling visual effects that seamlessly integrate with background images, improving the overall user experience.

3. Color Harmony:
I'm eager to further research and implement color harmonization techniques to ensure that text and background colors blend harmoniously and provide excellent readability, even in challenging design scenarios.


### Useful resources

- [ChatGpt](https://chat.openai.com/) - This guided me to the right solution, after trying different methods. It also helped me with some minor issues I encountered, which aided in faster development.

## Author

- Linkedin - [Martins Ogundipe](https://www.linkedin.com/in/martinsgundi)
- Frontend Mentor - [Martinsgundi](https://www.frontendmentor.io/profile/Martinsgundi)
- Twitter - [Martinsgundi1](https://www.twitter.com/martinsgundi1)