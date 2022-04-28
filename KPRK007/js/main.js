
function getPage(){
	chrome.tabs.executeScript(null, {
		file: "js/amazonReviews.js"
	}, function () {
		if (chrome.runtime.lastError) {
		  message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
		}
	});
}

getPage()