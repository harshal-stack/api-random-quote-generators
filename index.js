
async function quotesapi() {
    let quote = document.querySelector(".quote");
    let anime = document.querySelector(".anime");
    let author = document.querySelector(".author");
    
    let getdata = await fetch("https://animechan.vercel.app/api/random");
    let finaledata = await getdata.json();
    console.log(finaledata.anime)
    document.querySelector(".Quotes").innerHTML = finaledata.quote
    document.querySelector(".anime").innerHTML = finaledata.anime
    document.querySelector(".anime1").innerHTML = finaledata.character

}

quotesapi();
