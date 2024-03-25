<template>
  <div>
    <section>
      <div class="curve"></div>
    </section>
    <div>
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">
        <a router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></a>
        <ul>
          <li><router-link to="/Builder"><a>Builder</a></router-link></li>
          <li><router-link to="/Comparison"><a>Comparison</a></router-link></li>
          <li><router-link to="/Support"><a>Support</a></router-link></li>
        </ul>
    </div>
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p>Email: support@gmail.com</p>
      <p>Phone: 091 123 4567</p>
      <p>Address: Random Building, Random Street, Galway</p>
    </div>
    <div class="feedback-form">
      <h2>Send Feedback</h2>
      <form @submit.prevent="submitFeedback">
        <label for="feedback">Your Feedback:</label>
        <textarea id="feedback" v-model="feedback" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  
  const feedback = ref('');
  
  const submitFeedback = () => {
    console.log('Feedback submitted:', feedback.value);
    feedback.value = '';
  };
</script>

<style scoped>
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

  .contact-info {
    color: white;
    text-align: center;
  }

  .feedback-form {
    color: white;
    text-align: center;
    width: 60%; /* Set width to 70% of the viewport */
    margin: 0 auto;
  }

  textarea {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
    resize: none;
  }

  button[type="submit"] {
    padding: 10px 20px;
    background-color: #4ac94e;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }

  button[type="submit"]:hover {
    color: black;
    background-color: #fadf7f;
  }
</style>
