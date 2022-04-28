# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- First I looked at the figma file and came up with an html skeleton that I thought would scale well for mobile and desktop. after a refactor or two, i came up with this.

- div.container (#form || #thankyou)
  div.card-top

  div.card-bottom

this simple base container will be perfect for both my form and thank you components. both exhibit the pattern of a top and bottom section that have different elements in them.

- next i focused on the rating form component
  the top of rating form has: 
  - an image <img> 
  - a heading <h1> 
  - a paragraph <p>
  the bottom of rating from has: 
  - row of numbers 1 - 5 [.rating-btn, .round, #1-5] 
  - submit button [.submit-button]

- the thankyou component was similar to the form
  top: 
  - img
  - rating confirmation
  - heading 
  - paragraph

Once I got the structure down (more or less. hehe) I started adding styles.
I chose to challenge myself to learn Sass for the first time. 

I found a great article by Adalbert Pungu (https://www.freecodecamp.org/news/how-to-use-sass-with-css/) that you can read here. 
The article breaks down two ways to install and configure Sass, one with node via npm and the other via Live Sass Compiler extension for VScode. 
I went with the latter because this is a small practice project and I'm just learning the basics. I will definitely be using the npm config for larger projects in the future. 

It then goes on and shows you how to get the scss file to compile to the css file. First with everything in one file and then using mixins and variables via @import. 

Once everything was set up, I started adding base styles to the body in the main scss file
I also imported the _variables, _mixins, and the _card. Variables and mixins are used throughout.

Everything is styled mobile first. 


- the star image and the rating number selectors were given the same styling because their round backgrounds are the same

- _variable colors contain a combo of hsl and hsla colors

-When everthing was styled for mobile, I decided to take a break from css and work on some JS functionality. 
I broke down the functionality into smaller bits.
- rating numbers 
  - when a rating is clicked, its background is highlighted
  - when a rating is clicked, all ratings before it must also be highlighted
  - when you click a rating lower than the last rating you clicked, higher ratings go back to unhighlighted
  - when rating is clicked, a predefined variable is updated with the number that was clicked. 
- sumbit button
  - hides form component
  - shows thankyou component
  - thankyou component #user-rating p shows confirmation of rating 

  At first, I had made the rating selection buttons divs nested in a parent div. I switched them to a be an ul and li elements. I fixed it to be a little more semantic. 

  I also had first grabbed each button individually with getElementById and added eventListeners to each of those also individually. Which ended being A LOT of extra code. 

  So on the refactor, I grabbed the ratingsBtns all at once with querySelectorAll and ran a forEach on them to add the eventListeners to each one. 
  
  each btn when clicked, adds 'selected' class to classList and then turns ratingsBtns node list into an array, which we then use to iterate thru for the logic of highlighting or unhighlighting buttons depending on which rating was clicked.




### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
	color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
	console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
