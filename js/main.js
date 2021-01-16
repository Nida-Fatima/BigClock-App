$(window).on("load",function(){
  $('.pre-loader').css('display','none');
});
$(document).ready(function(){

  // showing pre-loader on window load
  // window.onload = $('.pre-loader').css('display','none');
  

  //hooking keydown function
  window.addEventListener('keydown', detectKeypress);

  var $inputRange = $('.touch-range');

  // Initialise rangeslide.js
	$inputRange.rangeslider({
		// Stop polyfill reverting when 
		// browser compatible with input[rangeslider]
		polyfill: false,
		
		// Run once user has finished adjusting range slider
		onSlideEnd: function() {
			console.log("Range slider changed");
		}
	});


  /////// Global bool variables //////
  var menu = false;
  var triangulated = false;



  

  ///////////////////////////// setting Current date //////////////////

  const dateHolder = $("#date");
  var d = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  var dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var strDate =  dayNames[d.getDay()]+ " " + d.getDate()+ " " + monthNames[(d.getMonth())] + " " + d.getFullYear();
  dateHolder.html(strDate);

 
    //////////////////////////// draggable Clock ////////////////////////////////////
  

  
    ///////////////////////// clickable div /////////////////////////////////



    var mobileWidth = window.matchMedia("(max-width: 668px)");
    var tabletWidth = window.matchMedia("(min-width: 669px) and (max-width: 1024px)");

    function slideMenu(){

      var m = mobileWidth.matches;
      var t = tabletWidth.matches;
      menu= true;
      $('.pop-up').css('visibility', 'visible' );
      if(m == 1){
        $('.pop-up').css('width', '100%' );
      }
      else if(t == 1){
        $('.pop-up').css('width', '50%' );
      }
      else
        $('.pop-up').css('width', '33%' );

    };
    
    $('.main-container').on('click',slideMenu);
      

    $('.clockWidget').on('click', slideMenu);


    //////////////////////////  Full Screen Functionality //////////////////////

    var getvalue = function(){
        var svalue = $('.full-screen-switch input:checked').val();
        if(svalue == "on"){
            /* View in fullscreen */
            
           onFullScreen();
        }
        else
        /* off fullscreen */
            offFullScreen();
    };

      function onFullScreen(){
        if (document.documentElement.requestFullScreen) {  
            document.documentElement.requestFullScreen();  
          } else if (document.documentElement.mozRequestFullScreen) {  
            document.documentElement.mozRequestFullScreen();  // For Firfox
          } else if (document.documentElement.msRequestFullScreen) {  
            document.documentElement.msRequestFullScreen(); //For IE
          }else if (document.documentElement.webkitRequestFullScreen) {  
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  // For Chrome and Safari
          }  
      }
      function offFullScreen(){
          
        if (document.cancelFullScreen) {  
                    document.cancelFullScreen();  
                  } else if (document.mozCancelFullScreen) {  
                    document.mozCancelFullScreen();  
                  } else if (document.webkitCancelFullScreen) {  
                    document.webkitCancelFullScreen();  
                  }else if (document.msCancelFullScreen) {  
                    document.msCancelFullScreen();  
                  }   
      }
    
      /////// getting Full screen switch value

    $('.full-screen-switch input').change(getvalue);

    /////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// Setting Image ///////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////


    function removeActiveFromVid(){

      $('.video1').removeClass('active-button');
      $('.video2').removeClass('active-button');
      $('.video3').removeClass('active-button');
      $('.video4').removeClass('active-button');
      $('.new-video').removeClass('active-button');
    };

    $(".img1").click(setImage1); //image 1
    $(".img2").click(setImage2); //image 2
    $(".img3").click(setImage3); //image 3
    $(".img4").click(setImage4); //image 4
    $(".new-img input:file").change(loadImage); // load Image
    // $(".new-img input:file").on('keypress', loadImage() );

    ///// function to set Image 1

      function setImage1(){
      showSpinner();
      $(".video-controls").hide();

      /// Adding active class on active button
      $('.img1').addClass('active-button');

      /// removing active class from all other buttons
      $('.img2').removeClass('active-button');
      $('.img3').removeClass('active-button');
      $('.img4').removeClass('active-button');
      $('.new-img').removeClass('active-button');
      removeActiveFromVid();


      // fading out video container and fadding in image container
      $('#video1').fadeOut(2000, function () {
        // animation on changing image src attribute
        $(".bg-img").fadeOut(function() { 
          $(this).on("load", function() { $(this).fadeIn(1000); }); 
          $(this).attr("src", "images/bg-1.jpg"); 
        }); 
    });
    $('.bg-img').on("load",function(){
      hideSpinner();
    })

    }

    ///// function to set Image 2

      function setImage2(){
      showSpinner();
      ///// Adding active class on active button
      $('.img2').addClass('active-button');

      ///// removing active class from all other buttons
      $('.img1').removeClass('active-button');
      $('.img3').removeClass('active-button');
      $('.img4').removeClass('active-button');
      $('.new-img').removeClass('active-button');
      removeActiveFromVid();

      $(".video-controls").hide();

      // fading out video container and fadding in image container
      $('#video1').fadeOut(2000, function () {
        
        $(".bg-img").fadeOut(1000, function() { 
          $(this).on("load",function() { $(this).fadeIn(1000); }); 
          $(this).attr("src", "images/bg-2.jpg"); 
        });
    });
        $('.bg-img').on('load',function(){
          hideSpinner();
        })
    };

    ////// Function to Set Image 3

      function setImage3(){
      showSpinner();
      ///// Adding active class on active button
      $('.img3').addClass('active-button');

      ///// removing active class from all other buttons
      $('.img2').removeClass('active-button');
      $('.img1').removeClass('active-button');
      $('.img4').removeClass('active-button');
      $('.new-img').removeClass('active-button');
      removeActiveFromVid();

      $(".video-controls").hide();

      // fading out video container and fadding in image container
      $('#video1').fadeOut(2000, function () {
        
        $(".bg-img").fadeOut(1000, function() { 
          $(this).on("load",function() { $(this).fadeIn(1000); }); 
          $(this).attr("src", "images/bg-3.jpg"); 
        });
    });

        $('.bg-img').on('load',function(){
          hideSpinner();
        })
    };

        ////// Function to Set Image 4

      function setImage4(){
          showSpinner();
        ///// Adding active class on active button
        $('.img4').addClass('active-button');

        ///// removing active class from all other buttons
        $('.img2').removeClass('active-button');
        $('.img3').removeClass('active-button');
        $('.img1').removeClass('active-button');
        $('.new-img').removeClass('active-button');
        removeActiveFromVid();

        $(".video-controls").hide();

        // fading out video container and fadding in image container
        $('#video1').fadeOut(2000, function () {
        
          $(".bg-img").fadeOut(1000, function() { 
            $(this).on("load",function() { $(this).fadeIn(1000); }); 
            $(this).attr("src", "images/bg-4.jpg"); 
          });
      });

        $('.bg-img').on('load',function(){
          hideSpinner();
        })
      };

    ////// Uploading new Image
    
        function loadImage(){  
           
          showSpinner();
          ///// Adding active class on active button
          $('.new-img').addClass('active-button');

          ///// removing active class from all other buttons
          $('.img2').removeClass('active-button');
          $('.img3').removeClass('active-button');
          $('.img4').removeClass('active-button');
          $('.img1').removeClass('active-button');
          removeActiveFromVid();

          $(".video-controls").hide();
            
          // fading out video container and fadding in image container
            $('#video1').fadeOut(2000, function () {
        
                $('.bg-img').fadeIn(1000);           
            });

            var svalue = $('.full-screen-switch input:checked').val();
            if(svalue == 'on'){
                /* View in fullscreen */
                
              onFullScreen();
            }
            else
            /* off fullscreen */
                offFullScreen();

            // $('.full-screen-switch input').attr("checked",false);
            if (this.files && this.files[0]) {
            
              var url = URL.createObjectURL(this.files[0]);

              $('.bg-img').on('load',function(){
               
                hideSpinner();
              });
              $('.bg-img').attr('src',url);
 
              URL.revokeObjectURL(this.files[0]);
            }
        };


    /////////////////////////// Setting Video ///////////////////////////////////

    //removing active class from all image buttons
    function removeActiveFromImg(){
      $('.img1').removeClass('active-button');
       $('.img2').removeClass('active-button');
       $('.img3').removeClass('active-button');
       $('.img4').removeClass('active-button');
       $('.new-img').removeClass('active-button');
    };

    var videoNode = document.querySelector('#video1');
    $(".new-video input:file").on('change',loadVideo); //load video
    $(".video1").click(setVideo1); // video 1
    $(".video2").click(setVideo2); // video 2
    $(".video3").click(setVideo3); // video 3
    $(".video4").click(setVideo4); // video 4

    ////////// setting video 1

    function setVideo1(){
      showSpinner();

       ///// Adding active class on active button
       $('.video1').addClass('active-button');

       ///// removing active class from all other buttons
       removeActiveFromImg();
       $('.video2').removeClass('active-button');
       $('.video3').removeClass('active-button');
       $('.video4').removeClass('active-button');
       $('.new-video').removeClass('active-button');

        $(".video-controls").show();

        // fading out Image container and fadding in Video container
        $('.bg-img').fadeOut(1000, function () {

          $('#video1').fadeOut(1000,function(){
          $('#video1').attr("src", "images/bg-video1.mp4").fadeIn(1000);

          // hiding spinner afetr video loads
          videoNode.addEventListener('loadeddata', function() {
            // Video is loaded and can be played
            hideSpinner();
         }, false);
          $("#video1").attr('loop', true);  
        });
      }); 
    };

    //////////// setting video 2

    function setVideo2(){

      showSpinner();
      ///// Adding active class on active button
      $('.video2').addClass('active-button');

      ///// removing active class from all other buttons
      removeActiveFromImg();
      $('.video1').removeClass('active-button');
      $('.video3').removeClass('active-button');
      $('.video4').removeClass('active-button');
      $('.new-video').removeClass('active-button');


      $(".video-controls").show();

      // fading out Image container and fadding in Video container
      $('.bg-img').fadeOut(1000, function () {
        
        $('#video1').fadeOut(1000,function(){
          $('#video1').attr("src", "images/bg-video2.mp4").fadeIn(1000);
          videoNode.addEventListener('loadeddata', function() {
            // Video is loaded and can be played
            hideSpinner();
         }, false);
          $("#video1").attr('loop', true);  
        });  
      });
        
    };

     //////////// setting video 3

     function setVideo3(){

      showSpinner();

      ///// Adding active class on active button
      $('.video3').addClass('active-button');

      ///// removing active class from all other buttons
      
      removeActiveFromImg();
      $('.video1').removeClass('active-button');
      $('.video2').removeClass('active-button');
      $('.video4').removeClass('active-button');
      $('.new-video').removeClass('active-button');

      $(".video-controls").show();

      // fading out Image container and fadding in Video container
      $('.bg-img').fadeOut(1000, function () {
        
        $('#video1').fadeOut(1000,function(){
          $('#video1').attr("src", "images/bg-video3.mp4").fadeIn(1000);
          videoNode.addEventListener('loadeddata', function() {
            // Video is loaded and can be played
            hideSpinner();
         }, false);
          $("#video1").attr('loop', true);  
        }); 
      });
        
    };

     //////////// setting video 4

     function setVideo4(){

      showSpinner();
      ///// Adding active class on active button
      $('.video4').addClass('active-button');

      ///// removing active class from all other buttons
     
      removeActiveFromImg();
      $('.video1').removeClass('active-button');
      $('.video2').removeClass('active-button');
      $('.video3').removeClass('active-button');
      $('.new-video').removeClass('active-button');

      $(".video-controls").show();

      $('.bg-img').fadeOut(1000, function () {
        
        $('#video1').fadeOut(1000,function(){
          $('#video1').attr("src", "images/bg-video4.mp4").fadeIn(1000);
          videoNode.addEventListener('loadeddata', function() {
            // Video is loaded and can be played
            hideSpinner();
         }, false);
          $("#video1").attr('loop', true);  
        }); 
      });
        
    };

    ////////////// uploading video

    function loadVideo(){
      showSpinner();
      ///// Adding active class on active button
      $('.new-video').addClass('active-button');

      ///// removing active class from all other buttons
      
      removeActiveFromImg();
      $('.video2').removeClass('active-button');
      $('.video3').removeClass('active-button');
      $('.video4').removeClass('active-button');
      $('.video1').removeClass('active-button');

      var svalue = $('.full-screen-switch input:checked').val();
      if(svalue == 'on'){

        /* View in fullscreen */  
        onFullScreen();
      }
      else
      /* off fullscreen */
          offFullScreen();
       
        if (this.files && this.files[0])
          {
            var URL = window.URL || window.webkitURL;
              var file = this.files[0];
              var type = file.type;
              var canPlay = videoNode.canPlayType(type);
              if (canPlay === '') canPlay = 'no';
              var message =  type + " File is not supported. Please select other file";
              var isError = canPlay === 'no';
          
              if (isError) {
                  alert(message+","+ isError);
                return
              }
              else{
                showSpinner(); 
                $(".video-controls").show();
                // $("#video1").css("display","block");
                $('#video1').fadeIn(1000);
                $("#video1").attr('loop', true);
                var fileURL = URL.createObjectURL(file);                      
                videoNode.src = fileURL;
                videoNode.addEventListener('loadeddata', function() {
                  // Video is loaded and can be played
                  hideSpinner();
                }, false);
              }
            }   
      };

      function showSpinner(){
        $('.pre-loader').css('display','block');
      }
      function hideSpinner(){
        $('.pre-loader').css('display','none');
      }

  //-------------------- Video controls ----------------------//

  
  const playPauseBtn = $(".toggle-play");
  const volumeBtn = $(".toggle-volume");
  const player = $("#video1");
  const playerSlider =  document.querySelector('.player-slider');
  const progress     =  document.querySelector('.progress');
  const progressBar  =  document.querySelector('.progress__filled');
  const current      =  document.querySelector('.current');
  const duration     =  document.querySelector('.duration');
  const playbackSlider = $("#playback-slider"); 

function skip() {

  playbackSlider.attr('max',Math.round(player.get(0).duration));
  player.get(0).currentTime = parseInt(playbackSlider.val()); 
}
playbackSlider.on('input',skip);

function handleProgress() {
	const percent = (player.get(0).currentTime / player.get(0).duration) * 100;
  progressBar.style.width = percent + '%';
}

function currentTime() { 
  var curmins = Math.floor(player.get(0).currentTime / 60);
var cursecs = Math.floor(player.get(0).currentTime - curmins * 60);
var durmins = Math.floor(player.get(0).duration / 60);
var dursecs = Math.floor(player.get(0).duration - durmins * 60);
if(cursecs < 10){ cursecs = "0"+cursecs; }
if(dursecs < 10){ dursecs = "0"+dursecs; }
if(curmins < 10){ curmins = "0"+curmins; }
if(durmins < 10){ durmins = "0"+durmins; }
current.innerHTML = curmins+":"+cursecs;
duration.innerHTML = durmins+":"+dursecs;
}

// hooking up the currentTime & handleProgress functions

player.on('timeupdate', currentTime);
player.on('timeupdate', handleProgress);



  //// toggle play/pause function

  function togglePlayPause(){

    if(player.get(0).paused){
      player.get(0).play();
      playPauseBtn.find('svg').attr('data-icon', 'pause-circle');
    
    }
    else{
      player.get(0).pause();
      playPauseBtn.find('svg').attr('data-icon', 'play-circle');
    }

  }
  //hooking the play/pause function
  playPauseBtn.on("click", togglePlayPause);

  // showing play button again afetr video ends

  function showPlayBtn(){
    playPauseBtn.find('svg').attr('data-icon', 'play-circle');
  }
  player.on("ended",showPlayBtn);


// toggle volume mute/unmute function

function togglemute(){

  if(player.get(0).muted){
    player.get(0).muted = false;
    volumeBtn.find('svg').attr('data-icon', 'volume-up');
  }
  else{
    player.get(0).muted = true;
    volumeBtn.find('svg').attr('data-icon', 'volume-mute');
  }

}
//hooking the play/pause function
volumeBtn.on("click", togglemute);

// volume up/down function
function SetVolume()
    {
        var val = $('#vol-control').val();
        if(!player.get(0).paused){
        player.get(0).volume = val / 100;
      }
      if(player.get(0).volume == 0){
        showVolumeOff();
      }
      else if(player.get(0).volume < 0.4 && player.get(0).volume > 0 ){
        showVolumeDown();
      }
      else if(player.get(0).volume > 0.4){
        showVolumeUp();}

    }
    $("#vol-control").on('input',SetVolume);

    function showVolumeDown(){
      volumeBtn.find('svg').attr('data-icon', 'volume-down');
    }
    function showVolumeUp(){
      volumeBtn.find('svg').attr('data-icon', 'volume-up');
    }
    function showVolumeOff(){
      volumeBtn.find('svg').attr('data-icon', 'volume-off');
    }


    //---------------------- OPACITIES ---------------------------//

    //////////////////// Setting Clock Opacity ////////////////////

    $('#clock-opacity.range-slider').on('touchstart', function(e){
      console.log("event start")
      var touchobj = e.changedTouches[0]; 
      startx = parseInt(touchobj.clientX); 
      starty = parseInt(touchobj.clientY); 
      console.log("event start done", startx,starty)
  }, false);
    var setClockOpacity = function(){
      var o = ($('#clock-opacity input').val())/100;
      $(".clockWidget").css('opacity', o);
  }
  $('#clock-opacity').on('input',setClockOpacity);

   //////////////////// Setting Screen Opacity ////////////////////

    var setImgOpacity = function(){
        var o = ($('#image-opacity input').val())/100;
        $(".content-container").css('opacity', o);
    }
    // calling opacity function after getting value from range slider

    $('#image-opacity').on('input',setImgOpacity);

    /////////////// setting Overlay Opacity setting ///////////

      var setOverlayOpacity = function(){
        var o = ($('#overlay-opacity input').val())/100;
        $("#overlay-div").css('opacity', o);
    }

    // calling opacity function after getting value from range slider

    $('#overlay-opacity').on('input',setOverlayOpacity);


////////////////////////// Setting Overlay functionalities ////////////////

     //////// Overlay ON/OFF Toggle /////////

    var overlayvalue = function(){
        $('#overlay-div').toggleClass('overlay-container');
    } ;

    $('.overlay input').change(overlayvalue);

    ////////// Overlay colour setting //////////

    $('input#abc').on('change',function(){
        var oc = $('input#abc').val();
        $('#overlay-div').css("background-color",oc);
    });

  

    // system Reset

    $(".reset"). click(function(){
        location. reload(true);
    });

    //close button

    function closeMenu(){
      $('.pop-up').css('visibility', 'collapse' );
      $('.pop-up').css('width', '0' );
      menu = false;
    }

    $('.close').click(closeMenu);


    ////////////////////////// Triangulated Clock Functionality //////////////////////

    var getvalue = function(){
      
      var svalue = $('.wow-switch input:checked').val();
      if(svalue == "on"){
          /* View triangulated Clock */
         onTriangulatedVersion();
      }
      else
      /* off triangulated Clock */
          offTriangulatedVersion();
  };

    function onTriangulatedVersion(){

      triangulated = true;
      var hours = $('#hours').html();
      if(hours < 10){
        $('#hours').css('transform','translate(3%, 20%)');
        $('#hours').css('text-align','center');
      }
      else{
        $('#hours').css('transform','translate(-2%, 20%)');
      }
      //$('span.time-holder').css('letter-spacing', '0.1em');
      $(".clock").css('flex-direction','column');
      $("#colon").css('display','none'); 
      
    }
    function offTriangulatedVersion(){
      triangulated = false;
      //alert("offTrin")
      $(".clock").css('flex-direction','row');
      $("#colon").css('display','inline');
      $('#hours').css('transform','translate(0, 0)');
      //$('span.time-holder').css('letter-spacing', '0.1em');  
    }

    // getting wow clock switch value
    $('.wow-switch input').change(getvalue);

// setting the Clock time 

function setClockTime(){
  var timeHolder = $(".timeHolder");
  const hoursHolder = $("#hours");
  const minutesHolder = $("#minutes");
  const colon = $("#colon");
  var Digital=new Date()
  var hours=Digital.getHours()
  var minutes=Digital.getMinutes()
  var seconds=Digital.getSeconds()
  if (hours>12)
  hours=hours-12
  if (hours==0)
  hours=12
  if (minutes<=9)
  minutes="0"+minutes
  if (seconds<=9)
  seconds="0"+seconds
  hoursHolder.html(hours);
  colon.html(":")
  minutesHolder.html(minutes);
}
window.onload = setClockTime();
setInterval(function() {
    setClockTime();
    // getvalue(); /// getting value of wow switch
}, 1000);


///////////////////  Making the THE CLOCK  DIV element draggagle ///////////////////////////////////
var recoupLeft, recoupTop;

    $('.clock').draggable({
        // containment:"html",
        start: function (event, ui) {
            var left = parseInt($(this).css('left'),10);
            left = isNaN(left) ? 0 : left;
            var top = parseInt($(this).css('top'),10);
            top = isNaN(top) ? 0 : top;
            recoupLeft = left - ui.position.left;
            recoupTop = top - ui.position.top;
        },
        drag: function (event, ui) {
          
            ui.position.left += recoupLeft;
            ui.position.top += recoupTop;
        },   
    });

    ///// Setting the Clock sizes
    var setClockSize = function(){
      var s = ($('#clock-size input').val());
      var p = (s*28)/100;
      $("span.time-holder").css('font-size',p+'vw');
      if(p < 5.5){
        $('span.time-holder').css('letter-spacing', '0.2em');
        if(triangulated){
          $('#hours').css('transform','translate(-2%, 10%)');
        }
      }
      else
      $('span.time-holder').css('letter-spacing', '0.1em');
  }
  $('#clock-size').on('input',setClockSize);

    $("input[name='clock-size']").on('change', setClockSize);


    //////////////////////////////////// Media Query Function ////////////////////////////////////////

    function tabMenu() {
      
        onTriangulatedVersion();
        $('.wow-switch input[type = "checkbox"]').attr("checked","true");
        if(menu){
          $('.pop-up').css('width','50%');
        }
     }
    
    function mobileMenu(){
        
        onTriangulatedVersion();
        $('.wow-switch input[type = "checkbox"]').attr("checked","true");
        if(menu){
            $('.pop-up').css('width','100%');
          }
      }
      function laptopMenu(){
        
          $('.wow-switch input[type = "checkbox"]').attr("checked","false");
          offTriangulatedVersion();
          
          if(menu){
            $('.pop-up').css('width','50%');
          }
        
      }

    var tab = window.matchMedia("(max-width: 850px)");
    var mobile = window.matchMedia("(max-width: 668px)");
    var laptop = window.matchMedia("(max-width: 1024px)");
    
    
     tab.addListener(tabMenu) // Attach listener function on state changes
     mobile.addListener(mobileMenu)
     laptop.addListener(laptopMenu)
    




    ////////////////////////// Adding shortcut key functionality //////////////////////

    
  // Detect press of spacebar, toggle play

  function detectKeypress(e) {
      
    if (e.which == 32) {
      
      togglePlayPause();
    }
    else if( (e.altKey) && (e.keyCode == 49)) {
        setImage1();
    }
    else if( (e.altKey) && (e.keyCode == 50)) {
      setImage2();
    }
    else if( (e.altKey) && (e.keyCode == 51)) {
      setImage3();
    }
    else if( (e.altKey) && (e.keyCode == 52)) {
      setImage4();
    }
    else if( (e.altKey) && (e.keyCode == 73)) {
      $(".new-img input:file").click();
    }
    else if( (e.shiftKey) && (e.keyCode == 49)) {
      setVideo1();
    }
    else if( (e.shiftKey) && (e.keyCode == 50)) {
      setVideo2();
    }
    else if( (e.shiftKey) && (e.keyCode == 51)) {
      setVideo3();
    }
    else if( (e.shiftKey) && (e.keyCode == 52)) {
      setVideo4();
    }
    else if( (e.shiftKey) && (e.keyCode == 86)) {
      $(".new-video input:file").click();
    }
    else if((!e.altKey) && (e.keyCode == 80)){
      slideMenu();
    }
    else if( (e.altKey) && (e.keyCode == 80)) {
      closeMenu();
    }
    else if((!e.altKey) && (e.keyCode == 87)){
      onTriangulatedVersion();
    }
    else if( (e.altKey) && (e.keyCode == 87)) {
      offTriangulatedVersion();
    }
    else if((!e.altKey) && (e.keyCode == 70)){
      onFullScreen();
    }
    else if( (e.altKey) && (e.keyCode == 70)) {
      offFullScreen();
    }
  };

})