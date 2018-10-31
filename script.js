window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart()
}

function showStart() {
    console.log("show start");

    document.querySelector("#mute_on").removeEventListener("click", muteOff);
    document.querySelector("#fx_on").removeEventListener("click", fxOff);
    document.querySelector("#luk").removeEventListener("click", showStart);

    document.querySelector("#menu_background").classList.remove("hide");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings_skærm").classList.add("hide");
    document.querySelector("#mute_on").classList.add("hide");
    document.querySelector("#fx_on").classList.add("hide");
    document.querySelector("#luk").classList.add("hide");
    document.querySelector("#mute_off").classList.add("hide");
    document.querySelector("#fx_off").classList.add("hide");

    document.querySelector("#start").addEventListener("click", hideStart);
    document.querySelector("#settings").addEventListener("click", settingStart);
}

function settingStart() {
    console.log("settings");

    document.querySelector("#settings").removeEventListener("click", settingStart);
    document.querySelector("#start").classList.add("hide");

    document.querySelector("#settings_skærm").classList.remove("hide");
    document.querySelector("#mute_on").classList.remove("hide");
    document.querySelector("#fx_on").classList.remove("hide");
    document.querySelector("#luk").classList.remove("hide");

    document.querySelector("#mute_on").addEventListener("click", muteOff);
    document.querySelector("#fx_on").addEventListener("click", fxOff);
    document.querySelector("#luk").addEventListener("click", showStart);
}

function muteOff() {
    console.log("mute off");

    document.querySelector("#mute_on").removeEventListener("click", muteOff);
    document.querySelector("#mute_off").addEventListener("click", muteOn);

    document.querySelector("#mute_on").classList.add("hide");
    document.querySelector("#mute_off").classList.remove("hide");
}

function muteOn() {
    console.log("mute on");

    document.querySelector("#mute_off").removeEventListener("click", muteOn);
    document.querySelector("#mute_on").addEventListener("click", muteOff);

    document.querySelector("#mute_off").classList.add("hide");
    document.querySelector("#mute_on").classList.remove("hide");
}

function fxOff() {
    console.log("fx off");

    document.querySelector("#fx_on").removeEventListener("click", fxOff);
    document.querySelector("#fx_off").addEventListener("click", fxOn);

    document.querySelector("#fx_on").classList.add("hide");
    document.querySelector("#fx_off").classList.remove("hide");
}

function fxOn() {
    console.log("fx on");

    document.querySelector("#fx_off").removeEventListener("click", muteOn);
    document.querySelector("#fx_on").addEventListener("click", muteOff);

    document.querySelector("#fx_off").classList.add("hide");
    document.querySelector("#fx_on").classList.remove("hide");
}

function hideStart() {
    console.log("der er klikket");

    document.querySelector("#start").removeEventListener("click", hideStart)

    document.querySelector("#menu_background").classList.add("fade_out");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#settings").classList.add("fade_out");

    document.querySelector("#menu_background").addEventListener("animationend", showStory);

}

function showStory() {
    console.log("show story");

    document.querySelector("#menu_background").classList.remove("fade_out");
    document.querySelector("#start").classList.remove("fade_out");
    document.querySelector("#settings").classList.remove("fade_out");

    document.querySelector("#menu_background").removeEventListener("animationend", showStory);

    document.querySelector("#menu_background").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");

    document.querySelector("#forklaring").classList.remove("hide");
    document.querySelector("#forklaring").classList.add("fade_in");

    document.querySelector("#luk2").classList.remove("hide");

    document.querySelector("#luk2").addEventListener("click", hideStory);
}

function hideStory() {
    console.log("hide story");

    document.querySelector("#luk").removeEventListener("click", hideStory);

    document.querySelector("#forklaring").classList.add("fade_out");

    document.querySelector("#luk2").classList.add("fade_out");

    document.querySelector("#forklaring").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");

    document.querySelector("#forklaring").removeEventListener("animationend", startGame);

    document.querySelector("#forklaring").classList.remove("fade_out");
    document.querySelector("#forklaring").classList.add("hide");

    document.querySelector("#luk2").classList.remove("fade_out");
    document.querySelector("#luk2").classList.add("hide");

    document.querySelector("#game_ui").classList.remove("hide");
}
