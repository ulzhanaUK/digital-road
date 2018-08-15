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

    <div class="uk-navbar-right">


    </div>

</nav>
</div>
</template>

<script>
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
</style>
