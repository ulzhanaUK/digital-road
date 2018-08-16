<template>
<div>
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
</div>
</template>
<script>
export default {
props: ['width', 'length', 'level']
}
</script>
<style>
table, th, td {
    border: 1px solid #6621ca;
    border-collapse: collapse;
}
th, td {
    padding: 5px;
    text-align: left;
}
</style>
