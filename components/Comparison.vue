<template>
  <body>
  <div>
    <nav>
      <router-link to="/"><img src="@/assets/images/white-frame-free-png.png" class="logo" draggable="false"></router-link>
      <ul>
        <li><router-link to="/Builder">Builder</router-link></li>
        <li><router-link to="/Comparison">Comparison</router-link></li>
        <li><router-link to="/Support">Support</router-link></li>
      </ul>
    </nav>
    <div class="custom-select">
      <select v-model="selectedPart">
        <option value="CPU">CPU</option>
        <option value="Motherboard">Motherboard</option>
        <option value="Cases">Cases</option>
        <option value="GPU">GPU</option>
        <option value="RAM">RAM</option>
        <option value="PSU">PSU</option>
        <option value="Storage">Storage</option>
      </select>
    </div>
    <div class="rectangle-container">
      <div class="rectangle">
        <p class="info"><b>Pc part 1</b></p>
        <select class="myDropDown1" v-model="pcPart1">
          <option v-for="option in pcPart1Options" :key="option">{{ option }}</option>
        </select>
        <div v-if="selectedPart === 'CPU'">
          <div class="pcPart1details" v-if="pcPart1CPUDetails">
            <p>Cores: {{ pcPart1CPUDetails.Cores }}</p>
            <p>Threads: {{ pcPart1CPUDetails.Threads }}</p>
            <p>Cache: {{ pcPart1CPUDetails.Cache }}</p>
            <p>TDP: {{ pcPart1CPUDetails.TDP }}</p>
            <p>Speed: {{ pcPart1CPUDetails.Speed }}</p>
            <p>Price: {{ pcPart1CPUDetails.Price }}</p>
            <p>Name: {{ pcPart1CPUDetails.Name }}</p>
            <p>Integrated Graphics: {{ pcPart1CPUDetails["Integrated Graphics"] }}</p>
            <p>Compatibility: {{ pcPart1CPUDetails.Compatibility }}</p>
          </div>
         </div>
        <div v-if="selectedPart === 'Motherboard'">
          <div class="pcPart1details" v-if="pcPart1MotherboardDetails">
            <p>Bluetooth: {{ pcPart1MotherboardDetails.Bluetooth }}</p>
            <p>Chipset: {{ pcPart1MotherboardDetails.Chipset }}</p>
            <p>Compatibility: {{ pcPart1MotherboardDetails.Compatibility }}</p>
            <p>Ethernet: {{ pcPart1MotherboardDetails.Ethernet }}</p>
            <p>Form Factor: {{ pcPart1MotherboardDetails.FormFactor }}</p>
            <p>M.2 Ports: {{ pcPart1MotherboardDetails["M.2 Ports"] }}</p>
            <p>Output Ports: {{ pcPart1MotherboardDetails["Output Ports"] }}</p>
            <p>Price: {{ pcPart1MotherboardDetails.Price }}</p>
            <p>RAM Slots: {{ pcPart1MotherboardDetails["RAM Slots"] }}</p>
            <p>PCIe 3.0x1 Slots: {{ pcPart1MotherboardDetails["PCIe 3.0x1 Slots"] }}</p>
            <p>PCIe 3.0x16 Slots: {{ pcPart1MotherboardDetails["PCIe 3.0x16 Slots"] }}</p>
            <p>PCIe 4.0x16 Slots: {{ pcPart1MotherboardDetails["PCIe 4.0x16 Slots"] }}</p>
          </div>
        
        </div>
        <div v-if="selectedPart === 'GPU'">
          <div class="pcPart1details" v-if="pcPart1GPUDetails">
            <p>Base Clock: {{ pcPart1GPUDetails['Base Clock'] }}</p>
            <p>DirectX: {{ pcPart1GPUDetails.DirectX }}</p>
            <p>GDDR: {{ pcPart1GPUDetails.GDDR }}</p>
            <p>Output Ports: {{ pcPart1GPUDetails['Output Ports'] }}</p>
            <p>PCIe: {{ pcPart1GPUDetails.PCIe }}</p>
            <p>Price: {{ pcPart1GPUDetails.Price }}</p>
            <p>TDP: {{ pcPart1GPUDetails.TDP }}</p>
            <p>VRAM: {{ pcPart1GPUDetails.VRAM }}</p>
          </div>
        </div>
      </div>
      <div class="rectangle">
        <p class="info"><b>Pc part 2</b></p>
        <select class="myDropDown1" v-model="pcPart2">
          <option v-for="option in pcPart2Options" :key="option">{{ option }}</option>
        </select>
        <div v-if="selectedPart === 'CPU'">
          <div class="pcPart2details" v-if="pcPart2CPUDetails">
            <p>Cores: {{ pcPart2CPUDetails.Cores }}</p>
            <p>Threads: {{ pcPart2CPUDetails.Threads }}</p>
            <p>Cache: {{ pcPart2CPUDetails.Cache }}</p>
            <p>TDP: {{ pcPart2CPUDetails.TDP }}</p>
            <p>Speed: {{ pcPart2CPUDetails.Speed }}</p>
            <p>Price: {{ pcPart2CPUDetails.Price }}</p>
            <p>Name: {{ pcPart2CPUDetails.Name }}</p>
            <p>Integrated Graphics: {{ pcPart2CPUDetails["Integrated Graphics"] }}</p>
            <p>Compatibility: {{ pcPart2CPUDetails.Compatibility }}</p>
          </div>
          </div>
        <div v-if="selectedPart === 'Motherboard'">
          <div class="pcPart2details" v-if="pcPart2MotherboardDetails">
            <p>Bluetooth: {{ pcPart2MotherboardDetails.Bluetooth }}</p>
            <p>Chipset: {{ pcPart2MotherboardDetails.Chipset }}</p>
            <p>Compatibility: {{ pcPart2MotherboardDetails.Compatibility }}</p>
            <p>Ethernet: {{ pcPart2MotherboardDetails.Ethernet }}</p>
            <p>Form Factor: {{ pcPart2MotherboardDetails.FormFactor }}</p>
            <p>M.2 Ports: {{ pcPart2MotherboardDetails["M.2 Ports"] }}</p>
            <p>Output Ports: {{ pcPart2MotherboardDetails["Output Ports"] }}</p>
            <p>Price: {{ pcPart2MotherboardDetails.Price }}</p>
            <p>RAM Slots: {{ pcPart2MotherboardDetails["RAM Slots"] }}</p>
            <p>PCIe 3.0x1 Slots: {{ pcPart2MotherboardDetails["PCIe 3.0x1 Slots"] }}</p>
            <p>PCIe 3.0x16 Slots: {{ pcPart2MotherboardDetails["PCIe 3.0x16 Slots"] }}</p>
            <p>PCIe 4.0x16 Slots: {{ pcPart2MotherboardDetails["PCIe 4.0x16 Slots"] }}</p>
          </div>
        </div>
        <div v-if="selectedPart === 'GPU'">
          <div class="pcPart2details" v-if="pcPart2GPUDetails">
            <p>Base Clock: {{ pcPart2GPUDetails['Base Clock'] }}</p>
            <p>DirectX: {{ pcPart2GPUDetails.DirectX }}</p>
            <p>GDDR: {{ pcPart2GPUDetails.GDDR }}</p>
            <p>Output Ports: {{ pcPart2GPUDetails['Output Ports'] }}</p>
            <p>PCIe: {{ pcPart2GPUDetails.PCIe }}</p>
            <p>Price: {{ pcPart2GPUDetails.Price }}</p>
            <p>TDP: {{ pcPart2GPUDetails.TDP }}</p>
            <p>VRAM: {{ pcPart2GPUDetails.VRAM }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </body>
</template>

<script>
export default {
  name: 'Compare',
  data() {
    return {
      selectedPart: '',
      pcPart1: '',
      pcPart2: '',
      pcPart1Options: [],
      pcPart2Options: [],
      pcPart1MotherboardDetails: null,
      pcPart1CPUDetails: null,
      pcPart2MotherboardDetails: null,
      pcPart2CPUDetails: null,
      pcPart1CPUDetails: null,
      pcPart1GPUDetails: null,
      pcPart2GPUDetails: null
    };
  },
  methods: {
    async fetchOptionsForPart(part, endpoint) {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
        if (part === 'CPU') {
          this.pcPart1MotherboardDetails = null; // Reset details for pcPart1 when changing options
          this.pcPart2MotherboardDetails = null; // Reset details for pcPart2 when changing options
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        if (part === 'Motherboard') {
          this.pcPart1CPUDetails = null; // Reset details for pcPart1 when changing options
          this.pcPart2CPUDetails = null; // Reset details for pcPart2 when changing options
          this.pcPart1GPUDetails = null;
          this.pcPart2GPUDetails = null;
          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }
        if (part === 'GPU') {
          this.pcPart1CPUDetails = null;
          this.pcPart2CPUDetails = null;
          this.pcPart1MotherboardDetails = null;
          this.pcPart2MotherboardDetails = null;
          this.pcPart1Options = data.map(item => item.Name);
          this.pcPart2Options = data.map(item => item.Name);
        }  else {
          // Handle other parts if needed
        }
      } catch (error) {
        console.error(`Error fetching options for ${part}:`, error);
      }
    },
    async fetchDetailsForPart(part, name) {
  try {
    console.log(`Fetching details for ${part} with name ${name}`);
    let endpoint = '';
    if (part === 'Motherboard') {
      endpoint = `https://getmotherboard-igki44h7vq-uc.a.run.app?Name=${name}`;
    } else if (part === 'CPU') {
      endpoint = `https://getcpu-igki44h7vq-uc.a.run.app?Name=${name}`;
    } 
    else if (part === 'GPU') {
          endpoint = `https://getgpu-igki44h7vq-uc.a.run.app?Name=${name}`;
        }// Add conditions for other parts if needed

    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(`Received data:`, data);
    if (data && data.length > 0) {
      const details = data[0];
      if (part === 'CPU') {
        if (this.pcPart1 === name) {
          this.pcPart1CPUDetails = details;
        } else if (this.pcPart2 === name) {
          this.pcPart2CPUDetails = details;
        }
      } else if (part === 'Motherboard') {
        if (this.pcPart1 === name) {
          this.pcPart1MotherboardDetails = details;
        } else if (this.pcPart2 === name) {
          this.pcPart2MotherboardDetails = details;
        }
      } 
      else if (part === 'GPU') {
        if (this.pcPart1 === name) {
          this.pcPart1GPUDetails = details; 
        } else if (this.pcPart2 === name) {
          this.pcPart2GPUDetails = details;
        }
       }// Add conditions for other parts if needed
    } else {
      console.error(`No data received for ${part} with name ${name}`);
    }
  } catch (error) {
    console.error(`Error fetching details for ${part} with name ${name}:`, error);
  }
}
  },
  watch: {
    selectedPart(newValue) {
      if (newValue === 'CPU' || newValue === 'Motherboard' || newValue === 'GPU') {
        this.fetchOptionsForPart(newValue, `https://get${newValue.toLowerCase()}-igki44h7vq-uc.a.run.app`);
      }
    },
    pcPart1(newValue) {
      if (newValue) {
        this.fetchDetailsForPart(this.selectedPart, newValue);
      }
    },
    pcPart2(newValue) {
      if (newValue) {
        this.fetchDetailsForPart(this.selectedPart, newValue);
      }
    }
  }
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

  .pcPart1details{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7ebeb;
  font-size: 1.2rem; /* Increased font size */
  font-weight: bold; /* Bolder font weight */
  }
  .pcPart2details{
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f7ebeb;
  font-size: 1.2rem; /* Increased font size */
  font-weight: bold; /* Bolder font weight */
  }
  </style>
