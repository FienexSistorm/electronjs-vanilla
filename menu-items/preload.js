// this is a preload script that will run just before the electron app launches

console.log("preload is executing");

window.addEventListener("DomContentLoaded",  () => {
    const replaceText = (selector, text)=> {
        const element = document.getElementById(selector);
        if(element)
            element.innerText = text;
    }


for(const dependency of ['chrome','electron','node']){
    replaceText(`${dependency} version `, process.versions["dependency"]);
}
});