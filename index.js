var input = document.getElementById("search").value;


async function quotesapi() {
    
    let apiurl=  await  fetch("https://cors-anywhere.herokuapp.com/");
    let getdata = await fetch("https://animechan.vercel.app/api/random");
    let finaledata = await getdata.json();
    console.log(finaledata)
    document.querySelector(".quote").innerText = finaledata.quote
    document.querySelector(".anime").innerText = finaledata.anime
    document.querySelector(".anime1").innerText = finaledata.character

}

// setInterval(quotesapi,5000);
quotesapi();
