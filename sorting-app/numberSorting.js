module.exports = {
  list: [],
  add: function(number) {
    return this.list.push(number);
  },
  sort: function() {
    this.list.sort(function(a,b){
      return a - b;
    })
  }
};
