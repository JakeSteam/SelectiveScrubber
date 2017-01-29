function save() {
    var sitesToSave = document.getElementById('sites').value;
    var displayPopup = document.getElementById('popup').checked;
    chrome.storage.sync.set({
        sites: sitesToSave,
		popup: displayPopup
    }, displaySavedMessage);
}

function load() {
    chrome.storage.sync.get({
        sites: 'supersecretsite.com',
		popup: false
    }, function(items) {
        document.getElementById('sites').value = items.sites;
        document.getElementById('popup').checked = items.popup;
    });
}

function displaySavedMessage() {
    var status = document.getElementById('status');
    status.textContent = 'Sites saved.';
    setTimeout(function() {
        status.textContent = '';
    }, 2000);
}

document.addEventListener('DOMContentLoaded', load);
document.getElementById('save').addEventListener('click', save);