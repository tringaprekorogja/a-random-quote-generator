/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The only true wisdom is knowing you know nothing.",
    source: "Socrates"
  },
  {
    quote: "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.",
    source: "Mark Twain"
  },
  {
    quote: "The roots of education are bitter, but the fruit is sweet.",
    source: "Aristotle"
  },
  {
    quote: "Do not waste your time looking for an obstacle, maybe there is none.",
    source: "Franz Kafka",
    year: 1920
  },
  {
    quote: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
    source: "Haruki Murakami",
    citation: "Norwegian Wood"
  }
];



/***
 * `getRandomQuote` function
***/

const getRandomQuote = quotesArray => {
  let randomNumber = Math.floor(Math.random() * quotesArray.length);

  for (let i = 0; i < quotesArray.length; i++) {
    let randomQuote = quotesArray[randomNumber];
    return randomQuote;
  }
};


/***
 * `printQuote` function(
***/

const printQuote = () => {
  const randomQuote = getRandomQuote(quotes)
  let htmlString = `<p class ="quote">${randomQuote.quote}</p><br><p class= "source">${randomQuote.source}`
  if (!!randomQuote.citation) {
    htmlString += `<span class = "citation"> ${randomQuote.citation}</span></p>`
  } else if (!!randomQuote.year) {
    htmlString += `<span class = "citation"> ${randomQuote.year}</span></p>`
  } else {
    htmlString += `</p>`
  }
  document.getElementById('quote-box').innerHTML = htmlString; 
  return htmlString;
}



console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);