/******************************************
project 1 - A Random Quote Generator - displays random famous quotes each time a button is clicked.
******************************************/



// creates a quotes array containing objects that store the data for the quotes.

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




//creates a variable to store a random number and returns a random quote object.

const getRandomQuote = () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return randomQuote;
};




/*
 1. Creates a variable and calles the getRandomQuote() function which returns a random quote.
 2. Creaters a variable to store the HTML string and sets it equal to a string containing
    two <p> elements that have the random quote object’s quote and source property.
 4. Tests if the random quote object has a citation property and adds a <span> element.
 5. Tests if the random quote object has a year property and adds a <span> element.
 6. Returns the HTML string.
*/

const printQuote = () => {
  const randomQuote = getRandomQuote()
  let htmlString = `<p class ="quote">${randomQuote.quote}</p><br><p class= "source">${randomQuote.source}`
  if (!!randomQuote.citation) {
    htmlString += `<span class = "citation"> ${randomQuote.citation}</span></p>`
  } else if (!!randomQuote.year) {
    htmlString += `<span class = "year"> ${randomQuote.year}</span></p>`
  } else {
    htmlString += `</p>`
  }
  document.getElementById('quote-box').innerHTML = htmlString;
  return htmlString;
}

/*
  Adds an Event Listener to the element with a load-quote id, so each time the click event 
  happens the printQuote() function is called. 
*/

document.getElementById('load-quote').addEventListener("click", printQuote, false);