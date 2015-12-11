var PlayListOptionView = Backbone.View.extend({

  tagName: 'option',

  render: function(){
    return this.$el.html(this.options.name).attr('value',this.options.name);
  }

});