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
};

tags[1].addEventListener('click', function(){
  let progressBars = document.getElementsByClassName('value');
  let values = {
    "html": 95,
    "css": 90,
    "js": 70,
    "jq": 85,
    "boot": 70,
    "sass": 90,
    "git": 85,
    "php": 35,
    "pug": 80,
    "java": 40,
    "ps": 95,
    "ai": 85,
    "lr": 70,
    "id": 45,
    "cr": 60
  };

  for (let key in values ) {
    for (let i = 0; i < progressBars.length; i++) {
      if (progressBars[i].classList.contains(key)) {
          fillBars(progressBars[i], values[key] );
      }
    }
  }

})
