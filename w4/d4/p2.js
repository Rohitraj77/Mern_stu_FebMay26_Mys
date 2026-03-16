// const translations = {
//     kn: {title: "ಸ್ವಾಗತ", desc: "ಇದು ಸ್ಥಳೀಕೃತ ಇಂಟರ್ಫೇಸ್"},
//     en: {title: "welcome", desc: "This is a localized interface"},
//     hi: {title: "स्वागत हैं", desc: "यह एक स्थानीयकृत इंटरफ़ेस है।"}
// };

// const title = document.getElementById("title");
// const desc = document.getElementById("desc");
// const out = document.getElementById("out");

// function render(lang){
//     const t = translations[lang] || translations.en;
//     document.documentElement.lang = lang;

//     title.textContent = t.title;
//     desc.textContent = t.desc;
//     out.textContent = "current UI lang: " + lang;

//     console.log("Render lang:", lang);
// }

// document.getElementById("langselect").addEventListener("change", function(){
//     render(this.value);
// });

// document.getElementById("detectBtn").addEventListener("click", function(){
//     const detected = (navigator.language || "en").slice(0,2).toLowerCase();
//     render(detected);
// });

// render("en");



const translations = {
    kn: {
        title: "ಸ್ವಾಗತ",
        desc: "ಇದು ಸ್ಥಳೀಕೃತ ಇಂಟರ್ಫೇಸ್"
    },
    en: {
        title: "Welcome",
        desc: "This is a localized interface"
    },
    hi: {
        title: "स्वागत है",
        desc: "यह एक स्थानीयकृत इंटरफ़ेस है"
    }
};

const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");
const langSelect = document.getElementById("langSelect");

function render(lang) {

    const t = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current UI language: " + lang;

    console.log("Render lang:", lang);
}

langSelect.addEventListener("change", function () {
    render(this.value);
});

document.getElementById("detectBtn").addEventListener("click", function () {

    const detected = (navigator.language || "en").slice(0,2).toLowerCase();

    render(detected);

});

render("en");



