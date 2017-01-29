function loadSites() {
	alert("Sigh");
	document.getElementById("site_box").value = localStorage.sites;
}

function saveSites() {
	alert(document.getElementById("site_box").value);
	localStorage.sites = document.getElementById("site_box").value;
}

document.addEventListener('DOMContentLoaded', loadSites());
document.getElementById('save').addEventListener('click', saveSites());