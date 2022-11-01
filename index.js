
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
