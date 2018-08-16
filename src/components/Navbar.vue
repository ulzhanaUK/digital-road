<template>
  <div>
 <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
    <li><a href="/#/"><img class="uk-width-1-3@s" src="@/assets/dr_logo.svg"></a></li>
    <div style="margin: 10px">
    <span> <p id='clock'>time</p></span>
    <span> <p id='date'>date</p></span>
  </div>
    </div>

    <div class="uk-navbar-center">
      <button
        class="switch notes"
        @click="switchComponent('map')"
        :disabled="currentComp === 'map'"
      >notes</button>
      <button
        class="switch messages"
        @click="switchComponent('google')"
        :disabled="currentComp === 'google'"
      >messages</button>
    </div>

</nav>
</div>
</template>

<script>
import { bus } from '../main.js';
export default {
    props: {
        currentComp: {
            type: String,
            required: true
        }
    },

    methods: {
        switchComponent(comp) {
            bus.$emit('switchComp', comp);
        }
    }
}
const date = document.getElementById('date');
    setInterval(() => {
      const now = moment();
      const humanRead = now.format('dddd, MMMM DD YYYY');
      document.getElementById("date").textContent = humanRead;
    }, 1000);

const clock = document.getElementById('clock');
    setInterval(() => {
      const now = moment();
      const humanReadable = now.format('hh:mm:ssA');
      document.getElementById("clock").textContent = humanReadable;
    }, 1000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
element {
    padding-bottom: 20px;
    padding-top: 20px;
}
body {
  background: black;
}
.uk-navbar-container:not(.uk-navbar-transparent) {
    background: #000000;
}
img {
    width: 80px;
    height: 50px;
}
#clock {
    text-align: left;
    margin-bottom: 0px;
    color: white;
}
#date {
    margin-bottom: 0px;
    color: white;
}
button.switch {
  background: none;
  border: 1px solid black;
  margin: 0;
  cursor: pointer;
}

button.switch[disabled='disabled'] {
  color: lightgray;
  border-color: lightgray;
}

button.switch:not([disabled='disabled']):hover {
  background-color: black;
  border-color: gray;
  color: lightgray;
}

button.messages {
  border-color: #6621ca;
  color: #6621ca;
}


button.notes {
  border-color: #eca74c;
  color: #eca74c;
}
</style>
