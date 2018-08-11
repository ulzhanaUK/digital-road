<template>
	<div>
		<Navbar />
		<h2>Project</h2>
		<div class="uk-offcanvas-content">
<!-- This is the button toggling the off-canvas sidebar -->
<button class="uk-button uk-button-default uk-margin-small-right" type="button" style="color:#82408c" uk-toggle="target: #offcanvas-push">Посмотреть ямы</button>

<!-- This is the off-canvas sidebar -->
<div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

    <ul uk-accordion="multiple: true">
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Яма 1</a>
        <div class="uk-accordion-content">
          <img src="../assets/pit1.jpg">
          <h6>Адрес:</h6>
          <h6>{{address}}</h6>
            <div class="row">
              <div class="column" style="background-color:#aaa;">
                <h5>Ширина:</h5><h4>{{width}}</h4>
              </div>
              <div class="column" style="background-color:#bbb;">
                <h5>Длина:</h5><h4>{{length}}</h4>
              </div>
              <div class="column" style="background-color:#bbb;">
                <h5>Глубина:</h5><h4>{{depth}}</h4>
              </div>
              <div class="column" style="background-color:#ccc;">
                <h5>Объем:</h5> <h4>{{volume}}</h4>
              </div>
            </div>
            <h4>Расходы на ремонт:</h4>
            <div class="row">
              <div class="column" style="background-color:#aaa;">
                <h4>Шебень:</h4><h3>{{shiben}}</h3>
              </div>
              <div class="column" style="background-color:#bbb;">
                <h4>Песок:</h4><h3>{{sand}}</h3>
              </div>
              <div class="column" style="background-color:#bbb;">
                <h4>Битум:</h4><h3>{{bitumen}}</h3>
              </div>
              <div class="column" style="background-color:#ccc;">
                <h4>Люди:</h4> <h3>{{human}}</h3>
              </div>
            </div>
            <h3>Общая сумма: {{money}}</h3>
        </div>
    </li>
</ul>
</div>
</div>
</div>
		<Footer />
	</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
	components: {
		Navbar,
		Footer
	}
}
</script>

<style>
	table, th, td {
    border: 1px solid #82408c;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;    
}
</style>