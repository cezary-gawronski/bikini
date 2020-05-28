
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
// newImageButtonOne.addEventListener("click", () => {
//     newImageOne.innerHTML = '<img class="images" src="https://pngimg.com/uploads/spongebob/spongebob_PNG11.png" alt="SpongeBob"></img>'
//     newImageButtonOne.remove();
// });

let oldImageSrc1 = document.querySelector(".images-container-one .images").src;
let newImageSrc1 = "https://pngimg.com/uploads/spongebob/spongebob_PNG11.png";
let imageChange1 = document.querySelector(".images-container-one .images");

newImageButtonOne.addEventListener("click", () => {
    if (imageChange1.src == oldImageSrc1) {
        imageChange1.src = newImageSrc1;
        newImageButtonOne.innerText = "Poprzednie zdjęcie";
    } else {
        imageChange1.src = oldImageSrc1;
        newImageButtonOne.innerText = "Nowe zdjęcie";
    }
});




// newImageButtonTwo.addEventListener("click", () => {
//     newImageTwo.innerHTML = '<img class="images" src="https://data2.cupsell.pl/upload/generator/27909/640x420/1919421_print-trimmed-1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" alt="Patryk Rozgwiazda"></img>'
//     newImageButtonTwo.remove();

// });

let oldImageSrc2 = document.querySelector(".images-container-two .images").src;
let newImageSrc2 = "https://data2.cupsell.pl/upload/generator/27909/640x420/1919421_print-trimmed-1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235";
let imageChange2 = document.querySelector(".images-container-two .images");

newImageButtonTwo.addEventListener("click", () => {
    if (imageChange2.src == oldImageSrc2) {
        imageChange2.src = newImageSrc2;
        newImageButtonTwo.innerText = "Poprzednie zdjęcie";
    } else {
        imageChange2.src = oldImageSrc2;
        newImageButtonTwo.innerText = "Nowe zdjęcie";
    }
});



// newImageButtonThree.addEventListener("click", () => {
//     newImageThree.innerHTML = '<img class="images" src="https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false" alt="SHELDON PLANKTON"></img>'
//     newImageButtonThree.remove();
// });


let oldImageSrc3 = document.querySelector(".images-container-three .images").src;
let newImageSrc3 = "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false";
let imageChange3 = document.querySelector(".images-container-three .images");

newImageButtonThree.addEventListener("click", () => {
    if (imageChange3.src == oldImageSrc3) {
        imageChange3.src = newImageSrc3;
        newImageButtonThree.innerText = "Poprzednie zdjęcie";
    } else {
        imageChange3.src = oldImageSrc3;
        newImageButtonThree.innerText = "Nowe zdjęcie";
    }
});





// newImageButtonFour.addEventListener("click", () => {
//     newImageFour.innerHTML = '<img class="images" src="https://vignette.wikia.nocookie.net/encyklopedia-spongebobia/images/7/7b/Krabs_artwork.png/revision/latest?cb=20190606121952&path-prefix=pl" alt="PAN KRAB"></img>'
//     newImageButtonFour.remove();
// });


let oldImageSrc4 = document.querySelector(".images-container-four .images").src;
let newImageSrc4 = "https://vignette.wikia.nocookie.net/encyklopedia-spongebobia/images/7/7b/Krabs_artwork.png/revision/latest?cb=20190606121952&path-prefix=pl";
let imageChange4 = document.querySelector(".images-container-four .images");

newImageButtonFour.addEventListener("click", () => {
    if (imageChange4.src == oldImageSrc4) {
        imageChange4.src = newImageSrc4;
        newImageButtonFour.innerText = "Poprzednie zdjęcie";
    } else {
        imageChange4.src = oldImageSrc4;
        newImageButtonFour.innerText = "Nowe zdjęcie";
    }
});



//content buttons
let moreButtonOne = document.querySelector(".button-more-one");
let moreButtonTwo = document.querySelector(".button-more-two");
let moreButtonThree = document.querySelector(".button-more-three");
let moreButtonFour = document.querySelector(".button-more-four");

console.log(moreButtonOne.innerText);

//paragraps content
let moreContentOne = document.querySelector(".more-paragraph-one");
let moreContentTwo = document.querySelector(".more-paragraph-two");
let moreContentThree = document.querySelector(".more-paragraph-three");
let moreContentFour = document.querySelector(".more-paragraph-four");


// moreButtonOne.addEventListener("click", () => {
//     moreContentOne.classList.toggle("more-paragraph-open");
//     console.log(moreButtonOne);
// });

moreButtonOne.addEventListener("click", () => {
    moreContentOne.classList.toggle("more-paragraph-open");
    if (moreButtonOne.innerText === "Więcej") {
        moreButtonOne.innerText = ("Mniej");
    }
    else {
        moreButtonOne.innerText = ("Więcej");

    }
});

moreButtonTwo.addEventListener("click", () => {
    moreContentTwo.classList.toggle("more-paragraph-open");
    if (moreButtonTwo.innerText === "Więcej") {
        moreButtonTwo.innerText = ("Mniej");
    }
    else {
        moreButtonTwo.innerText = ("Więcej");

    }
});

moreButtonThree.addEventListener("click", () => {
    moreContentThree.classList.toggle("more-paragraph-open");
    if (moreButtonThree.innerText === "Więcej") {
        moreButtonThree.innerText = ("Mniej");
    }
    else {
        moreButtonThree.innerText = ("Więcej");

    }
});

moreButtonFour.addEventListener("click", () => {
    moreContentFour.classList.toggle("more-paragraph-open");
    if (moreButtonFour.innerText === "Więcej") {
        moreButtonFour.innerText = ("Mniej");
    }
    else {
        moreButtonFour.innerText = ("Więcej");

    }
});


//theme
let changeThemeButton = document.querySelector(".button-theme");
let changeThemeElementBody = document.querySelector(".body-color");
let changeThemeElement = document.querySelector("html");


changeThemeButton.addEventListener("click", () => {
    changeThemeElement.classList.toggle("grayscale");
    changeThemeElementBody.classList.toggle("body-color-gray");

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