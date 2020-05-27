
// images container
let newImageOne = document.querySelector(".images-container-one");
let newImageTwo = document.querySelector(".images-container-two");
let newImageThree = document.querySelector(".images-container-three");
let newImageFour = document.querySelector(".images-container-four");
// images buttons
let newImageButtonOne = document.querySelector(".button-newImage-one");
let newImageButtonTwo = document.querySelector(".button-newImage-two");
let newImageButtonThree = document.querySelector(".button-newImage-three");
let newImageButtonFour = document.querySelector(".button-newImage-four");

//import images innerHTML
newImageButtonOne.addEventListener("click", () => {
    newImageOne.innerHTML = '<img class="images" src="https://pngimg.com/uploads/spongebob/spongebob_PNG11.png" alt="SpongeBob"></img>'
    newImageButtonOne.remove();
});

newImageButtonTwo.addEventListener("click", () => {
    newImageTwo.innerHTML = '<img class="images" src="https://data2.cupsell.pl/upload/generator/27909/640x420/1919421_print-trimmed-1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" alt="Patryk Rozgwiazda"></img>'
    newImageButtonTwo.remove();

});

newImageButtonThree.addEventListener("click", () => {
    newImageThree.innerHTML = '<img class="images" src="https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false" alt="SHELDON PLANKTON"></img>'
    newImageButtonThree.remove();
});

newImageButtonFour.addEventListener("click", () => {
    newImageFour.innerHTML = '<img class="images" src="https://vignette.wikia.nocookie.net/encyklopedia-spongebobia/images/7/7b/Krabs_artwork.png/revision/latest?cb=20190606121952&path-prefix=pl" alt="PAN KRAB"></img>'
    newImageButtonFour.remove();
});


//content buttons
let moreButtonOne = document.querySelector(".button-more-one");
let moreButtonTwo = document.querySelector(".button-more-two");
let moreButtonThree = document.querySelector(".button-more-three");
let moreButtonFour = document.querySelector(".button-more-four");

//paragraps content
let moreContentOne = document.querySelector(".more-paragraph-one");
let moreContentTwo = document.querySelector(".more-paragraph-two");
let moreContentThree = document.querySelector(".more-paragraph-three");
let moreContentFour = document.querySelector(".more-paragraph-four");


moreButtonOne.addEventListener("click", () => {
    moreContentOne.classList.toggle("more-paragraph-open");
});

moreButtonTwo.addEventListener("click", () => {
    moreContentTwo.classList.toggle("more-paragraph-open");
});

moreButtonThree.addEventListener("click", () => {
    moreContentThree.classList.toggle("more-paragraph-open");
});

moreButtonFour.addEventListener("click", () => {
    moreContentFour.classList.toggle("more-paragraph-open");
});


//theme
let changeThemeButton = document.querySelector(".button-theme");
let changeThemeElement = document.querySelector("html");


changeThemeButton.addEventListener("click", () => {
    changeThemeElement.classList.toggle("grayscale");
});

//access
let accessButton = document.querySelector(".button-access");
let changeAccess = document.querySelector(".access");


accessButton.addEventListener("click", () => {
    changeAccess.remove();
});


// header.classList.add("newClass");
// header.classList.remove("newClass");
// header.classList.toggle("newClass");
// header.innerText("");
// header.innerHTML("");