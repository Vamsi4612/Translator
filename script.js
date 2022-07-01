
function read(selector){
    return document.querySelector(selector).value
}
// https://libretranslate.de/translate
let id;
async function translator(){
    try{
    const text = read("#text-input")
    const lang_in =read("#inputselect")
    const lang_out =read("#outputselect")

    const url = "https://libretranslate.de/translate"
    const res= await fetch(url, {
        
        method : "POST",
        body : JSON.stringify({
            q:text,
            source: lang_in,
            target: lang_out,
            format: "text",
        }),
        headers:{
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data)
    document.querySelector("#translatedoutput").innerHTML = data.translatedText

    }
    catch(err){
        console.log(err)
    }

}

function debounce(func,delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func()
    } , delay)
}



