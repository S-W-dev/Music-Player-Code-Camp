document.addEventListener('DOMContentLoaded', function(){

	var Start_Ludicrous = document.getElementById('StartLudicrous');
	var Start_Hydra = document.getElementById('StartHydra');
	var Start_Muffin = document.getElementById('StartMuffin');
	var Start_BetterNow = document.getElementById('StartBetterNow');
	var Start_Thunder = document.getElementById('StartThunder');
	var Start_Bob = document.getElementById('StartBob');
	var Start_Mine = document.getElementById('StartMine');
	var Start_Sorry = document.getElementById('StartSorry');
	var Start_Megalovania = document.getElementById('StartMegalovania');


	Start_Ludicrous.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"ludicrous"}, function(response) {});
	});

	Start_Hydra.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"hydra"}, function(response) {});
	});

	Start_Muffin.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"muffin"}, function(response) {});
	});

	Start_BetterNow.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"BetterNow"}, function(response) {});
	});

	Start_Thunder.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Thunder"}, function(response) {});
	});;

	Start_Bob.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Bob"}, function(response) {});
	});

	Start_Mine.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Mine"}, function(response) {});
	});

	Start_Sorry.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Sorry"}, function(response) {});
	});

	Start_Megalovania.addEventListener('click', function() {
		chrome.runtime.sendMessage({type: "Start", value:"Megalovania"}, function(response) {});
	});


});
