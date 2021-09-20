var isPlaying=false;
var isPlayed=false;
var songName=["Kabhii Tumhhe","Saibo","Awara","CHALE AANA","Tere Bin","Main Tera Boyfriend"];
var movieName=["Shershaah","Shor In The City"," Dabangg 3","De De Pyaar De","SIMMBA","Raabta"];
var singerName=["Darshan Raval,","Shreya Ghoshal , Tochi Raina","Salman Ali, Muskaan","Armaan Malik","Rahat Fateh Ali Khan, Asees Kaur and Tanishk Bagchi","Arijit Singh, Neha Kakkar, Meet Bros"];
var Duration=["03:40","02:16","05:15","04:13","03:35","03:08"];
var idIndex=["m1","m2","m3","m4","m5","m6"];
var playPause;
var id;
$(".play-song").click(function() {
    isPlayed=true;
    id=$(this).attr("id");
    play(id);
});
$(".play-pause").click(function() {
    if(!isPlaying){
        $(".play-pause").removeClass("fa-play").addClass("fa-pause");
        if(!isPlayed){
            id="m1";
            play("m1");
            isPlayed=true;
        }
        else{
            playPause.play();
            isPlaying=true;
        }
    }
    else{
        $(".play-pause").removeClass("fa-pause").addClass("fa-play");
        playPause.pause();
        isPlaying=false;
    }
});
$(".prev").click(function() {
    if(!isPlayed){
        id="m6";
        play(id);
        isPlayed=true;
    }
    else{
        if(id=="m1"){
            id="m6";
            play(id);
        }
        else{
            id=idIndex[idIndex.indexOf(id)-1]
            play(id);
        }
    }
});
$(".next").click(function() {
    if(!isPlayed){
        id="m1";
        play(id);
        isPlayed=true;
    }
    else{
        if(id=="m6"){
            id="m1";
            play(id);
        }
        else{
            id=idIndex[idIndex.indexOf(id)+1]
            play(id);
        }
    }
});
function play(id){
    var index=idIndex.indexOf(id);
    if(isPlaying){
        $(".play-pause").removeClass("fa-pause").addClass("fa-play");
        playPause.pause();
        isPlaying=false;
    }
    playPause=new Audio("Music/"+id+".mp3");
    playPause.play();
    isPlaying=true
    $(".play-pause").removeClass("fa-play").addClass("fa-pause");
    $(".songName").text("Song Name: "+songName[index]);
    $(".movieName").text("Movie Name: "+movieName[index]);
    $(".singerName").text("Singer Name: "+singerName[index]);
    $(".Duration").text("Duration: "+Duration[index]);
}