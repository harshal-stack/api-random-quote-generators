async function getQuote() {
  ' -> this line;
  const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
try {

     const response = await fetch(proxyUrl + apiUrl) -> this line;
     const data = await response.json();
     console.log({data});
  } catch (error) {
     console.log(error);
      }
  }
// On load
getQuote();


async function quotesapi() {
    Const cors = 'https://cors-anywhere.herokuapp.com'
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/
    let getdata = await fetch(`"https://animechan.vercel.app/api/random"${cors}`);
    let finaledata = await getdata.json();
    console.log(finaledata.anime)
    document.querySelector(".Quotes").innerHTML = finaledata.quote
    document.querySelector(".anime").innerHTML = finaledata.anime
    document.querySelector(".anime1").innerHTML = finaledata.character

}

quotesapi();
