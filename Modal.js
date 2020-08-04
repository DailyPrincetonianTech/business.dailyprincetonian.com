// Get the modal
var modal = document.getElementById('myModal');

// Get the main container and the body
var body = document.getElementsByTagName('body');

// Get the cards.
var ratesCards = document.getElementsByClassName("rates--card");

// Get the close button
var btnClose = document.getElementById("closeModal");

// Descriptions.

var descrips = [
    `
    Pixel Size: 970x270
    <br>
    For Higher Quality Images, Submit Double Resolution: 1940x540
    `,
    `
    Pixel Size: 300x600
    <br>
    For Higher Quality Images, Submit Double Resolution: 600x1200
    `,
    `
    Pixel Size: 728x90
    <br>
    For Higher Quality Images, Submit Double Resolution: 1456x180
    <br><br>
    The Website Banner includes two ad positions: one banner in the middle of the homepage and one at the bottom.  
    `, 
    `
    Pixel Size: 300x250
    <br>
    For Higher Quality Images, Submit Double Resolution: 600x500
    <br><br>
    Note that this ad appears in the article on mobile (all readers must scroll past it) and next to the article on desktop. About 70% of our readers view our site on their mobile devices.
    `,
    `
    With both click rates and open rates of more than 2 times the industry average, the breaking news email reservation is one of the best ways to engage with The Daily Princetonian’s subscribers. Our subscribers are students, parents, faculty, alumni, and local Princeton residents; feel free to contact us for more details regarding our subscriber demographics. A breaking news email reservation includes the next breaking news email(s) that comes out. 
    `,
    `
    With a 9.6% click rate, our readers engage with our newsletter at more than double the industry average. Email newsletters come out every weekday when school is in session and once per week when school is out of session. Our subscribers are mostly students, parents, faculty, alumni, and local Princeton residents; feel free to contact us for more details regarding our subscriber demographics.
    `,
    `
    With a 9.6% click rate, our readers engage with our newsletter at more than double the industry average. Email newsletters come out every week day when school is in session and once per week when school is out of session. Our subscribers are mostly students, parents, faculty, alumni, and local Princeton residents; feel free to contact us for more details regarding our subscriber demographics.
    `,
    `
    With an average reach of 2000 users and a 10% average click rate, our sponsored Facebook posts offer a premium high-engagement opportunity. All we need from you is your ad, your link, and a caption.
    `,
    `
    Our Instagram is a fantastic way to reach Princeton students and young alumni. All we need from you is your ad, your link, and a caption.
    `,
    `
    Leverage our 15,000 Twitter followers. All we need from you is your ad, your link, and a caption.
    `,
    `
    Played at the beginning of The Daily Princetonian’s widely watched media, your Youtube Ad can be up to 15 seconds long. It can be as simple as an image or a logo, or it can be a full-production video. 
    `,
    `
    Read at the beginning of The Daily Princetonian’s podcasts (every week day when school is in session; once a week when school is out of session), your Podcast Ad can be up to 15 seconds long. 
    `
];

var cpms = [
    `CPM = $10.45<br>`,
    `CPM = $8.25<br>`,
    `CPM = $5.95<br>`,
    `CPM = $5.95<br>`,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``
];

var headers = [
    `Website Billboard`,
    `Website Skyscraper`,
    `Website Banner`,
    `Website Block`,
    `Breaking News Email Reservation`,
    `Email Headline`,
    `Email In-Article`,
    `Facebook Post`,
    `Instagram Post`,
    `Twitter Post`,
    `YouTube Ad`,
    `Podcast Ad`
];


var i = 0;
for (i = 0; i < 12; i++) {
    var j
    for (j = 0; j < 4; j++) {
        const k = i;
        const m = j;
        ratesCards[i + 17 * j].onclick = function () {
            modal.className = "Modal is-visuallyHidden";
            var descrip = document.getElementById("modal--descrip");
            if (m == 2) {
                descrip.innerHTML = cpms[k] + descrips[k];
            } else {
                descrip.innerHTML = descrips[k];
            }
            var header = document.getElementById("modal--header");
            header.innerHTML = headers[k];
            setTimeout(function() {
              body.className = "MainContainer is-blurred";
              modal.className = "Modal";
            }, 100);
        };
    }
}

// Close the modal
btnClose.onclick = function() {
    modal.className = "Modal is-hidden is-visuallyHidden";
    body.className = "";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "Modal is-hidden";
        body.className = "";
    }
}