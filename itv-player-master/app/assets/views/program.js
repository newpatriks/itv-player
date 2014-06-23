var programView = Backbone.View.extend({
  initialize  : function( options ) {
    options = options || {};
    this.el = options.el;
    this.model = options.model;
  },
  render      :   function () {
    var that = this;
    var template = _.template( $("#tpl_program").html(), {program : this.model} );
    that.$el.append(template);

    return this;
  }
});
