$(document).ready(function() {
    
    // DOM nodes
    var link = $("a");
    var body = $("html, body");
    var quote = $(".quote");
    
    // Quotes
    var quotes = [
        {
            quote: "Never limit yourself because of others' limited imagination, and never limit others because of your own limited imagination.",
            author: "Mae Jemison"
        },
        {
            quote: "A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.",
            author: "Grace Hopper"
        }
    ];
    
    // Randomly select 0 or 1 to display quote
    var randomNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    
    // Get the random quote
    var randomQuote = "\"" + quotes[randomNum].quote + "\"<br/> - " + quotes[randomNum].author;
    
    // Add the random quote to the DOM and fade it in after 2 seconds
    quote.html(randomQuote);
    
    // Smooth scroll to the section clicked
    link.click(function(){
        body.animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
        }, 400);
        return false;
    });
    
});