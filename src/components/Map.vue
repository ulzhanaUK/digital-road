<template>
<div>
<Navbar />
<div class="columns row">
  <div class="column" style="width:25%; float: left;">
  <vk-sticky><div class="scroll">
    <table style="width:100%">
<tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">Текущие показатели</td>
  </tr>
  <tr>
    <th rowspan="2">
    <h5><small>УРОВЕНЬ</small></h5>
    <h6 style="color: green; font-family: PF Din Text Cond Pro Thin;"><small>СРЕДНЯЯ ЯМА</small></h6>
    <h1 style="color: white; font-family: PF Din Text Cond Pro Thin;"><big>{{level}}</big></h1>
    </th>
    <td style="color: #6621ca;">
    <a><h5><small>ШИРИНА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ</small></h6></a>
    <h3 style="color: white;">{{width}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>ДЛИНА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ</small></h6>
    <h3 style="color: white; ">{{length}}</h3>
    </td>
  </tr>
  <tr>
    <td colspan="2" style="color: #6621ca;">
    <h5><small>ОБЪЕМ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ3</small></h6>
    <h3 style="color: white;">{{volume}}</h3>
    </td>
  </tr>
  <tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">Расходы на ремонт</td>
  </tr>
  <tr>
    <th rowspan="2" style="color: #6621ca;">
    <a><h5><small>ОБЩАЯ СУММА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6></a>
    <h3 style="color: white;">{{money}}</h3>
    </th>
    <td style="color: #6621ca;">
    <h5><small>ШЕБЕНЬ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{shiben}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>ПЕСОК</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{sand}}</h3>
    </td>
  </tr>
  <tr>
    <td style="color: #6621ca;">
    <h5><small>БИТУМ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{bitumen}}</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>ЛЮДИ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{human}}</h3>
    </td>
  </tr>
</table>
  <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow>

    <ul class="uk-slideshow-items">
        <li>
          <table style="width:100%">
  <tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">Количество ям</td>
  </tr uk-cover>
<tr>
    <th rowspan="2">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>ВСЕГО В ГОРОДЕ</small></h5>
    <h3 style="color: white;">167</h3>
    </th>
    <td>
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>АЛМАТЫ</small></h5>
    <h3 style="color: white;">34</h3>
    </td>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>САРЫАРКА</small></h5>
    <h3 style="color: white;">86</h3>
    </td>
  </tr uk-cover>
  <tr>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>ЕСИЛЬ</small></h5>
    <h3 style="color: white;">40</h3>
    </td>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>БАЙКОНЫР</small></h5>
    <h3 style="color: white;">7</h3>
    </td>
  </tr uk-cover>
</table>
</li>
<li>
  <table style="width:100%">
  <tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;"> Всего Количество ям</td>
  </tr uk-cover>
  <tr>
    <th rowspan="2" style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>ВСЕееее В ГОРОДЕ</small></h5>
    <h3 style="color: white;">167</h3>
    </th>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>АЛМАТЫ</small></h5>
    <h3 style="color: white;">34</h3>
    </td>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>САРЫАРКА</small></h5>
    <h3 style="color: white;">86</h3>
    </td>
  </tr uk-cover>
  <tr>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>ЕСИЛЬ</small></h5>
    <h3 style="color: white;">40</h3>
    </td>
    <td style="color: #6621ca;">
    <h5 style="color: #f1a213;
    font-family: PF Din Text Cond Pro;"><small>БАЙКОНЫР</small></h5>
    <h3 style="color: white;">7</h3>
    </td>
  </tr uk-cover>
</table>
</li>
</ul>
 <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
<table style="width:100%">
  <tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">СОСТОЯНИЕ МАШИНЫ</td>
  </tr>
  <tr>
    <th rowspan="2" style="color: #6621ca;">
    <h5><small>ВРЕМЯ В ПУТИ</small></h5>
    <h3 style="color: white;">05:32</h3>
    </th>
    <td style="color: #6621ca;">
    <h5><small>ДИСТАНЦИЯ</small></h5>
    <h3 style="color: white;">130</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>ЗАРЯД БАТАРЕИ</small></h5>
    <h3 style="color: white;">99%</h3>
    </td>
  </tr>
  <tr>
    <td style="color: #6621ca;">
    <h5><small>БЕНЗИН</small></h5>
    <h3 style="color: white;">27</h3>
    </td>
    <td style="color: #6621ca;">
    <h5><small>ДАТЧИК</small></h5>
    <h3 style="color: white;">40</h3>
    </td>

  </tr>
</table>
</div></vk-sticky>
  </div>
  <div class="column" style="width:75%; float:right">
<div id="map" style="width: 100%; height: 570px"></div>
</div>

</div>

<div class="uk-offcanvas-content">
<!-- This is the button toggling the off-canvas sidebar -->
<button class="uk-button uk-button-default uk-margin-small-right" type="button" style="color:#6621ca" uk-toggle="target: #offcanvas-push">Посмотреть ямы</button>

<!-- or create a new date from 'now'
<span>{{ new Date() | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</span>
<span>{{ new Date() | moment("calendar", "July 10 2011") }}</span>-->


<!-- This is the off-canvas sidebar -->
<div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
        <div class="uk-offcanvas-bar">

            <button class="uk-offcanvas-close" type="button" uk-close></button>

    <ul uk-accordion="multiple: true">
    <li class="uk-open">
        <a class="uk-accordion-title" href="#" style="color: #f1a213; font-family: PF Din Text Cond Pro;">Яма 1</a>
        <div class="uk-accordion-content">
          <img src="../assets/pit1.jpg">
          <h6 style="color: #f1a213; font-family: PF Din Text Cond Pro;">Адрес:</h6>
          <h6>{{address}}</h6>
          <h6>{{date}}, {{time}}</h6>
            <table style="width:100%">
<tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">Текущие показатели</td>
  </tr>
  <tr>
    <th rowspan="2">
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>УРОВЕНЬ</small></h5>
    <h6 style="color: green; font-family: PF Din Text Cond Pro Thin;"><small>СРЕДНЯЯ ЯМА</small></h6>
    <h1 style="color: white; font-family: PF Din Text Cond Pro Thin;">{{level}}</h1>
    </th>
    <td>
    <a><h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ШИРИНА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ</small></h6></a>
    <h3 style="color: white;">{{width}}</h3>
    </td>
    <td>
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ДЛИНА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ</small></h6>
    <h3 style="color: white;">{{length}}</h3>
    </td>
  </tr>
  <tr>
    <td colspan="2">
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ОБЪЕМ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>СМ3</small></h6>
    <h3 style="color: white;">{{volume}}</h3>
    </td>
  </tr>
  <tr>
  <td colspan="3" style="background-color:#6621ca; color: white; font-family: PF Din Text Cond Pro;">Расходы на ремонт</td>
  </tr>
  <tr>
    <th rowspan="2">
    <a><h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ОБЩАЯ СУММА</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6></a>
    <h3 style="color: white;">{{money}}</h3>
    </th>
    <td>
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ШЕБЕНЬ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{shiben}}</h3>
    </td>
    <td>
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ПЕСОК</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{sand}}</h3>
    </td>
  </tr>
  <tr>
    <td>
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>БИТУМ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{bitumen}}</h3>
    </td>
    <td>
    <h5 style="color: #f1a213; font-family: PF Din Text Cond Pro;"><small>ЛЮДИ</small></h5>
    <h6 style="color: grey; font-family: PF Din Text Cond Pro;"><small>ТГ</small></h6>
    <h3 style="color: white;">{{human}}</h3>
    </td>
  </tr>
</table>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Яма 2</a>
        <div class="uk-accordion-content">
            <img src="../assets/pit2.jpg">
          <h6>Адрес:</h6>
          <h6>{{address}}</h6>

        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Яма 3</a>
        <div class="uk-accordion-content">
            <img src="../assets/pit3.jpg">
          <h6>Адрес:</h6>
          <h6>{{address}}</h6>

        </div>
    </li>
</ul>
        </div>
      </div>
    </div>
<Footer />
</div>
</template>

<script type="text/javascript">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      width: '0.5',
      length: '1',
      level: '7',
      volume: '800',
      address: 'ул. Айнакол',
      time: '15:16',
      date:'21 Август',

      shiben: '55k',
      sand: '30k',
      bitumen: '15k',
      human: '150k',
      money: '250k'

    }
  }
}

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [51.1471176, 71.44662361],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 12
        });
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        //myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('searchControl');
        myMap.events.add('click', function (e) {
          // Получение координат щелчка
          var coords = e.get('coords');
          alert(coords.join(', '));
         });


        var myButton = new ymaps.control.Button(
        '<b>Ямы</b>');
        myButton.events
          .add(
            'press',
            function () {
              UIkit.offcanvas('#offcanvas-push').toggle();
            }
          )
        myMap.controls.add(myButton, {
          float: "right"
        });


        var myGeoObjects = [];

        myGeoObjects[0] = new ymaps.Placemark([51.15772356, 71.47335987],{
                                clusterCaption: 'Яма 1',
                        //balloonContentBody: 'Текст в балуне',
                        balloonContentBody: 'Размер: 1rwwdzdfdfsdfsdfsd m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-3, -42],
                                });

        myGeoObjects[1] = new ymaps.Placemark([51.0887968, 71.4042503],{
                                clusterCaption: 'Яма 2',
                                 // Хинт показывается при наведении мышкой на иконку метки.
                                balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-23, -42],

                });

        myGeoObjects[2] = new ymaps.Placemark([51.15912315, 71.48391705],{
                                clusterCaption: 'Яма 3',
                                //balloonContentBody: 'Текст в балуне',
                                balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-16, -42],
                });
        myGeoObjects[3] = new ymaps.Placemark([51.158129495987716, 71.55133704994137],{
                                clusterCaption: 'Яма 3',
                                //balloonContentBody: 'Текст в балуне',
                                balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-16, -42],
                });
        myGeoObjects[4] = new ymaps.Placemark([51.13264697641801, 71.39649848792969],{
                                clusterCaption: 'Яма 3',
                                //balloonContentBody: 'Текст в балуне',
                                balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-16, -42],
                });
        myGeoObjects[5] = new ymaps.Placemark([51.12724632183351, 71.48198585365235],{
                                clusterCaption: 'Яма 3',
                                //balloonContentBody: 'Текст в балуне',
                                balloonContentBody: 'Размер: 3 m^2, глубина: 15 cm'
                                },{
                                // Необходимо указать данный тип макета.
                                iconLayout: 'default#image',
                                iconImageHref: 'https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png',
                                // Размеры метки.
                                iconImageSize: [20, 30],
                                // Смещение левого верхнего угла иконки относительно
                                // её «ножки» (точки привязки).
                                iconImageOffset: [-16, -42],
                });



   var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
        // Устанавливаем стандартный макет балуна кластера "Карусель".
        clusterBalloonContentLayout: 'cluster#balloonCarousel',
        // Устанавливаем собственный макет.
           //clusterBalloonItemContentLayout: customItemContentLayout,
           // Устанавливаем режим открытия балуна.
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
        // Устанавливаем размеры макета контента балуна (в пикселях).
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
        clusterBalloonPagerSize: 5
        // Настройка внешего вида нижней панели.
        // Режим marker рекомендуется использовать с небольшим количеством элементов.
        // clusterBalloonPagerType: 'marker',
        // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
        // clusterBalloonCycling: false,
        // Можно отключить отображение меню навигации.
        // clusterBalloonPagerVisible: false
    });

clusterer.add(myGeoObjects);
myMap.geoObjects.add(clusterer);
myGeoObjects[1].events.add('click', function (e) {
          var coords = e.get('coords');
          alert(coords.join(', ')+ "Hello pit :)");
        });
myGeoObjects[0].events.add('click', function () {
          UIkit.offcanvas('#offcanvas-push').toggle();
        });
}
</script>

<style>
body {
  background: black;
}
.uk-offcanvas-bar {
  background: none repeat scroll 0% 0%  #000000;
}
/* Create three equal columns that floats next to each other */
.column {
    float: left;
    width: 33.33%;
    padding: 0px;
     /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}
/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
    .column {
        width: 100%;
    }
}

.site-footer {
  background: black;
}
h3 {
  color: #eca74c;
  font-family: PF Din Text Cond Pro Thin;
}
.left {
    position: absolute;
    left: 0px;
}
.center {
    position: absolute;
    left: 0;
    text-align: center;
}
h6, h4, h5, h3 {
    padding: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}
table, th, td {
    border: 1px solid #6621ca;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;
}
.scroll {
  height:570px;
  border:1px solid #ccc;
  overflow:auto;
}
h5 {
color: #f1a213;
font-family: PF Din Text Cond Pro;
}
</style>
