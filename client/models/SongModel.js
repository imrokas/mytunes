// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    count: 0,
    votes: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  plusOne: function() {
    this.set('count', this.get('count')+1);
  },
  upvote: function(){
    this.set('votes', this.get('votes')+1);
  },
  downvote: function(){
    if(this.get('votes') > 0) {
      this.set('votes', this.get('votes')-1);
    }
  }
});
