var AppRouter = Backbone.Router.extend({
  routes	: {
    "":"home"
  },
  initialize  : function() {
    this.currentView = null;    
    this.programs = new programCollection();
    var header = new headerView({el : $("header"), collection : this.programs});
    header.render();

  },
  home  : function () {
    this.initView(new homeView({el : $("#main_content"), collection : this.programs}));
  },
  initView  : function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.currentView.render();
  }
});

var rout = new AppRouter();
Backbone.history.start();
