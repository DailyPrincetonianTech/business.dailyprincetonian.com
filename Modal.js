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
    `Big, bold, and bound to be seen by the majority of The Daily Princetonian’s several hundred thousand online viewers, the Website Billboard ad covers the top of the website and will surely make a statement. 
    <br><br>
    CPM = $10.45
    <br>
    Pixel Size: 970x270
    <br>
    For Higher Quality Images, Submit Double Resolution: 1940x540
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `“Towering” over other ads, the Website Skyscraper ad allows you to clearly showcase your organization and reach our audience. 
    <br><br>
    CPM = $8.25
    <br>
    Pixel Size: 300x600
    <br>
    For Higher Quality Images, Submit Double Resolution: 600x1200
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `A classic ad, the Website Banner ad is actually two ads - one banner ad in the middle of the website and one at the bottom - which means even more engagement. 
    <br><br>
    CPM = $5.95
    <br>
    Pixel Size: 728x90
    <br>
    For Higher Quality Images, Submit Double Resolution: 1456x90
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. 
    `, 
    `One of our more affordable website ads but still impactful, the Website Block ad embodies “Great things come in small packages” and is a great option for first customers. 
    <br>
    <br>
    CPM = $5.95
    <br>
    Pixel Size: 300x250
    <br>
    For Higher Quality Images, Submit Double Resolution: 600x500
    <br>
    <br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `With up to 55% open rates, more than 2 times the industry average, the breaking news email reservation is one of the best ways to engage with The Daily Princetonian’s subscribers. When you purchase a breaking news email (or emails), you reserve the next breaking news email(s) that comes out. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `The first thing subscribers see upon opening our newsletter (every week day when school is in session; once a week when school is out of session), the Email Headline ad gives you direct access to potential customers. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `More affordable than the Email Headline still effective, the Email In-Article ad is an effective alternative on our newsletter (every week day when school is in session; once a week when school is out of session).
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience.`,
    `An easy way to directly reach out to the Prince community, the Facebook Post allows you to customize a powerful message to our audience. 
    <br><br>
    Please send us your ad and caption. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. 
    `,
    `The best way to connect with Princeton students, the Instagram Post is ideal for those looking to connect with the younger generations. 
    <br><br>
    Please send us your ad and caption. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. 
    `,
    `With some of the highest engagement of The Daily Princetonian’s products, the Twitter Post is a solid path to the Princeton community. 
    <br><br>
    Please send us your ad and caption. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. 
    `,
    `Played at the beginning of The Daily Princetonian’s widely watched media, the up-to-15-seconds Youtube Ad is the perfect medium for dynamic videos. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. 
    `,
    `Read at the beginning of The Daily Princetonian’s podcasts (every week day when school is in session; once a week when school is out of session), the up-to-15-seconds Podcast ad allows you to directly voice your message. 
    <br><br>
    All digital advertisements can link to your website. More importantly, all digital advertisement purchases come with a complementary analytics report that tells you key statistics like how many impressions (views) you received and what percentage of viewers clicked on the ad. The Prince strives to offer the best experience. `
]

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
]

function modalFunc(k) {
    console.log(k);
    modal.className = "Modal is-visuallyHidden";
    var descrip = document.getElementById("modal--descrip");
    descrip.innerHTML = descrips[k];
    var header = document.getElementById("modal--header");
    header.innerHTML = headers[k];
    setTimeout(function() {
      body.className = "MainContainer is-blurred";
      modal.className = "Modal";
    }, 100);
}

var i = 0;
for (i = 0; i < 12; i++) {
    var j
    for (j = 0; j < 3; j++) {
        const k = i;
        ratesCards[i + 17 * j].onclick = function () {
            modal.className = "Modal is-visuallyHidden";
            var descrip = document.getElementById("modal--descrip");
            descrip.innerHTML = descrips[k];
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