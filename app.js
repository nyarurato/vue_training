var app = new Vue({
  el: '#app',
  data: {
    messages: {
      count: 100,
      t: 'HELLO VUEEEE',
    },
    currentTab: 2
  },
  methods: {
    reverseMessage: function () {
      this.messages.t = this.messages.t.split('').reverse().join('');
    },
    changeTab: function() {
      this.currentTab = (this.currentTab == 3 ) ? 1 : this.currentTab + 1; 
    }
  }
})