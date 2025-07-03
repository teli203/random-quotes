const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";
const newQuoteBtn = document.getElementById("new-quote");

//API call for quotes & fails
async function getQuote(url) {
 try {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    } catch (error) {
    quote.innerHTML = "Oops! Failed to fetch quote.";
    author.innerHTML = "";
    console.error("Error fetching quote:", error);
    }
}

getQuote(api_url); //If browser is blocking api go here https://api.quotable.io/random to check for warnings and advance from there

newQuoteBtn.addEventListener("click", () => getQuote(api_url));

// Open twitter with quote & author
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "  -- by " + author.innerHTML, "Tweet Window");
}
