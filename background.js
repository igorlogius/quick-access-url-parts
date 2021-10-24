
browser.runtime.onMessage.addListener( async function(msg, sender) {
	// get url
	console.log(msg);
	if(msg.cmd === 'get-url') {
		const tab =  await browser.tabs.query({currentWindow: true, active: true});
		return tab[0].url;
	}
	if( msg.cmd === 'set-url'){
		browser.tabs.update({url: msg.url});
	}
	// set url
});

