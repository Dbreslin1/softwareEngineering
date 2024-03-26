<template>
  <div class="w-25 m-4">
    <h2 class="mb-3">Register User</h2>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" v-model="emailInp" placeholder="name@example.com">
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" v-model="passwordInp" placeholder="Password">
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="fnameInp" placeholder="First Name">
      <label for="floatingPassword">First Name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" v-model="lnameInp" placeholder="Last Name">
      <label for="floatingPassword">Last Name</label>
    </div>

    <button @click="registerUser" class="btn btn-primary" style="float: right;">Create New User</button>
    <a href="/Login"><button type="button" style="float: right;" class="btn btn-primary me-2">Sign In</button></a>
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
