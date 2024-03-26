<template>
   <div>
     <nav>
       <router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
       <ul>
         <li><router-link to="/Builder">Builder</router-link></li>
         <li><router-link to="/Comparison">Comparison</router-link></li>
         <li><router-link to="/Support">Support</router-link></li>
         <li><router-link to="/Login"><a>Login</a></router-link></li>
         <li><router-link to="/Register"><a>Register</a></router-link></li>
       </ul>
     </nav>
    <div id="MainForm" class="w-25 m-4">
        <h2 class="mb-3">Register User</h2>
        <div class="form-floating mb-3">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" v-model="emailInp" placeholder="name@example.com">
        </div>
        <div class="form-floating mb-3">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" v-model="passwordInp" placeholder="Password">
        </div>
        <div class="form-floating mb-3">
          <label for="fName">First Name:</label>
          <input type="text" class="form-control" id="fName" v-model="fnameInp" placeholder="First Name">
        </div>
        <div class="form-floating mb-3">
          <label for="lName">Last Name:</label>
          <input type="text" class="form-control" id="lName" v-model="lnameInp" placeholder="Last Name">
        </div>
        <button type="submit" class="btn btn-primary" @click="registerUser">Create New User</button> 
        <router-link to="/Login"><button class="btn btn-primary me-2">Sign In</button></router-link>
    </div>
   </div>
 </template>
 
 <script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

export default {
  data() {
    return {
      emailInp: '',
      passwordInp: '',
      fnameInp: '',
      lnameInp: ''
    };
  },
  methods: {
    registerUser() {
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBa09ABvbjGW0sAK0xHcJknr1QQQgx4_ug",
        authDomain: "ct216-project-57225.firebaseapp.com",
        projectId: "ct216-project-57225",
        storageBucket: "ct216-project-57225.appspot.com",
        messagingSenderId: "33393096037",
        appId: "1:33393096037:web:c0d77b7619216bdd1fdd8c"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getDatabase();
      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, this.emailInp, this.passwordInp)
        .then((credentials) => {
          set(ref(db, 'UsersAuthList/' + credentials.user.uid),{
            fname: this.fnameInp,
            lname: this.lnameInp
          });
        })
        .catch((error) => {
          alert(error.message);
          console.log(error.code);
          console.log(error.message);
        });
    }
  }
};
</script>

<style scoped>
/* Component-specific styles go here */

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
    border: 0px;
    height: 100vh;
    background-color: #3f3f3f;
    overflow: hidden;
}

nav {
    display: flex;
    align-items: center;
    padding: 20px 10%;
    background-color: #2f2e2d;
}

#homenav {
    padding-bottom: 100px;
}

nav .menu {
    width: 25px;
    margin-right: 20px;
    cursor: pointer;
}

nav .logo {
    width: 60px;
    cursor: pointer;
    z-index: 5;
}

nav ul {
    flex: 1;
    text-align: right;
}

nav ul li {
    display: inline-block;
    list-style: none;
    margin: 0 20px;
}

nav ul li a {
    text-decoration: none;
    color: white;

}

nav ul li a:hover {
    color: #fadf7f;
}

h1 {
    color: #ffffff;
    background-color: #294d4a;
    margin-top: 0px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 140%;
    text-align: center;
}

.text-container h2 {
    color: #ffffff;
    font-size: 700%;
    font-family: 'Anton', sans-serif;
    line-height: 100%;
    margin-left: 10%;
    margin-top: 0px;
    margin-bottom: 30px;
    position: relative; /* Add position relative */
    z-index: 1; /* Ensure the h2 text has a higher z-index */
}
</style>
