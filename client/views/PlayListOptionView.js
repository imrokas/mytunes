var PlayListOptionView.js = Backbone.View.extend({

  tagName: '',

  template: _.template('<option value="'+name+'">'+name+'</option>' ),


  render: function(){
    return this.$el.html(this.template());
  }

});