/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
/* document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
} */

let pVal = 0;
let cVal = 0;
window.onclick = (e) => {
  //console.log(button); // to get the element
  /* console.log(e.target.className);  // to get the element tag name alone */
  console.log(e.target.className);

  //next section for princessPage only
  if (document.URL.includes("princessPage.html")) {
    //make sure princess page is active page
    if (e.target.id == 1 || e.target.id == 11 || e.target.id == 111) {
      if (document.getElementById("1").style.height != "66vh") {
        //check height
        //expands p1 info
        document.getElementById("1").style.animation = "expand 600ms forwards";
        document.getElementById("1").style.height = "66vh";
        document.getElementById("TB1").style.pointerEvents = "auto";
        document.getElementById("111").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("111").style.display = "flex";
        document.getElementById("bigInfo1").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo1").style.display = "flex";
      }
    } else if (document.getElementById("1").style.height === "66vh") {
      //close if expanded
      document.getElementById("1").style.animation = "close 600ms forwards";
      document.getElementById("1").style.height = "1.6vh";
      document.getElementById("111").style.display = "none";
      document.getElementById("bigInfo1").style.display = "none";
      document.getElementById("TB1").style.pointerEvents = "none";
    }

    if (e.target.id == 2 || e.target.id == 22 || e.target.id == 222) {
      if (document.getElementById("2").style.height != "66vh") {
        //check height
        //expnd p2info
        document.getElementById("2").style.animation = "expand 600ms forwards";
        document.getElementById("2").style.height = "66vh";
        document.getElementById("TB2").style.pointerEvents = "auto";
        document.getElementById("222").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("222").style.display = "flex";
        document.getElementById("bigInfo2").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo2").style.display = "flex";
      }
    } else if (document.getElementById("2").style.height === "66vh") {
      //close if expanded
      document.getElementById("2").style.animation = "close 600ms forwards";
      document.getElementById("2").style.height = "1.6vh";
      document.getElementById("222").style.display = "none";
      document.getElementById("bigInfo2").style.display = "none";
      document.getElementById("TB2").style.pointerEvents = "none";
    }

    if (e.target.id == 3 || e.target.id == 33 || e.target.id == 333) {
      if (document.getElementById("3").style.height != "66vh") {
        //check height
        //expand p3 info
        document.getElementById("3").style.animation = "expand 600ms forwards";
        document.getElementById("3").style.height = "66vh";
        document.getElementById("TB3").style.pointerEvents = "auto";
        document.getElementById("333").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("333").style.display = "flex";
        document.getElementById("bigInfo3").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo3").style.display = "flex";
      }
    } else if (document.getElementById("3").style.height === "66vh") {
      //close if expanded
      document.getElementById("3").style.animation = "close 600ms forwards";
      document.getElementById("3").style.height = "1.6vh";
      document.getElementById("333").style.display = "none";
      document.getElementById("bigInfo3").style.display = "none";
      document.getElementById("TB3").style.pointerEvents = "none";
    }

    if (e.target.id == 4 || e.target.id == 44 || e.target.id == 444) {
      if (document.getElementById("4").style.height != "90vh") {
        //check height
        //expand p4 info
        document.getElementById("4").style.animation = "expand4 600ms forwards";
        document.getElementById("4").style.height = "90vh";
        document.getElementById("TB4").style.pointerEvents = "auto";
        document.getElementById("444").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("444").style.display = "flex";
        document.getElementById("bigInfo4").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo4").style.display = "flex";
      }
    } else if (document.getElementById("4").style.height === "90vh") {
      //close if expanded
      document.getElementById("4").style.animation = "close4 600ms forwards";
      document.getElementById("4").style.height = "1.6vh";
      document.getElementById("444").style.display = "none";
      document.getElementById("bigInfo4").style.display = "none";
      document.getElementById("TB4").style.pointerEvents = "none";
    }

    if (e.target.id == 5 || e.target.id == 55 || e.target.id == 555) {
      if (document.getElementById("5").style.height != "85vh") {
        //check height
        //expand p5 info
        document.getElementById("5").style.animation = "expand5 600ms forwards";
        document.getElementById("5").style.height = "85vh";
        document.getElementById("TB5").style.pointerEvents = "auto";
        document.getElementById("555").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("555").style.display = "flex";
        document.getElementById("bigInfo5").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo5").style.display = "flex";
      }
    } else if (document.getElementById("5").style.height === "85vh") {
      //close if expanded
      document.getElementById("5").style.animation = "close5 600ms forwards";
      document.getElementById("5").style.height = "1.6vh";
      document.getElementById("555").style.display = "none";
      document.getElementById("bigInfo5").style.display = "none";
      document.getElementById("TB5").style.pointerEvents = "none";
    }

    if (e.target.id == 6 || e.target.id == 66 || e.target.id == 666) {
      if (document.getElementById("6").style.height != "100vh") {
        //check height
        //expand p6 info
        document.getElementById("6").style.animation = "expand6 600ms forwards";
        document.getElementById("6").style.height = "100vh";
        document.getElementById("TB6").style.pointerEvents = "auto";
        document.getElementById("666").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("666").style.display = "flex";
        document.getElementById("bigInfo6").style.animation =
          "cardFade 1000ms forwards"; //fades in info
        document.getElementById("bigInfo6").style.display = "flex";
      }
    } else if (document.getElementById("6").style.height === "100vh") {
      //close if expanded
      document.getElementById("6").style.animation = "close6 600ms forwards";
      document.getElementById("6").style.height = "1.6vh";
      document.getElementById("666").style.display = "none";
      document.getElementById("bigInfo6").style.display = "none";
      document.getElementById("TB6").style.pointerEvents = "none";
    }
  }

  //next section for index only
  else if (document.URL.includes("index.html")) {
    //make sure index is active page
    if (e.target.id == 91) { //opens hamburger menu
      
      document.getElementById("secMore").style.display = "flex";
        document.getElementById("secMore").style.animation =
          "expand7 600ms forwards";
        document.getElementById("secMore").style.display = "flex";
        document.getElementById("spText").style.animation =
          "cardFade 100ms forwards";
        document.getElementById("secMore").style.paddingTop = "60vh";
          document.getElementById("91").style.display = "none";
          document.getElementById("92").style.display = "flex";
    }
  
      else if (e.target.id == 92){
        document.getElementById("secMore").style.animation =
        "close7 600ms forwards";
        document.getElementById("92").style.display = "none";
        document.getElementById("91").style.display = "flex";

      }
    
    

     else if (e.target.id == 991) { //resets app.
      localStorage.setItem("isPBacked", "no");
      document.getElementById("buttonBoxP").style.display = "flex";
      pVal = 0;
      document.getElementById("pNumGame").innerHTML = pVal;
      cVal = 0;
      document.getElementById("cNumTurn").innerHTML = cVal;
      document.getElementById("1Backed").style.display = "none";
      document.getElementById("2Backed").style.display = "none";
      document.getElementById("3Backed").style.display = "none";
      document.getElementById("4Backed").style.display = "none";
      document.getElementById("5Backed").style.display = "none";
      document.getElementById("6Backed").style.display = "none";
      document.getElementById("buttonBoxP").style.display = "flex";
    } else if (e.target.id == 992) { //resets points to 0
      pVal = 0;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 993) { //resets princess section. Removes Princess if backed and restores button.
      localStorage.setItem("isPBacked", "no");
      document.getElementById("buttonBoxP").style.display = "flex";
      document.getElementById("1Backed").style.display = "none";
      document.getElementById("2Backed").style.display = "none";
      document.getElementById("3Backed").style.display = "none";
      document.getElementById("4Backed").style.display = "none";
      document.getElementById("5Backed").style.display = "none";
      document.getElementById("6Backed").style.display = "none";
    }


    //Next section will add or subtract succession points -- all point ids start with 7
    if (e.target.id == 71) {
      //add 1 point
      pVal++;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 72) {
      //add 2 points
      pVal = pVal + 2;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 73) {
      //add 3 points
      pVal = pVal + 3;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 76) {
      //add 6 points
      pVal = pVal + 6;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 711) {
      //subtract 1 point
      pVal--;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 712) {
      //subtract 2 points
      pVal = pVal - 2;
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (e.target.id == 79) {
      //enter custom val
      let pointVal = parseInt(prompt("Enter Your Current Number of Points:"));
      if (pointVal == 9001) {
        //easter egg
        var audio = document.getElementById("9k");
        audio.play();
      } else if (isNaN(pointVal)) { //check if number
        alert("Nice try, but that's not a number.");
        pointVal = pVal; //reverts pVal. It will display NaN without this
      }
      pVal = pointVal;
      document.getElementById("pNumGame").innerHTML = pVal;
    }

    //Next section will add coins -- all coin ids starrt with 8
    if (e.target.id == 81) {
      //add 1 coins
      cVal++;
      document.getElementById("cNumTurn").innerHTML = cVal;
    } else if (e.target.id == 82) {
      //add 2 coins
      cVal = cVal + 2;
      document.getElementById("cNumTurn").innerHTML = cVal;
    } else if (e.target.id == 83) {
      //add 3 coins
      cVal = cVal + 3;
      document.getElementById("cNumTurn").innerHTML = cVal;
    } else if (e.target.id == 800) {
      //reset coin count to zero
      cVal = 0;
      document.getElementById("cNumTurn").innerHTML = cVal;
    } else if (e.target.id == 89) {
      //enter custom val
      let coinVal = parseInt(prompt("Enter Your Current Number of Coinss:")); //prompt to enter custom amount
      if (isNaN(coinVal)) { //check if number
        alert("Nice try, but that's not a number.");
        coinVal = cVal; //reverts cVal. It will display NaN without this
      }
      cVal = coinVal;
      document.getElementById("cNumTurn").innerHTML = cVal;
    }
  }
};

// functions when you select a princess to back. Adds selection to local storage and pops up message
function p1Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "1");
  alert("Lulunasaika Backed! You gained 6 Succession Points!");
}

function p2Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "2");
  alert("Laolily Backed! Please Acquire up to 5 maids from the market.");
}

function p3Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "3");
  alert(
    "Klam-Klam Backed! Cost to ards from the market has been reduced by 1."
  );
}

function p4Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "4");
  alert("Bergamotte Backed! Active her ability to your hearts desire.");
}

function p5Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "5");
  alert(
    "Flammaria Backed! Aquire 2 cards with a cost of 6 or less. Don't move any farming villages into your domain."
  );
}

function p6Backed() {
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "6");
  alert(
    "Lain and Shion Backed! Twin Power! Twin counters will be added to the app in a future update."
  );
}

function checkOnLoad() { //ensures selected princess displays on index page.
  let isPrinBacked = localStorage.getItem("isPBacked");
  let backedPrin = localStorage.getItem("BackedP");
  console.log(isPrinBacked);
  if (isPrinBacked == "Yes") { //check if you have backed a princess
    document.getElementById("buttonBoxP").style.display = "none"; //disables back a princess button
    if (backedPrin == "1") { //displays princess 1
      document.getElementById("1Backed").style.display = "flex";
      pVal = pVal + 6; //you gain 6 points when backing p1. adds 6 points to pval. 
      document.getElementById("pNumGame").innerHTML = pVal;
    } else if (backedPrin == "2") {//displays princess 2
      document.getElementById("2Backed").style.display = "flex";
    } else if (backedPrin == "3") {//displays princess 3
      document.getElementById("3Backed").style.display = "flex";
    } else if (backedPrin == "4") {//displays princess 4
      document.getElementById("4Backed").style.display = "flex";
    } else if (backedPrin == "5") {//displays princess 5
      document.getElementById("5Backed").style.display = "flex";
    } else if (backedPrin == "6") {//displays princess 6
      document.getElementById("6Backed").style.display = "flex";
    }
  }
}
