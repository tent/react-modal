(function () {
	"use strict";

	var el = document.getElementById('main');

	var modal = React.createElement(window.Modal, {
		visible: true,
		closable: true,
		onShow: function(){},
		onHide: function(){}
	},
		React.createElement('header', null, React.createElement('h1', null, "Your Modal")),
		React.createElement('p', null, "Hello there"));

	React.render(modal, el);

})();
