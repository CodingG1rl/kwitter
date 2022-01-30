const firebaseConfig = {
      apiKey: "AIzaSyAA4Qp3hQhbjceBmmavN8BKw1N2_Ue6Y0M",
      authDomain: "kwitter-8a2a9.firebaseapp.com",
      databaseURL: "https://kwitter-8a2a9-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a2a9",
      storageBucket: "kwitter-8a2a9.appspot.com",
      messagingSenderId: "661514273132",
      appId: "1:661514273132:web:f81077a3c17b83775b3349"
    };
    
   firebase.initializeApp(firebaseConfig);

  function addRoom(){
        room_name = document.getElementById("room_name").value
 firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
      }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;     
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}