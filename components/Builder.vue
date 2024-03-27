<template>
  <body>
    <div>
      <header>
        <div>
          <nav>
            <router-link to="/HomePage"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
            <ul>
              <li><router-link to="/Builder" draggable="false">Builder</router-link></li>
              <li><router-link to="/Comparison" draggable="false">Comparison</router-link></li>
              <li><router-link to="/Support" draggable="false">Support</router-link></li>
              <li><a @click="logout" class="logout-btn">Logout</a></li>

            </ul>
          </nav>
        </div>
      </header>
      <h1>Choose Your Parts</h1>
      <table>
        <thead>
          <tr>
            <th style="width: 20%">Component</th>
            <th>Selected</th>
            <th style="width: 100px;">Price</th>
            <th style="width: 100px;">Compatibility</th>
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td><router-link to="/Comparison">Motherboard</router-link></td>
            <td>
              <select name="mb" id="" v-model="selectedMotherboard">
                <option value="">None Selected</option>
                <option v-for="mb in motherboards" :key="mb.id" :value="mb">{{ mb.Name }}</option>
              </select>
            </td>
            <td>{{ selectedMotherboard ? selectedMotherboard.Price : '' }}</td>
            <td></td>
          </tr>
          <tr>
            <td><router-link to="/Comparison">CPU</router-link></td>
            <td>
              <select name="cpu" id="cpuSelect" v-model="selectedCpu">
                <option value="">None Selected</option>
                <option v-for="cpu in cpus" :key="cpu.id" :value="cpu">{{ cpu.Name }}</option>
              </select>
            </td>
            <td>{{ selectedCpu ? selectedCpu.Price : '' }}</td>
            <td>
              <div class="status uncompatible"> ✖ </div>
            </td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">Case</router-link></td>
            <td>
              <select name="case" id="" v-model="selectedCase">
                <option value="">None Selected</option>
                <option v-for="c in cases" :key="c.id" :value="c">{{ c.Name }}</option>
              </select>
            </td>
            <td>{{ selectedCase ? selectedCase.Price : '' }}</td>
            <td></td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">GPU</router-link></td>
            <td>
              <select name="gpu" id="" v-model="selectedGpu" >
                <option value="">None Selected</option>
                <option v-for="g in gpus" :key="g.id" :value="g">{{ g.Name }}</option>
              </select>
              </td>
              <td>{{ selectedGpu ? selectedGpu.Price : '' }}</td> <!-- Make sure selectedGpuPrice is correctly bound here -->
            <td></td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">RAM</router-link></td>
            <td>
              <select name="ram" id="" v-model="selectedRam">
                <option value="">None Selected</option>
                <option v-for="r in rams" :key="r.id" :value="r">{{ r.Name }}</option>
              </select>
            </td>
            <td>{{ selectedRam ? selectedRam.Price : '' }}</td>
            <td></td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">Storage</router-link></td>
            <td>
              <select name="storage" id="" v-model="selectedStorage">
                <option value="">None Selected</option>
                <option v-for="s in storages" :key="s.id" :value="s">{{ s.Name }}</option>
              </select>
            </td>
            <td>{{ selectedStorage ? selectedStorage.Price : '' }}</td>
            <td></td>
          </tr>
          <tr> 
            <td><router-link to="/Comparison">PSU</router-link></td>
            <td>
              <select name="psu" id="" v-model="SelectedPsu">
                <option value="">None Selected</option>
                <option v-for="p in psus" :key="p.id" :value="p">{{ p.Name }}</option>
              </select>
            </td>
            <td>{{ SelectedPsu ? SelectedPsu.Price : '' }}</td>
            <td></td>
          </tr>
          <!-- Other component rows -->
        </tbody>
      </table>
    </div>
  </body>
</template>

<script>

export default {
  name: 'ChooseYourParts',
  data() {
    return {
      cpus: [],
      motherboards: [],
      cases: [],
      gpus: [],
      rams: [],
      storages: [],
      psus: [],
      selectedMotherboard: null,
      selectedCpu: null,
      selectedGpu: null,  // Initialize selectedGpu to null
      selectedCase: null,  // Initialize selectedGpu to null
      selectedRam: null,
      selectedStorage: null,
      SelectedPsu: null
    };
  },
  mounted() {
    this.fetchCPUs();
    this.fetchMotherboards();
    this.fetchCases();
    this.fetchGpus();
    this.fetchRAM();
    this.fetchStorages();
    this.fetchPsus();
  },
  methods: {

    logout(){
    if(confirm("Are you sure you want to logout?")){
        this.$router.push('/');
    }
    },

    async fetchCPUs() {
      try {
        const response = await fetch('https://getcpu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.cpus = data; // Assuming data is an array of CPU objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching CPUs:', error);
      }
    },
    async fetchMotherboards() {
      try {
        const response = await fetch('https://getmotherboard-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.motherboards = data; // Assuming data is an array of motherboard objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching motherboards:', error);
      }
    },
    async fetchCases() {
      try {
        const response = await fetch('https://getcase-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.cases = data; // Assuming data is an array of cases objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Cases:', error);
      }
    },
    async fetchGpus() {
      try {
        const response = await fetch('https://getgpu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.gpus = data; // Assuming data is an array of Gpus objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Gpus:', error);
      }
    },
    
    
    async fetchRAM() {
      try {
        const response = await fetch('https://getram-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.rams = data; // Assuming data is an array of rams objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Rams:', error);
      }
    },
    async fetchStorages() {
      try {
        const response = await fetch('https://getstorage-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.storages = data; // Assuming data is an array of storages objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Storages:', error);
      }
    },
    async fetchPsus() {
      try {
        const response = await fetch('https://getpsu-igki44h7vq-uc.a.run.app');
        const data = await response.json();
        console.log(data); // Log the response data to the console
        this.psus = data; // Assuming data is an array of Psus objects with 'id' and 'Name' properties
      } catch (error) {
        console.error('Error fetching Psus:', error);
      }
    },
  },
  
  
 
}

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
    background-color: #3f3f3f;
    height: 100vh;
    overflow-x: hidden;
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
}

.text-container p {
    margin-top: 0px;
    margin-left: 10%;
    color: #9da2ab;
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
    z-index: -1;
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
</style>
