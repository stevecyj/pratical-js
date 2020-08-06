/* global Vue */
/* eslint-disable no-new */
Vue.filter('money', function (num) {
  console.log('filter', num);
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return '$' + parts.join('.');
});

Vue.filter('unix', function (value) {
  const time = new Date(value * 1000);
  return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
});

new Vue({
  el: '#app',
  data: {
    number: '123456',
    date: 1596677873,
  },
  created() {
    console.log(this);
  },
});
