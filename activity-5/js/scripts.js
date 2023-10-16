/**
 * wrap everything in an IIFE (Immediately Invoked Fuction Expression) to keep
 * our variables constrained to the scope of thid function and out of the globsl scope.
 */
(function() {

// Package data array (stimulated data source, such as JSON or database recordset)
var data = [
    {
        name: 'emmet',
        description: 'emmet is the number one code snippet tool.',
        author: 'emmetio',
        url: 'https://atom.io/Packages/emmet',
        downloads: 1662209,
        stars: 2534,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'atom-beautify',
        description: 'The atom-beautify package will clean up your  code, and make it more readable.',
        author: 'Glavin001',
        url: 'https://atom.io/packages/atom-beautify',
        downloads: 4228040,
        stars: 4541,
        price: 6.75,
        selector: 'p2'
    }
];

// (Atom) package constructor function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector; // *** Remember To Add This If Yo Added It To The Data Objects ** //

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = funtion () {
        return this.stars.toLocaleString();
    };
}

//Return today's date formatted
var getTodaysDate = function() {
    var today = new Date(); 
    return today.toDateString();
};

// Return Dom element by id.
// we're just wrapping document.getElementById
// in a shortland fuction. If this seems confusing,
// then just replace getEl with document.getElementById
// in the writePackageInfo function.
var getEl = function (id) {
    return document.getElementById(id);
}

/** 
 * Write's the package objuect's data to the approriate
 * Dom elenets wtilizing the package selector property. 
 * @param {Package} package Package object
 * @return {void}
*/
var writePackageInfo = function(package) {
    // get reference to Dom elements
    var selector = package.selector,
    nameEl = getEl(selector + '-name'),
    descEl = getEl(selector + '-description'),
    authEl = getEl(selctor + '-author'),
    downloadEl = getEl(selector + '-downloads'),
    starsEl = getEl(selector + '-stars');

    //write package data to Dom elements
    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = package.author;
    downloadEl.textContent = package.getFormattedDownloads();
    starsEl.textContent = package.getFormattedStars();
}

    // write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    /**
     * write package data one-by-one oer with a for loop.
     * Remember to comment ot one you don't you.
     */

    // Erite package data one-by-one
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1])
    writePackageInfo(beautify);

    // continue with eight more packages... OR
    // Write package data using for loop
    // for (var i = 0; i < data.length; i++) {
    // var package = new Package(data[i]);
    // writePackageInfo(package);
    // }

    }());