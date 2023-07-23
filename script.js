console.log("WELCOME TO SPOTIFY");

//initialize the variable
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let song=[
    {songName:"Tujh main raab dikh ta hai", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName:"Bulleya", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Swag-se-Swagat", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName:"Kaabil-Hoon-yaar", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName:"Bholenath-ji", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName:"Chand Sifharish", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName:"Do-pal", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName:"Duniya Luka-Chuppi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName:"Falak-Tu-Gajar-tu", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName:"Kabhi kabhi aditi", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
   
]
songItem.forEach((element,i) => {
    // });((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElmenet.play();

//handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value *audioElement.duration)/100;
    e.target.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})

Array.from(document.getElementsByClassName('songsItemPlay').forEach((element)=>{
    element.addEventListener('click',()=>{
        
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
}))

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
