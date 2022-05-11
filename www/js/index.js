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
  //console.log(e.target.className);

  //next section for princessPage only
  if (document.URL.includes("princessPage.html")) {
    //make sure princess page is active page
    if (e.target.id == 1 || e.target.id == 11 || e.target.id == 111) {
      if (document.getElementById("1").style.height != "66vh") {
        //check height
        //expands princess 1 selection to 400px tall, then displays more info about princess 1
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
        //expands princess 2 selection to 400px tall, then displays more info about princess 1
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
        //expands princess 3 selection to 400px tall, then displays more info about princess 1
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
        //expands princess 4 selection to 400px tall, then displays more info about princess 1
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
        //expands princess 5 selection to 400px tall, then displays more info about princess 1
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
        //expands princess 6 selection to 400px tall, then displays more info about princess 1
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
    if (e.target.id == 91) {
      console.log("dotsclickeed")
      document.getElementById("secMore").style.animation = "expand7 600ms forwards";
      document.getElementById("secMore").style.display = "flex";
      document.getElementById("spText").style.animation = "cardFade 200ms forwards"; 
    }
    else if (e.target.id == 92){
      document.getElementById("secMore").style.animation = "close7 600ms forwards";
      setTimeout(() => { document.getElementById("secMore").style.display = "none"; }, 600);
      document.getElementById("secMore").style.height = "0px";
      document.getElementById("spText").style.animation = "cardFadeR 599ms forwards"; 
    }
    else if (e.target.id == 991){
      localStorage.setItem("isPBacked", "no");
      document.getElementById("buttonBoxP").style.display = "flex";
      pVal = 0;
      document.getElementById("pNumGame").innerHTML = pVal;
      cVal = 0;
      document.getElementById("cNumTurn").innerHTML = cVal;
      document.getElementById("1Backed").style.display = "none";
    }
    else if (e.target.id == 992){
      pVal = 0;
      document.getElementById("pNumGame").innerHTML = pVal;
    }
    else if (e.target.id == 993){
      localStorage.setItem("isPBacked", "no");
      document.getElementById("buttonBoxP").style.display = "flex";
      document.getElementById("1Backed").style.display = "none";
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
    pVal = pVal - 2;
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
    }
  }
};

function p1Backed(){
  localStorage.setItem("isPBacked", "Yes");
  localStorage.setItem("BackedP", "1");

};
function moreMenu(){
  
};

function checkOnLoad(){
let isPrinBacked = localStorage.getItem("isPBacked");
let backedPrin = localStorage.getItem("BackedP");
console.log(isPrinBacked);
if (isPrinBacked == "Yes") {
  document.getElementById("buttonBoxP").style.display = "none";
  if(backedPrin == "1"){
    document.getElementById("1Backed").style.display = "flex";
    pVal = pVal+6;
    document.getElementById("pNumGame").innerHTML = pVal;
  }
}
};






