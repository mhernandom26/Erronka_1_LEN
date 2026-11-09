/* Cookie oharra: onarpena gogoratzen du */
(function () {
	"use strict";

	var gakoa = "cookie_onarpena";
	var kutxa = document.getElementById("Cookie_onartu");
	if (!kutxa) { return; }

	/* Aurretik onartu bada, oharra ezkutatu */
	try {
		if (localStorage.getItem(gakoa) === "bai") {
			kutxa.checked = true;
		}
	} catch (errorea) {}

	/* Onartzean, aukera gorde */
	kutxa.addEventListener("change", function () {
		try {
			if (kutxa.checked) {
				localStorage.setItem(gakoa, "bai");
			}
		} catch (errorea) {}
	});
})();