Firebase Realtime Database Quickstart
=============================

This small web-app will demo a short code for post and receive data. It also demostrates the network disconnect and re-connect effects. Using 2 different windows, time difference between post and receive and re-connect can be calculated through console logs.

Introduction
------------

[Read more about Firebase Database](https://firebase.google.com/docs/database/)

Getting Started
---------------

 1. Create your project on the [Firebase Console](https://console.firebase.google.com).
 1. Enable the **Google** sign-in provider in the **Authentication > SIGN-IN METHOD** tab.
 1. You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.
 1. On the command line run `firebase use --add` and select the Firebase project you have created.
 1. On the command line run `firebase serve` using the Firebase CLI tool to launch a local server.

Note : Open 2 webapps in 2 different tabs and check the Chrome Developer tool console for post and receive messages of Post comment. It will tell the time difference between post and receive of event.

Support
-------

- [Firebase Support](https://firebase.google.com/support/)

License
-------

© Anurag, 2018. Licensed under an [Apache-2](../LICENSE) license.
