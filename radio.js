// Create a new javascript file
// Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly. 
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)
 
// // obj
// const radio = {
// declare string,num, array
// }

// class RadioStation{
//     constructor
// }


let station1 = {
    name: "station1", 
    songs: [{title:"Abc",  artist:" The Boys"},{ title:"DEF", artist:" The Girls"}]
}


let station2 = {
    name: "station2", 
    songs: [{title:"Abc",  artist:" The Boys"},{ title:"DEF", artist:" The Girls"}]
}


const radio ={
    radio: "Myradiostation",
    stations: [station1,station2],
    
    getRandomStation: function(){
      let idx =Math.floor(Math.random() * this.stations.length) 
      let station = this.stations[idx]
      console.log("Now Playing:" + station.songs[0].title + " by " + station.songs[0].artist)    
    }
    
} 



console.log(radio.getRandomStation())










// const stationsArray=[]{
//     name:['']
//     songs: 'title' , 'artist'


//     console.log("Now Playing" song,title+'by'+song.artist)
// }

// constructor(
//     this.station = station
//     this.name = name
//     this.song = song
//     this.title = title
//     this.artist = artist


