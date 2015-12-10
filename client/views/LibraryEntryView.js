// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td class="song"><%= title %></td><td><%= count %></td><td><button id="up">+</button><%= votes %><button id="down">-</button></td>'),

  events: {
    'click .song': function() {
      this.model.enqueue();
    },
    'click #up': function(){
      this.model.upvote();
    },
    'click #down': function(){
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
