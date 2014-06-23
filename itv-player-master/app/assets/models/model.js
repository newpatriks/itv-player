var getdataModel = Backbone.Model.extend({
  url : function () {
    //return "http://mercury.itv.com/api/json/dotcom/programme/searchatoz/" + this.id;
    return  "http://localhost/itv-video/itv-php?param="+this.id;
  },
  initialize : function(id) {
    this.id = id;
  }
});

var programModel = Backbone.Model.extend({

});

var programCollection = Backbone.Collection.extend({
  model : programModel
});