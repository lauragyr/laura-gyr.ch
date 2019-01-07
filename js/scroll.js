
var alreadyScrolled = false;
var scrollContainer = document.getElementById("containerscroll");

window.onscroll = function() {

  scrollContainer.scrollIntoView({behavior: "smooth"});


  /*if (!alreadyScrolled) {
    scrollContainer.scrollIntoView({behavior: "smooth"});
    alreadyScrolled = true;
  } else {
    //test();
    console.log("already scrolled");

  }*/
};

function test() {
  console.log("hi");
  document.getElementById("containerscroll").scrollIntoView({behavior: "smooth"});
};
