(function(global){

var util = {};

if (global.Set) {
	util.Set = global.Set;
} else {
	util.Set = function(){
		this._list = [];
	};

	util.Set.prototype ={
		add: function(obj) {
			if (this._list.indexOf(obj) < 0) {
				this._list.push(obj);
			}
		},
		has: function (obj) {
			return this._list.indexOf(obj) >= 0;
		}
	}
}

global.util = util;

}(window));