import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
        import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider} 
        from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js'
        import {
        getDatabase,ref,set,onValue
      } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js';
      import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
      import { collection, addDoc, updateDoc,setDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"; 
        const firebaseConfig = {
          apiKey: "AIzaSyATxWvLcs-Hygng6exRrQ7BXrMPwWwHryc",
          authDomain: "my-project-5-328c9.firebaseapp.com",
          projectId: "my-project-5-328c9",
          storageBucket: "my-project-5-328c9.appspot.com",
          messagingSenderId: "314343954446",
          appId: "1:314343954446:web:22371cf67d9b073d13045f",
          measurementId: "G-SHX9H9YS27"
        };
        // Initialize Firebase
const app = initializeApp(firebaseConfig); const firestore = getFirestore(app);
const auth = getAuth(app);               const analytics = getAnalytics(app);
const database = getDatabase(app);       const user = auth.currentUser;
const provider = new GoogleAuthProvider();
//      
//Finder
//someemail
//
//Code 
//ON CLICK
    document.getElementById("clickToSign").onclick = function(){
    let emails = document.getElementById("signinGmail").value;
    let email = emails+"@gmail.com";
    let password = document.getElementById("signinPass").value;

  //Create
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        let imageUrl = "/assets/beluga.jpeg";
    function writeUserData(userId, name, email, imageUrl,rank) {
      set(ref(database, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl,
        rank: rank,
      });
    }
    writeUserData(uid,emails,email,imageUrl,0);
      }
    });
    alert("Đã tạo tài khoản thành công");
    rotate();
    email="";
    password="";
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorCode);
})

}

//

//________________________
//______________________
//rotate 
function rotate(){
  if(rotatecomplete==2){
      rotatecomplete=1;
      document.getElementById("login").style.left =" 1900px";
      document.getElementById("signin").style.left =" 650px";
      document.getElementById("login").style.transitionDuration="1s";
      document.getElementById("signin").style.transitionDuration="1s";
      document.getElementById("rotateImg").style.transform="rotate(0deg)";
  }
  else if(rotatecomplete==1){
  document.getElementById("login").style.left =" 650px";
  document.getElementById("signin").style.left =" 1900px";
  document.getElementById("login").style.transitionDuration="1s";
  rotatecomplete=2;
  document.getElementById("signin").style.transitionDuration="1s";
  document.getElementById("rotateImg").style.transform="rotate(360deg)";
  }
  
      console.log(rotatecomplete);
}

//Login
  document.getElementById("clickToLog").onclick = function () {
  let emailLogs= document.getElementById("loginGmail").value;
    let emailLog= emailLogs+"@gmail.com";
  let passwordLog= document.getElementById("loginPass").value;
  signInWithEmailAndPassword(auth, emailLog, passwordLog)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    setTimeout(() => {
      window.location="http://127.0.0.1:5500/html/Home.html";
    }, 1000);
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

  
  
  } else {
  }
  
});

  }
  
//________________________
//______________________
//Read Data

// export class UserFastData{
//   constructor(name,id,image){
//       this.name=name;
//       this.id = id;
//       this.image = image;
//   }
// }

