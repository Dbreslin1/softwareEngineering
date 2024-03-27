<template>
    <div>
      <nav>
        <router-link to="/HomePage"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
        <ul>
          <li><router-link to="/Builder">Builder</router-link></li>
          <li><router-link to="/Comparison">Comparison</router-link></li>
          <li><router-link to="/Support">Support</router-link></li>
          <li><a @click="logout" class="logout-btn">Logout</a></li>

        </ul>
      </nav>
      <div class="custom-select">
        <!-- Keep the top dropdown static -->
        <select v-model="selectedPart">
          <option value="Motherboard">Motherboard</option>
          <option value="CPU">CPU</option>
          <option value="Cases">Cases</option>
          <option value="RAM">RAM</option>
          <option value="Storage">Storage</option>
          <option value="PSU">PSU</option>
          <option value="GPU">GPU</option>
        </select>
      </div>
      <div class="rectangle-container">
        <div class="rectangle">
          <p class="info"><b>Pc part 1</b></p>
          <select class="myDropDown1" v-model="pcPart1">
            <option v-for="option in pcPart1Options" :key="option">{{ option }}</option>
          </select>
        </div>
        <div class="rectangle">
          <p class="info"><b>Pc part 2</b></p>
          <select class="myDropDown1" v-model="pcPart2">
            <option v-for="option in pcPart2Options" :key="option">{{ option }}</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Compare',
    data() {
      return {
        selectedPart: 'Motherboard', // Default selection for the top dropdown
        pcPart1: '', // Selected PC part 1
        pcPart2: '', // Selected PC part 2
        pcPart1Options: [], // Options for PC part 1 dropdown
        pcPart2Options: [] // Options for PC part 2 dropdown
      };
    },
    methods: {

      logout(){
    if(confirm("Are you sure you want to logout?")){
        this.$router.push('/');
    }
    },

      async fetchOptionsForPart(part, endpoint) {
        try {
          const response = await fetch(endpoint);
          const data = await response.json();
          console.log(data); // Log the response data to the console
          this.pcPart1Options = data.map(item => item.Name); // Assuming data is an array of objects with 'Name' property
          this.pcPart2Options = data.map(item => item.Name); // Assuming data is an array of objects with 'Name' property
        } catch (error) {
          console.error(`Error fetching options for ${part}:`, error);
        }
      },
      async fetchMotherboardOptions() {
        await this.fetchOptionsForPart('Motherboard', 'https://getmotherboard-igki44h7vq-uc.a.run.app');
      },
      async fetchCpuOptions() {
        await this.fetchOptionsForPart('CPU', 'https://getcpu-igki44h7vq-uc.a.run.app');
      },
      async fetchCasesOptions() {
        await this.fetchOptionsForPart('Cases', 'https://getcase-igki44h7vq-uc.a.run.app');
      },
      async fetchRAMOptions() {
        await this.fetchOptionsForPart('RAM', 'https://getram-igki44h7vq-uc.a.run.app');
      },
      async fetchStorageOptions() {
        await this.fetchOptionsForPart('Storage', 'https://getstorage-igki44h7vq-uc.a.run.app');
      },
      async fetchPSUOptions() {
        await this.fetchOptionsForPart('PSU', 'https://getpsu-igki44h7vq-uc.a.run.app');
      },
      async fetchGpuOptions() {
        await this.fetchOptionsForPart('GPU', 'https://getgpu-igki44h7vq-uc.a.run.app');
      }
      // Add more methods for other PC parts if needed
    },
    mounted() {
      // Fetch options based on the default selection (Motherboard)
      this.fetchMotherboardOptions();
    },
    watch: {
      selectedPart(newValue) {
        // Fetch options based on the selected part
        if (newValue === 'Motherboard') {
          this.fetchMotherboardOptions();
        } else if (newValue === 'CPU') {
          this.fetchCpuOptions();
        } else if (newValue === 'Cases') {
          this.fetchCasesOptions();
        } else if (newValue === 'RAM') {
          this.fetchRAMOptions();
        } else if (newValue === 'Storage') {
          this.fetchStorageOptions();
        } else if (newValue === 'PSU') {
          this.fetchPSUOptions();
        } else if (newValue === 'GPU') {
          this.fetchGpuOptions();
        }
        // Add more conditions for other PC parts if needed
      }
    }
  };
  </script>
  
  <style scoped>

.logout-btn {
  cursor: pointer; /* Change cursor to a hand on hover */
}

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
  
  .text-container p {
      margin-top: 10px;
      margin-left: 10%;
      color:#ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
  }
  
  .text-container a {
      text-decoration: none;
      background: #5fbb97;
      padding: 14px 40px;
      margin-left: 10%;
      display: inline-block;
      color: #fff;
      font-size: 20px;
      border-radius: 30px;
  }
  
  section {
      margin: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 0px;
      padding: 0px 10%;
  }
  
  .curve {
      position: absolute;
      height: 225px;
      width: 100%;
      bottom: 0;
  
  }
  
  .curve::before {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100% 50%;
      width: 54.3%;
      height: 100%;
      background-color: #3f3f3f;
      transform: translate(85%, 137%);
  }
  
  .curve::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 100% 50%;
      width: 51.7%;
      height: 100%;
      background-color: #2f2e2d;
      transform: translate(-4%, 130%);
      z-index: 0;
  }
  
  table {
      margin-top: 50px;
      border-collapse: collapse;
      width: 70%;
      margin-left: 15%;
      box-shadow: 0 .1rem 1rem #000;
      border-radius: 1rem;
      color: #fff;
      /*border: 3px double hotpink;*/
  }
  
  th,
  td {
      height: 60px;
      padding: 0.6rem;
      text-align: left;
      /*border: 1px dashed hotpink;*/
  }
  
  th {
      background-color: #2f2e2d;
  }
  
  tbody tr:hover {
      background-color: #3336;
  }
  
  .status {
      margin-left: 37%;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      text-align: center;
      box-shadow: 0 .1rem .2rem #000;
  }
  
  .status.compatiable {
      background-color: #2a6863;
  }
  
  .status.uncompatiable {
      background-color: #ca3c3c;
  }
  
  a {
      color: #fff;
      text-decoration: none;
  }
  
  a:hover {
      color: #fadf7f;
  }
  
  .image {
      height: 30vmin;
      width: 40vmin;
      object-fit: cover;
      object-position: center;
      border-radius: 15%;
      filter: drop-shadow(10px 10px 10px #2d2f2e)
  }
  
  #image-setone {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 49%;
      top: 15%;
      border-radius: 100% 50%;
  }
  
  #image-settwo {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 38%;
      top: 35%;
      border-radius: 100% 50%;
  }
  
  #image-setthree {
      display: flex;
      gap: 10vmin;
      position: absolute;
      left: 49%;
      top: 60%;
      border-radius: 100% 50%;
  }
  
  select {
      box-shadow: 0 .1rem .3rem #000;
      font-size: 18px;
      padding: 0.3em 1.5em;
      background: #2f2e2d;
      color: #fff;
      border: none;
  }
  
  .custom-select {
      margin-top: 20px;
      margin-left: 45%;
      margin-right: 45%;
  }
  
  
  .rectangle-container {
      display: flex;
      justify-content: space-between;
  }
  
  .rectangle {
      flex: 1;
      height: 700px;
      background-color: #2f2e2d;
      margin: 5%;
      border-radius: 1% 1%;
      filter: drop-shadow(10px 10px 10px #2f2e2d)
  }
  
  .info {
      position: absolute;
      top: 4%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff
  }
  .myDropDown1{
    position: absolute;
      top: 14%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff
  }
  </style>
