var numberOfDrums = document.querySelectorAll(".drum").length;

// Event Listner for clicks!

for(var i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
    var buttonInner = this.innerHTML;

    makeSound(buttonInner);

    buttonAnimation(buttonInner);
    
    });
}

// Event Listner for Keys!

document.addEventListener("keydown", function(event){      // Call back anonymous function
    
    var pressedKey = event.key;     // Key property of the Event

    makeSound(pressedKey);

    buttonAnimation(pressedKey);
});

//Function to Make Sound

function makeSound(sound){

switch (sound) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
            

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
            

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
            

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            

        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
            

        case "k":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
            break;
            

        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
              
        default:
            alert("Wrong Key!")
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {                //   This calls a function after a number of milliseconds.
        activeButton.classList.remove("pressed")
    }, 100);    //100 milisecond.
}