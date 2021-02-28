
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_jKmScula_g12pinQ-NWiGAvJc1fBtgM",
      authDomain: "class-test-1ab44.firebaseapp.com",
      projectId: "class-test-1ab44",
      storageBucket: "class-test-1ab44.appspot.com",
      messagingSenderId: "739629813152",
      appId: "1:739629813152:web:71addbb80d3e6742d3e8c5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
