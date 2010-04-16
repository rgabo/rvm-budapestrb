var lastHash = null;

function setHash() {
  lastHash = '#' + (slidenum+1);
  location.hash = slidenum+1;
}

var originalShowSlide = showSlide;

var showSlide = function(back_step) {
  originalShowSlide(back_step);
  setHash(slidenum);
}

function showFirstSlide() {
  if (location.hash && !isNaN(parseInt(location.hash.substr(1)))) {
    checkHash();
  } else {
    slidenum = 0;
    showSlide();
  }
  setInterval(checkHash, 100);
}

function checkHash() {
  if (location.hash && location.hash != lastHash) {
    var hashValue = parseInt(location.hash.substr(1));
    if (!isNaN(hashValue) && hashValue != slidenum+1) {
      slidenum = hashValue-1;
      showSlide();
    }
  }
}
