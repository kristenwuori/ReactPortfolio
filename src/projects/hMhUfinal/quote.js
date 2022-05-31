
$(document).ready(function () {
    let quotes = [
      {"quote": "Nothing is more important than empathy for another human beings suffering. We have to feel for one another if we are going to survive with dignity", "author":"Audrey Hepburn"},
      { "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" },
      { "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" },
      { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
      { "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" },
      { "quote": "The most common way people give up their power is by thinking they don’t have any.", "author": "Alice Walker" },
      { "quote": "Eighty percent of success is showing up.", "author": "Woody Allen" },
      { "quote": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen Covey" },
      { "quote": "Life is 10% what happens to me and 90% of how I react to it.", "author": "Charles Swindoll" },
      { "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "author": "Maya Angelou" }
    ];

    let random = Math.floor(Math.random() * quotes.length)
      let randomQuote = quotes[random];
      $("#quote").html(randomQuote.quote)
      $("#author").html(randomQuote.author)
    });

    $("#new-quote").click(function () {
    let quotes = [
        {"quote": "Nothing is more important than empathy for another human beings suffering. We have to feel for one another if we are going to survive with dignity", "author":"Audrey Hepburn"},
        { "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse" },
        { "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill" },
        { "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein" },
        { "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart" },
        { "quote": "The most common way people give up their power is by thinking they don’t have any.", "author": "Alice Walker" },
        { "quote": "Eighty percent of success is showing up.", "author": "Woody Allen" },
        { "quote": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen Covey" },
        { "quote": "Life is 10% what happens to me and 90% of how I react to it.", "author": "Charles Swindoll" },
        { "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "author": "Maya Angelou" }
      ];

    let random = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[random];
    $("#quote").html(randomQuote.quote)
    $("#author").html(randomQuote.author)
  });
         


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}