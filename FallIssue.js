var fallIssueOpt = document.getElementsByClassName("fall--option--container");

for (i = 0; i < fallIssueOpt.length; i++) {
    fallIssueOpt[i].onmouseover = function() {
        var children = this.children;
        for (j = 0; j < children.length; j++) {
            if (children[j].nodeName == "IMG") {
                children[j].style.opacity = 0.2;
            }
            if (children[j].nodeName == "P") {
                children[j].style.opacity = 1;
            }
        }
    };

    fallIssueOpt[i].onmouseout = function() {
        var children = this.children;
        for (j = 0; j < children.length; j++) {
            if (children[j].nodeName == "IMG") {
                children[j].style.opacity = 1;
            }
            if (children[j].nodeName == "P") {
                children[j].style.opacity = 0;
            }
        }
    };
}

var fallBtnCampus = document.getElementById('fall--btn--campus');
var fallBtnGeneral = document.getElementById('fall--btn--general');
var fallOptionsDiv = document.getElementsByClassName('fall--options')[0];
var fallDealDiv = document.getElementsByClassName('fall--special--deals')[0];


fallBtnCampus.style.backgroundColor = "#E1712F";
fallBtnCampus.style.opacity = 1;
fallBtnCampus.style.color = "#FFF";

fallBtnCampus.onclick = function() {
    fallBtnCampus.style.backgroundColor = "#E1712F";
    fallBtnCampus.style.opacity = 1;
    fallBtnCampus.style.color = "#FFF";

    fallBtnGeneral.style.backgroundColor = "#F7F8FA";
    fallBtnGeneral.style.opacity = 0.75;
    fallBtnGeneral.style.color = "#000";

    fallOptionsDiv.innerHTML = `
    <div class="fall--options--row">
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Full.png">
                <p>Full Page<br>$960</p>
            </div>
        </div>
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Half.png">
                <p>Half Page*<br>$580</p>
            </div>
        </div>
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Quarter.png">
                <p>Quarter Page<br>$340</p>
            </div>
        </div>
    </div>
    <div class="fall--options--row">
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Eighth.png">
                <p>8<sup>th</sup> Page*<br>$190</p>
            </div>
        </div>
        <div class="fall--option fall--option--truck" style="margin: 0;">
            <div class="fall--option--container">
                <img src="FallPrint/Truck1.png">
                <img src="FallPrint/Truck2.png">
                <p>Double Truck**<br>Reserved for<br>Lead Advertiser</p>
            </div>
        </div>
    </div>`;

    var fallIssueOpt = document.getElementsByClassName("fall--option--container");

    for (i = 0; i < fallIssueOpt.length; i++) {
        fallIssueOpt[i].onmouseover = function() {
            var children = this.children;
            for (j = 0; j < children.length; j++) {
                if (children[j].nodeName == "IMG") {
                    children[j].style.opacity = 0.2;
                }
                if (children[j].nodeName == "P") {
                    children[j].style.opacity = 1;
                }
            }
        };

        fallIssueOpt[i].onmouseout = function() {
            var children = this.children;
            for (j = 0; j < children.length; j++) {
                if (children[j].nodeName == "IMG") {
                    children[j].style.opacity = 1;
                }
                if (children[j].nodeName == "P") {
                    children[j].style.opacity = 0;
                }
            }
        };
    }

    fallDealDiv.innerHTML = `
    <h3>Advertising Deals:</h3>
    <ul>
        <li>$1500 = complementary qtr. page ad</li>
        <li>$2100 = full page ad in all three issues (27% discount)</li>
        <li>$2500 = complementary half page ad</li>
        <li>$3500 = complementary full page ad</li>
        <li>$10000 = Lead Sponsor for three issues (26% discount)</li>

    </ul>`;
};

fallBtnGeneral.onclick = function() {
    fallBtnGeneral.style.backgroundColor = "#E1712F";
    fallBtnGeneral.style.opacity = 1;
    fallBtnGeneral.style.color = "#FFF";

    fallBtnCampus.style.backgroundColor = "#F7F8FA";
    fallBtnCampus.style.opacity = 0.75;
    fallBtnCampus.style.color = "#000";

    fallOptionsDiv.innerHTML = `
    <div class="fall--options--row">
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Full.png">
                <p>Full Page<br>$1580</p>
            </div>
        </div>
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Half.png">
                <p>Half Page*<br>$940</p>
            </div>
        </div>
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Quarter.png">
                <p>Quarter Page<br>$560</p>
            </div>
        </div>
    </div>
    <div class="fall--options--row">
        <div class="fall--option">
            <div class="fall--option--container">
                <img src="FallPrint/Eighth.png">
                <p>8<sup>th</sup> Page*<br>$310</p>
            </div>
        </div>
        <div class="fall--option fall--option--truck" style="margin: 0;">
            <div class="fall--option--container">
                <img src="FallPrint/Truck1.png">
                <img src="FallPrint/Truck2.png">
                <p>Double Truck**<br>Reserved for<br>Lead Advertiser</p>
            </div>
        </div>
    </div>`;

    var fallIssueOpt = document.getElementsByClassName("fall--option--container");

    for (i = 0; i < fallIssueOpt.length; i++) {
        fallIssueOpt[i].onmouseover = function() {
            var children = this.children;
            for (j = 0; j < children.length; j++) {
                if (children[j].nodeName == "IMG") {
                    children[j].style.opacity = 0.2;
                }
                if (children[j].nodeName == "P") {
                    children[j].style.opacity = 1;
                }
            }
        };

        fallIssueOpt[i].onmouseout = function() {
            var children = this.children;
            for (j = 0; j < children.length; j++) {
                if (children[j].nodeName == "IMG") {
                    children[j].style.opacity = 1;
                }
                if (children[j].nodeName == "P") {
                    children[j].style.opacity = 0;
                }
            }
        };
    }

    fallDealDiv.innerHTML = `
    <h3>Advertising Deals:</h3>
    <ul>
        <li>$2900 = complementary qtr. page ad</li>
        <li>$3460 = full page ad in all three issues (27% discount)</li>
        <li>$4000 = complementary half page ad</li>
        <li>$5500 = complementary full page ad</li>
        <li>$14400 = Lead Sponsor for three issues (26% discount)</li>

    </ul>`;
};
