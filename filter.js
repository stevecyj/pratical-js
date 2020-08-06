/* global Vue */
/* eslint-disable no-new */
Vue.filter('money', function (num) {
  console.log('filter', num);
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return '$' + parts.join('.');
});

new Vue({
  el: '#app',
  data: {
    number: '123456',
  },
});
