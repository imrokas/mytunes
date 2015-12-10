// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',function(song){
      if(this.length === 1) {
        this.playFirst();
      }
    }, this)
    this.on('enqueue', function(song){
      this.add(song);
    })
    this.on('ended', function(x){
      this.remove(this.at(0));
      if(this.length > 0){
        this.playFirst();
      } 
    })
    this.on('dequeue', function(song){
      if(song === this.at(0)){
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }
    
    })
  },

  playFirst:function(){
    if(this.length > 0) {
      this.at(0).play();
    }
  },
  changedPlaylist:function(idx, value){
    this.trigger('changedPlaylist', {idx: idx, value:value});
  }

});