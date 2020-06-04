alert("CLIQUE NO FUNDO PRETO!")
var selection = window.prompt("DIGITE 1 ou 2")

function increase() {
    var song_box = document.getElementById("song")
    song_box.play()

    const element = document.querySelector('#fundo')
    const style = getComputedStyle(element)

    console.log(style.margin)

    var width_int = parseInt(style.width)
    var height_int = parseInt(style.height)

    var division = width_int % 10

    if (division == 0) {
        var margin_space = parseInt(style.margin)
        var reduced = margin_space - 2
        document.getElementById("fundo").style.margin = (reduced + "px")

        document.getElementById("fundo").style.height = ((height_int + 5) + "px")
        document.getElementById("fundo").style.width = ((width_int + 5) + "px")

        if (reduced == 115) {
            var video = document.getElementById("video_play")

            if (selection == "2") {
                video.src = "../videos/guitarvideo.mp4"
            }

            song_box.pause()
            song_box.currentTime = 0

            video.style.height = "390px"
            video.style.width = "375px"
            video.play()
            document.getElementById("fundo").onclick = stop_back
        }
    } else {
        var margin_space = parseInt(style.margin)
        var reduced = margin_space - 2.5
        document.getElementById("fundo").style.margin = (reduced + "px")

        document.getElementById("fundo").style.height = ((height_int + 5) + "px")
        document.getElementById("fundo").style.width = ((width_int + 5) + "px")
    }
}

function stop_back() {
    return
}
