for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        sound((this.innerHTML).toLowerCase());
        ButtonAnimation((this.innerHTML).toLowerCase());
    });
}

document.addEventListener("keydown", function (event) {
    sound((event.key).toLowerCase());
    ButtonAnimation((event.key).toLowerCase());
});

function sound(key) {
    switch (key) {

        case "q":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3");
            p.play();
            break;

        case "w":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3");
            p.play();
            break;

        case "e":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3");
            p.play();
            break;

        case "a":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3");
            p.play();
            break;

        case "s":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3");
            p.play();
            break;

        case "d":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3");
            p.play();
            break;

        case "z":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3");
            p.play();
            break;

        case "x":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3");
            p.play();
            break;

        case "c":
            var p = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3");
            p.play();
            break;

        default:
            console.log(key);
    }
}

function ButtonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}