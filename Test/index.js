const slideshow = document.getElementById("slideshow");
const images = slideshow.children;
const progress = document.getElementsByTagName("progress");
let current = 0;
let interval;

slideshow.style.position = "relative";
slideshow.style.width = "600px";
slideshow.style.height = "400px";

for (let i = 0; i < images.length; i++) {
  images[i].style.position = "absolute";
  images[i].style.width = "100%";
  images[i].style.height = "100%";
  images[i].style.opacity = "0";
  images[i].style.transition = "opacity 1s";
}

images[current].style.opacity = "1";

interval = setInterval(next, 2000);

function next() {
  images[current].style.opacity = "0";
  progress[current].value = 100;
  current = (current + 1) % images.length;
  images[current].style.opacity = "1";
  interval = setInterval(updateProgress, 20);
  function updateProgress() {
    if (progress[current].value >= 100) {
      clearInterval(interval);
    } else {
      progress[current].value++;
    }
  }
}
