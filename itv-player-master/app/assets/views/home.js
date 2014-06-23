var homeView = Backbone.View.extend({
  initialize  : function( options ) {
    options = options || {};
    this.collection = options.collection;
    this.$el = options.el;

    this.listenTo(this.collection, 'add', this.appendItem);
    this.listenTo(this.collection, 'reset', this.render);
  },
  render      :   function () {
    var that = this;
    var template = _.template( $("#tpl_home").html() );
    that.$el.html(template);
    return this;
  },
  appendItem : function(e) {
    // Create the variables that will be put in the model
    var program = e.get('Programme');
    var title = program['Programme']['Title'];
    var channel = program['Channel']['Name'];
    var img = program['ImageUri'];
    var synopsis = program['ShortSynopsis'];

    // Creating the model
    var m_program = new programModel();
    m_program.set('title', title);
    m_program.set('channel', channel);
    m_program.set('img', img);
    m_program.set('synopsis', synopsis);

    // Calling the view and passing the parameters that will be passed to the template
    var program = new programView({ el:$("#main"), model : m_program }).render();
  }
});
