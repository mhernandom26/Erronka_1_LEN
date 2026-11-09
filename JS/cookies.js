/* Cookie oharra (#cookies): edozein botoi sakatzean desagertzen da eta aukera gogoratzen da */
(function () {
	"use strict";

	var gakoa = "cookie_onarpena";
	var blokea = document.getElementById("cookies");
	if (!blokea) { return; }

	/* Aurretik aukeratu bada, oharra ezkutatu */
	try {
		if (localStorage.getItem(gakoa) === "bai") {
			blokea.style.display = "none";
			return;
		}
	} catch (errorea) {}

	/* Edozein botoi sakatzean, oharra ezkutatu eta aukera gorde */
	var botoiak = blokea.querySelectorAll("a");
	for (var i = 0; i < botoiak.length; i++) {
		botoiak[i].addEventListener("click", function (gertaera) {
			gertaera.preventDefault();
			blokea.style.display = "none";
			try {
				localStorage.setItem(gakoa, "bai");
			} catch (errorea) {}
		});
	}
})();