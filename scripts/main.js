/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';


var post_data = document.getElementById('post-data');
var go_online = document.getElementById('go-online');
var go_offline = document.getElementById('go-offline');


// firebase.database()
var connectedRef = firebase.database().ref(".info/connected");

connectedRef.on("value", function(snap) {
  var d = new Date()
  if (snap.val() === true) {
    console.log("Reports Online at "+d+" "+d.getMilliseconds())
  } else {
    console.log("Reports Offline at "+d+" "+d.getMilliseconds())
  }
});

var postref = firebase.database().ref('post-data/' );
postref.on('child_changed', function(data) {
  var d = new Date()
  console.log("Post Change event received "+d+" "+d.getMilliseconds())
  // addCommentElement(postElement, data.key, data.val().text, data.val().author);
});

post_data.addEventListener('click', function() {
  var d = new Date()
  console.log("Data posted is : "+d+" "+d.getMilliseconds())
  firebase.database().ref('/post-data/' ).set({
    text: d.toString()
  });
});

go_online.addEventListener('click', function() {
  var d = new Date()
  console.log("Database triggered online at : "+d+" "+d.getMilliseconds())
  firebase.database().goOnline();
});

go_offline.addEventListener('click', function() {
  var d = new Date()
  console.log("Database triggered offline at : "+d+" "+d.getMilliseconds())
  firebase.database().goOffline();
});

// Bindings on load.
window.addEventListener('load', function() {
  // var provider = new firebase.auth.GoogleAuthProvider();
  // firebase.auth().signInWithPopup(provider);

}, false);
