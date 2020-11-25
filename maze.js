const main = document.querySelector('main')
const multiline = `***********.**S.....**.*.T*****.....*.******.***.*.******.*****.******.*****.******.......******.********.........****.******...***....********`

console.log(multiline.split('\n'))
console.log(multiline.split(''))
const p = document.createElement('p')
main.appendChild(p)

let player = document.createElement('div')
player.className = 'player';

let audio = new Audio('audio_file.mp3');
audio.play();



for (let element of multiline) {
    let tile = document.createElement('div')
    tile.textContent += element
    p.appendChild(tile);
    if (tile.textContent == '*') {
        tile.className = 'wall';
    } 
    else if (tile.textContent == '.') {
        tile.className = 'path';
    } 
    else if (tile.textContent == 'S') {
        tile.className = 'start';
    } 
    else if (tile.textContent == 'T') {
        tile.className = 'finish';
    }
    tile.textContent = '';
}
document.querySelector("p > div:nth-child(15)").appendChild(player);


let posplayer = 15;


document.body.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        if (document.querySelector("p > div:nth-child(" + (posplayer + 1) + ")").classList.contains('finish')) {
            alert("You Win GG !");
            posplayer++
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)

        } else if (document.querySelector("p > div:nth-child(" + (posplayer + 1) + ")").classList.contains('wall')) {
            console.log('wall')
        } else {
            posplayer++
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowLeft") {
        if (document.querySelector("p > div:nth-child(" + (posplayer - 1) + ")").classList.contains('start')) {
            posplayer--
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)

        }
        else if (document.querySelector("p > div:nth-child(" + (posplayer - 1) + ")").classList.contains('wall')) {
            console.log('wall')
        } else {
            posplayer--
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowUp") {
        if (document.querySelector("p > div:nth-child(" + (posplayer - 13) + ")").classList.contains('wall')) {
            console.log('wall')
        } else {
            posplayer -= 13
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)
        }
    }


    if (e.code === "ArrowDown") {
        if (document.querySelector("p > div:nth-child(" + (posplayer + 13) + ")").classList.contains('wall')) {
            console.log('wall')
        } else {
            posplayer += 13
            document.querySelector("p > div:nth-child(" + posplayer + ")").appendChild(player)
            console.log(e.code)
        }
    }


})