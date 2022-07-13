for(var i =0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick()
{
  handleItAll(this.innerHTML);
  buttonAnimation(this.innerHTML);
}



document.addEventListener("keydown",function(event)
{
  var keyPressed = event.key;
  handleItAll(keyPressed);
  buttonAnimation(keyPressed);
});


function handleItAll(string)
{
  switch (string) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();

    case "a":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();

    case "l":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();

    case "d":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();

    case "j":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();

    case "k":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();

    case "s":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();

      break;
    default:
}
}

function buttonAnimation(key)
{
  var activeButton = document.querySelector( "." + key);
  activeButton.classList.add("pressed");
  setTimeout(function()
  {activeButton.classList.remove("pressed")}
  ,100);
}
