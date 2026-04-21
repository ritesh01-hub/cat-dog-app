let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

let factBtn = document.querySelector("#factBtn");
let imgBtn = document.querySelector("#imgBtn");

factBtn.addEventListener("click", async () => {
    let p = document.querySelector("#result");
    p.innerText = "Loading fact...";
    
    let fact = await getFact();
    p.innerText = fact;
});

imgBtn.addEventListener("click", async () => {
    let img = document.querySelector("#resultImg");
    img.alt = "Loading image...";
    
    let link = await getImg();
    img.setAttribute("src", link);
});

async function getFact(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "Failed to fetch fact 😢";
    }
}

async function getImg(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e){
        return "";
    }
}