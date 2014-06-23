var headerView = Backbone.View.extend({
  initialize  : function( options ) {
    options = options || {};
    this.collection = options.collection;
    this.el = options.el;
    this.data = new getdataModel();
  },
  events: {
    "input #item" : "refreshList"
  },
  render      :   function () {
    var that = this;
    var template = _.template( $("#tpl_header").html() );
    that.$el.html(template);
    return this;
  },
  refreshList : function(ev) {
    var that = this;
        
    that.data = new getdataModel($(ev.target).val());
    that.data.fetch({
      success : function(model, response) {
      }
    }).complete(function(resp) {
      var listitems = new listitemsView({ el:$("#list"), model : resp, collection : that.collection }).render();
    });
  } 
});
