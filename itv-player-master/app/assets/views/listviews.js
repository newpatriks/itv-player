var listitemsView = Backbone.View.extend({
  initialize  : function( options ) {
    options = options || {};
    this.listitems = options.model;
    this.collection = options.collection;
    this.el = options.el;
  },
  render      :   function () {
    var that = this;
    
    var letter;
    _.each(this.listitems['responseJSON']['Result'], function(item,i) {
      letter = item['Key'];
      _.each(item['Details'], function(program) {	
        that.collection.add(program);
      });
    });
    var tpl = _.template( $("#tpl_listitems").html(), {letter:letter} );
    this.$el.append(tpl);
    return this;
  }
});
