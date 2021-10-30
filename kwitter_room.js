const firebaseConfig = {
      apiKey: "AIzaSyBRu1obGiZCH8wruAc5BQh8-f7Vc-FCo1s",
      authDomain: "kwitter-a6a68.firebaseapp.com",
      databaseURL: "https://kwitter-a6a68-default-rtdb.firebaseio.com",
      projectId: "kwitter-a6a68",
      storageBucket: "kwitter-a6a68.appspot.com",
      messagingSenderId: "740631574094",
      appId: "1:740631574094:web:8eadd0b4407337558e351f",
      measurementId: "G-7FNQVHL5SC"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById(room_name).value;

      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });

      localStorage.setItem("roomname", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name -" + Room_names);
      row = "<div clas='room_name' id="+Room_names+" onclick-'redirectToRoomName(this.id) > #"+ Room_names+"</div><hr>"
      document.getElementById("output"),innerHTML +=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location = "kwiter_page.html";
}