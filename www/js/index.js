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
  }

  //Next section will add coins -- all coin ids starrt with 8
  if (e.target.id == 81) {
    //add 1 point
    cVal++;
    document.getElementById("cNumTurn").innerHTML = cVal;
  } else if (e.target.id == 82) {
    //add 2 points
    cVal = cVal + 2;
    document.getElementById("cNumTurn").innerHTML = cVal;
  } else if (e.target.id == 83) {
    //add 3 points
    cVal = cVal + 3;
    document.getElementById("cNumTurn").innerHTML = cVal;
  } else if (e.target.id == 800) {
    //add 3 points
    cVal = 0;
    document.getElementById("cNumTurn").innerHTML = cVal;
  }

  //next section for princessPage only
  if (document.URL.includes("princessPage.html")) {
    //make sure princess page is active page
    if (e.target.id == 1 || e.target.id == 11 || e.target.id == 111) {
      if (document.getElementById("1").style.height != "60vh") {
        //check height
        //expands princess 1 selection to 400px tall, then displays more info about princess 1
        document.getElementById("1").style.animation = "expand 600ms forwards";
        document.getElementById("1").style.height = "60vh";
        tname = e.target.className;
        document.getElementById("111").style.display = "flex";
        document.getElementById("bigInfo1").style.display = "block";
      }
    } else {
      //close if expanded
      document.getElementById("1").style.animation = "close 600ms forwards";
      document.getElementById("1").style.height = "1.6vh";
      document.getElementById("111").style.display = "none";
      document.getElementById("bigInfo1").style.display = "none";
    }
  } else {
  }
};
