
(async function init() {
	try {
		let msg = { 'cmd': 'get-url' };
		const tmp = await browser.runtime.sendMessage(msg);
		const url = new URL(tmp); 
		const origin = url.origin;
		const pathname = url.pathname;
		let paths = pathname.split('/');
		let html = '';
		html += '<ul>';
		while (paths.length > 0) {
			//html += '<div class="part"><a class="blub" href="#" url="' + sub_url + '">' + paths[paths.length -1] + '</a></div>';
			if(paths.join('/') !== '' && paths[paths.length -1] !== '') {
				sub_url = origin + "/" + paths.join('/');
				html += '<div class="part"><a class="blub" href="' + sub_url + '">' + paths[paths.length -1] + '</a></div>';
			}
			paths.pop();
		}
		html += '<div class="part"><a class="blub" href="' + origin + '">' + origin + '</a></div>';
		html += '</ul>';
		const pc = document.querySelector('#parts-container');
		pc.innerHTML = html;

		/*
		document.querySelectorAll('.blub').forEach( a => {

			a.onclick = function(e) {
				e.preventDefault();
				//console.log('blub clicked', this.getAttribute("url"));
				let msg = { 'cmd': 'set-url', 'url': this.getAttribute("url") };
				browser.runtime.sendMessage(msg);
				return false;
			}
		});
		*/

	}catch(e) {
		console.error(e.toString());
	}
}());


