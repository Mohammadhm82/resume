let music=document.querySelector('audio')
let buttons=document.getElementById('pause')

let lamp=false
let musisrc=[
    'Secret.mp3',
    'Can t Get You out of My Head.mp3',
    '02 Overdue.mp3'
]
let musicindex=0

function PlayPause(){
   if(lamp){
    music.play()
    lamp=false
    buttons.setAttribute('class','fas fa-pause')
   }else{
    music.pause()
    lamp=true
    buttons.setAttribute('class','fas fa-play')
   }
}
function next(){
musicindex++
if(musicindex>musisrc.length-1){
    musicindex=0
}
music.setAttribute('src',musisrc[musicindex])
PlayPause()
}
function previous(){
    musicindex--
    if(musicindex<0){
        musicindex=2
    }
    music.setAttribute('src',musisrc[musicindex])
    PlayPause()
}

function minus5(){
    music.currentTime -=5
}
function plus5(){
    music.currentTime +=5
}
function speed(){
    music.playbackRate=2
}