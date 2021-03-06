var APP = require("core");
var MODEL = require("models/tourml")();

var CONFIG = arguments[0] || {};
var ACTION = {};
var KEYPAD = {};

$.init = function() {
	APP.log("debug", "tourml_keypad.init | " + JSON.stringify(CONFIG));

	MODEL.init(CONFIG.index);

	//$.handleData(MODEL.getAudioTourml(CONFIG.id));

	$.NavigationBar.setBackgroundColor(APP.Settings.colors.primary || "#000");

	if(CONFIG.isChild === true) {
		$.NavigationBar.showBack();
	}

	$.title.text = "Keypad";

	$.handleNavigation();

};

$.handleNavigation = function(_id) {

	ACTION.map = null;
	ACTION.list = null;
	ACTION.keypad = null;

	var navigation = Alloy.createWidget("com.visitenumerique.tourmlNavigation", null, {
		navlist: function(_event) {
			APP.log("debug", "tourml @list");

			APP.addChild("tourml", {
				index: CONFIG.index,
				isChild: true
			});
		},
		navmap: function(_event) {
			APP.log("debug", "tourml @map");

			APP.addChild("tourml_map", {
				index: CONFIG.index,
				isChild: true
			});
		}

	}).getView();

	$.NavigationBar.addNavigation(navigation);
};

$.updateMessageDisplay = function() {
	var _id = MODEL.getIdFromCode($.keypadDisplayText.text);
	if(_id) {
		$.messageDisplayText.text = MODEL.getTitleFromCode($.keypadDisplayText.text);;
	};
};

$.keypadDisplayText.text = "";
$.messageDisplayText.text = "";

$.bGo.addEventListener("click", function(_event) {
	var _id = MODEL.getIdFromCode($.keypadDisplayText.text);
	APP.log("debug", "tourml_keypad.bGo @click | " + _id);
	if(_id) {
		APP.addChild("tourml_stop", {
			id: _id,
			index: CONFIG.index
		});
	} else {
		$.keypadDisplayText.text = "";
		$.messageDisplayText.text = "No stop found with that code";
	}
});

$.b1.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "1";
	$.updateMessageDisplay();
});
$.b2.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "2";
	$.updateMessageDisplay();
});
$.b3.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "3";
	$.updateMessageDisplay();
});
$.b4.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "4";
	$.updateMessageDisplay();
});
$.b5.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "5";
	$.updateMessageDisplay();
});
$.b6.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "6";
	$.updateMessageDisplay();
});
$.b7.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "7";
	$.updateMessageDisplay();
});
$.b8.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "8";
	$.updateMessageDisplay();
});
$.b9.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "9";
	$.updateMessageDisplay();
});
$.b0.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text += "0";
	$.updateMessageDisplay();
});
$.bClear.addEventListener("click", function(_event) {
	$.messageDisplayText.text = "";
	$.keypadDisplayText.text = "";
	$.updateMessageDisplay();
});

// Kick off the init
$.init();