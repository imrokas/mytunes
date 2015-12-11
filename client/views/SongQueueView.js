// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function(params) {
    this.playlistView = new PlayListView({playlist: params.playlist});
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
        this.name = prompt('Name of playlist?');
        this.collection.changedPlaylist(selector.selectedIndex, this.name);
        this.render();
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
    //var $select = $('<select/>').append('<options val="defaultx`">default</options>');
    this.$el.html('<th>Playlist</th><th id="selector">'+(this.playlistView.render() === undefined && this.playlistView.el.outerHTML)+'</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    // document.getElementById('selector').append(this.playlistView.$el);
  }


});
