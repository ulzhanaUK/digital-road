<template>
  <div>
 <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
    <li><a href="/#/"><img class="uk-width-1-3@s" src="@/assets/dr_logo.svg"></a></li>
    <span style="padding:10px"> <p id='clock'>time</p></span>
    </div>
     
    <div class="uk-navbar-right">

        <ul class="uk-navbar-nav">
            <li>
                
                 <a class="uk-navbar-toggle" uk-navbar-toggle-icon href="#" style="color:#6621ca;"></a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li><a href="/#/">Main</a></li>
                        <li><a href="/#/project">The project</a></li>
                        <li><a href="/#/contact">Contact</a></li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>

</nav>
</div>
</template>

<script>
const clock = document.getElementById('clock');
    setInterval(() => {
      const now = moment();
      const humanReadable = now.format('hh:mm:ssA');
      document.getElementById("clock").textContent = humanReadable;
    }, 1000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    margin-bottom: 0px;
    color: white;
}
</style>