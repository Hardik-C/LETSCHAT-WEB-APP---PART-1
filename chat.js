const firebaseConfig = {
    apiKey: "AIzaSyB6cDrbPbYbEIOe271149PHcCLipfOTUVI",
    authDomain: "letschat-web-app-b861b.firebaseapp.com",
    projectId: "letschat-web-app-b861b",
    storageBucket: "letschat-web-app-b861b.appspot.com",
    messagingSenderId: "263281837535",
    appId: "1:263281837535:web:30c20fa0bbec6a0c42706a"
  };
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



