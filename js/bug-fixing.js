let lock = false;
let scrollPos;

let elemContainer = document.getElementById('container');
let elemIntro = document.getElementById('intro');
    
elemContainer.style.height = null;
elemIntro.style.height = null;

// make scrollcontainer actually 100% width
let observer = new MutationObserver(
function(mutations) {
	mutations.forEach(
		function(mutationRecord) {
			elemContainer.style.height = null;
			/*console.log('style changed!');*/
		});
});

observer.observe(elemContainer, {
	attributes: true,
	attributeFilter: ['style']
});
//----


// Still need to fix that bug-snap when horizontally scrolling!
elemContainer.addEventListener('scroll', test);
elemContainer.scrollTop = 0;

function test() {
	if (elemContainer.scrollTop > 0) {
		// console.log(elemContainer.scrollTop);
		if (!lock) {
			fullpage_api.setAutoScrolling(false);
			// fullpage_api.silentMoveTo(2, 0);
			console.log("jetzt!");
			lock = true;
		}
	} else {
		if (lock) {
			lock = false;
			fullpage_api.setAutoScrolling(true);
		}
	}
	// console.log(elemContainer.scrollTop);
};