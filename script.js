let tags = document.getElementsByClassName('tag');

// open tabs function

for (let i = 0; i < tags.length; i++) { tags[i].addEventListener('click', () => {
   let parent = tags[i].parentElement;

   parent.classList.toggle('open');
   parent.scrollIntoView({behavior: "smooth", block: "start"});
  })
}


// fill progress bars

function fillBars(bar, value)  {
  let time = setInterval(fill, 10);
  let width = 0;
  function fill() {
    if (width == value){
      clearInterval(time);
    }
    else{
      width++;
      bar.style.width = width + "%";
    }
  }
}

document.getElementById('resume-tag').addEventListener('click', function(){
  let progressBars = document.getElementsByClassName('value');
  let values = {
    "html": 95,
    "css": 90,
    "js": 70,
    "jq": 85,
    "boot": 70,
    "sass": 90,
    "git": 40,
    "php": 10,
    "pug": 40,
    "java": 10
  };

  for (let key in values ) {
    for (let i = 0; i < progressBars.length; i++) {
      if (progressBars[i].classList.contains(key)) {
          fillBars(progressBars[i], values[key] );
      }
    }
  }

});

// gallery functions

// let galleryWrapper = document.getElementById('gallery');
//
// let images = {
//   "black-bird.jpg" : "Black Bird Clothing Website",
//   "resume2.jpg" : "Personal resume website",
//   "business.jpg" : "Bussines Consultant website",
//   "resume.jpg" : "Online resume/portfolio website",
//   "pink-donut.jpg" : "Pink donut website template"
// };
//
// for (let image in images) {
//   let div = document.createElement('div');
//   galleryWrapper.appendChild(div);
//   div.classList.add('gallery-item');
//   div.innerHTML = '<p>' + images[image] + '</p>';
//   div.style.backgroundImage = 'url(images/' + image + ')';
//
// }
