var PlayListView = Backbone.View.extend({

  tagName: 'select',
  initialize: function(){
    this.render();
  },

  events : {  
    "change #playlist": function(event) {
 
      var selector = event.currentTarget;
      if(selector.selectedIndex === 1){
        this.collection.changedPlaylist(selector.selectedIndex, prompt('Name of playlist?'));
      }
      // this.collection.changedPlaylist(selector.selectedIndex, selector.value);
      
    //   if(selector.selectedIndex === 1){

    //    console.log('create new playlist');
    //   } else {

    //    console.log('get me ', selector.value,' playlist')
    //   }
    // }
    }
  },
  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    var that = this.options.playlist;
    this.$el.children().detach();
    //var $select = $('<select/>').append('<options val="default">default</options>');
    this.$el.attr('id', 'playlist').append(
      _.map(that, function(value, key){
        return new PlayListOptionView({name: key}).render();
      })
    );
  }

})