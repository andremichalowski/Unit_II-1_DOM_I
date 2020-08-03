/*

  For this challenge you will be asked to follow the requests below and decipher which selector method you should use.  
  
  Once you have finished, you can check your work here:  https://codepen.io/lambdaschool/pen/OoYqNM?editors=1010
  
*/ 

/*
  Request 1: Log the result of every `a` element on the page. The result should be an `HTMLCollection`
*/

const anchorTags = document.getElementsByTagName('a');
//console.log(anchorTags);

/* 
  Request 2: Log the result of every `a` element on the page. The result should be a `NodeList`
*/

const moreAnchorTags = document.quertySelectorAll('a');
// console.log(moreAnchorTags);

/* 
  Request 3: Locate the ID in the HTML. Log the element that the ID is on.
*/

const customID = document.getElementById('first-heading');
// console.log(customID);

// querySelector()

// const customID = document.querySelector('#first-heading');
// console.log(customID);

/* 
  Request 4: Log the first class that matches ".main-content"
*/

const mainContent = document.querySelector('.main-content');
// console.log(mainContent);

/* 
  Request 5: Log the third element with a class of ".nav-item"
*/

const thirdNavItem = document.querySelectorAll('.nav-item');
// console.log(thirdNavItem[2]);



