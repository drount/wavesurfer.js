document.addEventListener('DOMContentLoaded', function () {
    wavesurfer = Object.create(WaveSurfer);
    wavesurferScrollbar = Object.create(WaveSurfer.WaveScrollbar);
    
    wavesurfer.init({
        container: '#wave',
        waveColor: '#e3e4e6',
        progressColor: 'rgba(0,0,0,0)',
        selectionColor: 'rgba(255,0,0, .3)',
        selectionForeground: true,
        selectionBorder: true,
        selectionBorderColor: '#d42929',
        cursorColor: "#ffea00",
        scrollParent: true,
        //minPxPerSec: 213, //maximum working value
        minPxPerSec: 100,        
        height: 250,
        //pixelRatio: 3,
        cursorWidth: 2,
        normalize: 1
    });

    wavesurfer.load('../../example/media/demo2.mp3');    
    wavesurfer.on('selection-update', function(selection){
        if (selection !== null){
            document.querySelector("#mark0").innerHTML = selection.startTime;
            document.querySelector("#mark1").innerHTML = selection.endTime;
        }
    });

    document.querySelector("#play").addEventListener('click', function(){
        wavesurfer.playPause();
        return false;
    });
    document.querySelector("#play-selection").addEventListener('click', function(){
        wavesurfer.playPauseSelection();
        return false;
    });
    

    wavesurfer.on('ready', function(){
        //wavescrollbar init
        wavesurferScrollbar.init({
            container: "#wave-scroll",
            wavesurfer: wavesurfer,
            cursorWidth: 2
        });
    });    
});

