webpackJsonp([0],{"3GDu":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("lfLh"),l={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},i=o("VU/8")(null,l,!1,null,null,null).exports,s={components:{Navbar:a.default,Footer:i},data:function(){return{width:"0.5",length:"1",level:"7",volume:"800",address:"ул. Айнакол",time:"15:16",date:"21 Август",shiben:"55k",sand:"30k",bitumen:"15k",human:"150k",money:"250k"}}};ymaps.ready(function(){var t=new ymaps.Map("map",{center:[51.1471176,71.44662361],zoom:12});t.controls.remove("trafficControl"),t.controls.remove("typeSelector"),t.controls.remove("searchControl"),t.events.add("click",function(t){var e=t.get("coords");alert(e.join(", "))});var e=new ymaps.control.Button("<b>Ямы</b>");e.events.add("press",function(){UIkit.offcanvas("#offcanvas-push").toggle()}),t.controls.add(e,{float:"right"});var o=[];o[0]=new ymaps.Placemark([51.15772356,71.47335987],{clusterCaption:"Яма 1",balloonContentBody:"Размер: 1rwwdzdfdfsdfsdfsd m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-3,-42]}),o[1]=new ymaps.Placemark([51.0887968,71.4042503],{clusterCaption:"Яма 2",balloonContentBody:"Размер: 3 m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-23,-42]}),o[2]=new ymaps.Placemark([51.15912315,71.48391705],{clusterCaption:"Яма 3",balloonContentBody:"Размер: 3 m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-16,-42]}),o[3]=new ymaps.Placemark([51.158129495987716,71.55133704994137],{clusterCaption:"Яма 3",balloonContentBody:"Размер: 3 m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-16,-42]}),o[4]=new ymaps.Placemark([51.13264697641801,71.39649848792969],{clusterCaption:"Яма 3",balloonContentBody:"Размер: 3 m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-16,-42]}),o[5]=new ymaps.Placemark([51.12724632183351,71.48198585365235],{clusterCaption:"Яма 3",balloonContentBody:"Размер: 3 m^2, глубина: 15 cm"},{iconLayout:"default#image",iconImageHref:"https://www.camile.ie/wordpress/wp-content/themes/camile/assets/images/site/location-pointer-purple.png",iconImageSize:[20,30],iconImageOffset:[-16,-42]});var a=new ymaps.Clusterer({clusterDisableClickZoom:!1,clusterOpenBalloonOnClick:!1,clusterBalloonContentLayout:"cluster#balloonCarousel",clusterBalloonPanelMaxMapArea:0,clusterBalloonContentLayoutWidth:300,clusterBalloonContentLayoutHeight:200,clusterBalloonPagerSize:5});a.add(o),t.geoObjects.add(a),o[1].events.add("click",function(t){var e=t.get("coords");alert(e.join(", ")+"Hello pit :)")}),o[0].events.add("click",function(){UIkit.offcanvas("#offcanvas-push").toggle()})});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),t._v(" "),a("div",{staticClass:"columns row"},[a("div",{staticClass:"column",staticStyle:{width:"25%",float:"left"}},[a("vk-sticky",[a("div",{staticClass:"scroll"},[a("table",{staticStyle:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[t._v("Текущие показатели")])]),t._v(" "),a("tr",[a("th",{attrs:{rowspan:"2"}},[a("h5",[a("small",[t._v("УРОВЕНЬ")])]),t._v(" "),a("h6",{staticStyle:{color:"green","font-family":"PF Din Text Cond Pro Thin"}},[a("small",[t._v("СРЕДНЯЯ ЯМА")])]),t._v(" "),a("h1",{staticStyle:{color:"white","font-family":"PF Din Text Cond Pro Thin"}},[a("big",[t._v(t._s(t.level))])],1)]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("a",[a("h5",[a("small",[t._v("ШИРИНА")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("СМ")])])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.width))])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ДЛИНА")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("СМ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.length))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#6621ca"},attrs:{colspan:"2"}},[a("h5",[a("small",[t._v("ОБЪЕМ")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("СМ3")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.volume))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[t._v("Расходы на ремонт")])]),t._v(" "),a("tr",[a("th",{staticStyle:{color:"#6621ca"},attrs:{rowspan:"2"}},[a("a",[a("h5",[a("small",[t._v("ОБЩАЯ СУММА")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ТГ")])])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.money))])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ШЕБЕНЬ")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ТГ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.shiben))])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ПЕСОК")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ТГ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.sand))])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("БИТУМ")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ТГ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.bitumen))])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ЛЮДИ")])]),t._v(" "),a("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ТГ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.human))])])])]),t._v(" "),a("div",{staticClass:"uk-position-relative uk-visible-toggle uk-light",attrs:{"uk-slideshow":""}},[a("ul",{staticClass:"uk-slideshow-items"},[a("li",[a("table",{staticStyle:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[t._v("Количество ям")])]),t._v(" "),a("tr",[a("th",{attrs:{rowspan:"2"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ВСЕГО В ГОРОДЕ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("167")])]),t._v(" "),a("td",[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("АЛМАТЫ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("34")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("САРЫАРКА")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("86")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ЕСИЛЬ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("40")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("БАЙКОНЫР")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("7")])])])])]),t._v(" "),a("li",[a("table",{staticStyle:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[t._v(" Всего Количество ям")])]),t._v(" "),a("tr",[a("th",{staticStyle:{color:"#6621ca"},attrs:{rowspan:"2"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ВСЕееее В ГОРОДЕ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("167")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("АЛМАТЫ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("34")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("САРЫАРКА")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("86")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("ЕСИЛЬ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("40")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[a("small",[t._v("БАЙКОНЫР")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("7")])])])])])]),t._v(" "),a("a",{staticClass:"uk-position-center-left uk-position-small uk-hidden-hover",attrs:{href:"#","uk-slidenav-previous":"","uk-slideshow-item":"previous"}}),t._v(" "),a("a",{staticClass:"uk-position-center-right uk-position-small uk-hidden-hover",attrs:{href:"#","uk-slidenav-next":"","uk-slideshow-item":"next"}})]),t._v(" "),a("table",{staticStyle:{width:"100%"}},[a("tr",[a("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[t._v("СОСТОЯНИЕ МАШИНЫ")])]),t._v(" "),a("tr",[a("th",{staticStyle:{color:"#6621ca"},attrs:{rowspan:"2"}},[a("h5",[a("small",[t._v("ВРЕМЯ В ПУТИ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("05:32")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ДИСТАНЦИЯ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("130")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ЗАРЯД БАТАРЕИ")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("99%")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("БЕНЗИН")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("27")])]),t._v(" "),a("td",{staticStyle:{color:"#6621ca"}},[a("h5",[a("small",[t._v("ДАТЧИК")])]),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v("40")])])])])])])],1),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"uk-offcanvas-content"},[a("button",{staticClass:"uk-button uk-button-default uk-margin-small-right",staticStyle:{color:"#6621ca"},attrs:{type:"button","uk-toggle":"target: #offcanvas-push"}},[t._v("Посмотреть ямы")]),t._v(" "),a("div",{attrs:{id:"offcanvas-push","uk-offcanvas":"mode: push; overlay: true"}},[a("div",{staticClass:"uk-offcanvas-bar"},[a("button",{staticClass:"uk-offcanvas-close",attrs:{type:"button","uk-close":""}}),t._v(" "),a("ul",{attrs:{"uk-accordion":"multiple: true"}},[a("li",{staticClass:"uk-open"},[a("a",{staticClass:"uk-accordion-title",staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"},attrs:{href:"#"}},[t._v("Яма 1")]),t._v(" "),a("div",{staticClass:"uk-accordion-content"},[a("img",{attrs:{src:o("fx0P")}}),t._v(" "),a("h6",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[t._v("Адрес:")]),t._v(" "),a("h6",[t._v(t._s(t.address))]),t._v(" "),a("h6",[t._v(t._s(t.date)+", "+t._s(t.time))]),t._v(" "),a("table",{staticStyle:{width:"100%"}},[t._m(1),t._v(" "),a("tr",[a("th",{attrs:{rowspan:"2"}},[t._m(2),t._v(" "),t._m(3),t._v(" "),a("h1",{staticStyle:{color:"white","font-family":"PF Din Text Cond Pro Thin"}},[t._v(t._s(t.level))])]),t._v(" "),a("td",[t._m(4),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.width))])]),t._v(" "),a("td",[t._m(5),t._v(" "),t._m(6),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.length))])])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._m(7),t._v(" "),t._m(8),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.volume))])])]),t._v(" "),t._m(9),t._v(" "),a("tr",[a("th",{attrs:{rowspan:"2"}},[t._m(10),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.money))])]),t._v(" "),a("td",[t._m(11),t._v(" "),t._m(12),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.shiben))])]),t._v(" "),a("td",[t._m(13),t._v(" "),t._m(14),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.sand))])])]),t._v(" "),a("tr",[a("td",[t._m(15),t._v(" "),t._m(16),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.bitumen))])]),t._v(" "),a("td",[t._m(17),t._v(" "),t._m(18),t._v(" "),a("h3",{staticStyle:{color:"white"}},[t._v(t._s(t.human))])])])])])]),t._v(" "),a("li",[a("a",{staticClass:"uk-accordion-title",attrs:{href:"#"}},[t._v("Яма 2")]),t._v(" "),a("div",{staticClass:"uk-accordion-content"},[a("img",{attrs:{src:o("sFqT")}}),t._v(" "),a("h6",[t._v("Адрес:")]),t._v(" "),a("h6",[t._v(t._s(t.address))])])]),t._v(" "),a("li",[a("a",{staticClass:"uk-accordion-title",attrs:{href:"#"}},[t._v("Яма 3")]),t._v(" "),a("div",{staticClass:"uk-accordion-content"},[a("img",{attrs:{src:o("v+Om")}}),t._v(" "),a("h6",[t._v("Адрес:")]),t._v(" "),a("h6",[t._v(t._s(t.address))])])])])])])]),t._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column",staticStyle:{width:"75%",float:"right"}},[e("div",{staticStyle:{width:"100%",height:"570px"},attrs:{id:"map"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[this._v("Текущие показатели")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("УРОВЕНЬ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"green","font-family":"PF Din Text Cond Pro Thin"}},[e("small",[this._v("СРЕДНЯЯ ЯМА")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",[e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ШИРИНА")])]),this._v(" "),e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("СМ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ДЛИНА")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("СМ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ОБЪЕМ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("СМ3")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticStyle:{"background-color":"#6621ca",color:"white","font-family":"PF Din Text Cond Pro"},attrs:{colspan:"3"}},[this._v("Расходы на ремонт")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",[e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ОБЩАЯ СУММА")])]),this._v(" "),e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ТГ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ШЕБЕНЬ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ТГ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ПЕСОК")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ТГ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("БИТУМ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ТГ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticStyle:{color:"#f1a213","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ЛЮДИ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticStyle:{color:"grey","font-family":"PF Din Text Cond Pro"}},[e("small",[this._v("ТГ")])])}]};var c=o("VU/8")(s,n,!1,function(t){o("CqJg")},null,null);e.default=c.exports},CqJg:function(t,e){},Drc2:function(t,e){document.getElementById("date");setInterval(function(){var t=moment().format("dddd, MMMM DD YYYY");document.getElementById("date").textContent=t},1e3);document.getElementById("clock");setInterval(function(){var t=moment().format("hh:mm:ssA");document.getElementById("clock").textContent=t},1e3)},"XRn+":function(t,e,o){t.exports=o.p+"static/img/dr_logo.2a35db1.svg"},bwZW:function(t,e){},fx0P:function(t,e,o){t.exports=o.p+"static/img/pit1.3a93cd0.jpg"},lfLh:function(t,e,o){"use strict";var a=o("Drc2"),l=o.n(a),i=o("pZMU");var s=function(t){o("bwZW")},n=o("VU/8")(l.a,i.a,!1,s,"data-v-4b94d422",null);e.default=n.exports},pZMU:function(t,e,o){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nav",{staticClass:"uk-navbar-container",attrs:{"uk-navbar":""}},[e("div",{staticClass:"uk-navbar-left"},[e("li",[e("a",{attrs:{href:"/#/"}},[e("img",{staticClass:"uk-width-1-3@s",attrs:{src:o("XRn+")}})])]),this._v(" "),e("div",{staticStyle:{margin:"10px"}},[e("span",[e("p",{attrs:{id:"clock"}},[this._v("time")])]),this._v(" "),e("span",[e("p",{attrs:{id:"date"}},[this._v("date")])])])]),this._v(" "),e("div",{staticClass:"uk-navbar-right"})])])}]};e.a=a},sFqT:function(t,e,o){t.exports=o.p+"static/img/pit2.5e646fd.jpg"},"v+Om":function(t,e,o){t.exports=o.p+"static/img/pit3.4346463.jpg"}});
//# sourceMappingURL=0.4bc4c9f3e9856e58d21a.js.map