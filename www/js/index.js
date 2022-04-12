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

 window.onclick = e => {
     console.log(e.target);  // to get the element
    /* console.log(e.target.className);  // to get the element tag name alone */    
    let numHit;
    if (e.target.className == 'pBox'){
        if (e.target.style.height != "400px"){ //expands princess selection to 400px tall, then displays more info about princess
        numHit = e.target.id; //get id
        console.log('pbox hits');
        e.target.style.animation = "expand 600ms forwards";
        e.target.style.height = "400px";
        tname = e.target.className;
    } 

    else if (e.target.style.height == "400px"){ //closes expanded info

        e.target.style.animation = "close 600ms forwards";
        e.target.style.height = "10vh";
            console.log( e.target.className + " works " + e.target.style.height)
            
        }
        
        
    }
}  

