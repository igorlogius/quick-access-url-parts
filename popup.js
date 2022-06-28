/* global browser */

const pc = document.querySelector('#parts-container');

function addPart(text,href){
	const a = document.createElement('a')
	a.setAttribute("href", href);
	const div = document.createElement('div')
	div.setAttribute("class","part");
	div.textContent = text;
	a.appendChild(div);
	pc.appendChild(a);
}

(async function init() {
	try {
		const url = new URL(await browser.runtime.sendMessage('url'));
		let parts = url.pathname.split('/');
		while (parts.length > 0) {
			if(parts.join('/') !== '' && parts[parts.length -1] !== '') {
				addPart(parts[parts.length-1], url.origin + parts.join('/'));
			}
			parts.pop();
		}
		addPart('/', url.origin);
	}catch(e) {
		console.error(e.toString());
	}
}());

