// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('dequeue', function(){
      this.render();
    }, this);
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
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
  
    this.$el.children().detach();
    //var $select = $('<select/>').append('<options val="default">default</options>');
    this.$el.html('<th>Playlist</th><th><select id="playlist">\
      <option value="default" selected>default</option>\
      <option value="new">new playlist</option></select></th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }


});
