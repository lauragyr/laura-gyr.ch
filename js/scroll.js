
let alreadyScrolled = false;
let keys = {37: 1, 38: 1, 39: 1, 40: 1};
let scrollTimeout;
let scrollContainers = [];
let currentContainer = 0;
scrollContainers.push(document.getElementById("intro"));
scrollContainers.push(document.getElementById("box1"));
scrollContainers.push(document.getElementById("box2"));
scrollContainers.push(document.getElementById("box3"));
let lastScrollTop = 0;

/*
addEventListener('scroll', function(e)
{
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function()
  {
    alreadyScrolled = false;
    console.log("scroll ended");
  }, 100);
});
*/

/*
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
addEventListener('scroll', function()
{
  console.log("scroll");
  disableScroll();

  // reset boolean
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function()
  {
    alreadyScrolled = false;
    console.log("scroll ended");
    enableScroll();
  }, 1000);

  if (alreadyScrolled)
  {
    return;
  }

  // scroll direction
  let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop)
  {
    countDownCurrentContainer();
  }
  else
  {
    countUpCurrentContainer();
  }

  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  scrollToNextContainer();
}, false);
*/

function scrollToNextContainer()
{
    //console.log(currentContainer);
    //console.log(scrollContainers[currentContainer]);
    scrollContainers[currentContainer].scrollIntoView({behavior: "smooth"});
}

/*
window.onkeydown = function(evt)
{
    evt = evt || window.event;
    console.log("keydown: " + evt.keyCode);
};

window.onkeyup = function(evt)
{
    evt = evt || window.event;
    console.log("keyup: " + evt.keyCode);
};
*/

function checkDirectionAndScroll(event)
{
  let eventPrevented = false;

  if (event.keyCode == 37)
  {
    countDownCurrentContainer();
    event.preventDefault();
    eventPrevented = true;
  }
  else if (event.keyCode == 38)
  {
    countDownCurrentContainer();
    event.preventDefault();
    eventPrevented = true;
  }
  else if (event.keyCode == 39)
  {
    countUpCurrentContainer();
    event.preventDefault();
    eventPrevented = true;
  }
  else if (event.keyCode == 40)
  {
    countUpCurrentContainer();
    event.preventDefault();
    eventPrevented = true;
  }

  if (eventPrevented)
  {
    scrollToNextContainer();
  }
}

function countUpCurrentContainer()
{
  currentContainer ++;
  if (currentContainer > scrollContainers.length - 1)
  {
    currentContainer = 0;
  }
}

function countDownCurrentContainer()
{
  currentContainer --;
  if (currentContainer < 0)
  {
    currentContainer = scrollContainers.length - 1;
  }
}

function fakeArrowKeyEvent(event)
{
  console.log(event);
  event.preventDefault();
}
document.addEventListener("keydown", checkDirectionAndScroll);
document.addEventListener("onmousewheel", fakeArrowKeyEvent);



/*
document.addEventListener("keydown", checkDirectionAndScroll);
document.addEventListener("onwheel", checkDirectionAndScroll);
document.addEventListener("onmousewheel", checkDirectionAndScroll);

function preventBehavior(e)
{
    e.preventDefault();
};

function preventDefault(e)
{
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e)
{
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll()
{
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll()
{
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
*/



//SMOOTH SCROLL TO TOP
var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',10);
	}
	else clearTimeout(timeOut);
}

//SMOOTH SCROLL TO CONTAINER
