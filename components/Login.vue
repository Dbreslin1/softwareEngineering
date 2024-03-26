<template>
  <div class="container">
      <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1"
              placeholder="Password">
      </div>
      <button @click="login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
export default {
  name: "Login", data() {
      return {
          email: "",
          password: ""
      }
  },
  methods: {
      login() {

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

          signInWithEmailAndPassword(auth, this.email, this.password)
              .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log(user)
                  this.$router.push({path: '/'})
                  // ...
              })
              .catch((error) => {
                  const errorCode = error.code; 
                  const errorMessage = error.message; 
                  
                  console.log(errorCode)
                  console.log(errorMessage)
                  // ..          
              });
      }
  }
}
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
