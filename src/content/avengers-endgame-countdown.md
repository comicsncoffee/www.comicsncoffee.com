---
title: "Avengers: Endgame Countdown"
description: "The Avengers: Endgame Countdown"
---

<script type="text/JavaScript">
  window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
</script>

<script type="text/JavaScript">
	var releaseDate = Date.parse( "2019-04-26" );
	var curDate = new Date();
	var difference = Math.floor(( releaseDate - curDate) / 86400000 );
</script>

<script type="text/JavaScript">
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock( endtime ) {
  var daysSpan = $( "#countdown-widget span.days" );
  var hoursSpan = $( "#countdown-widget span.hours" );
  var minutesSpan = $( "#countdown-widget span.minutes" );
  var secondsSpan = $( "#countdown-widget span.seconds" );

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.html( t.days );
    hoursSpan.html( ('0' + t.hours).slice(-2) );
    minutesSpan.html( ('0' + t.minutes).slice(-2) );
    secondsSpan.html( ('0' + t.seconds).slice(-2) );

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock(releaseDate);
</script>

<style type="text/css">
	#countdown-widget{
		text-align: center;
	}

	#countdown-widget > div{
		margin-bottom: 10px;
		border-radius: 5px;
		padding: 10px;
		background-color: #000000;
		display: inline-block;
	}

	#countdown-widget > div > span{
		padding: 15px;
		border-radius: 3px;
		background-color: #B2303A;
		display: inline-block;
	}

	.smalltext{
		padding-top: 5px;
	}

	div.aligncenter{
		padding-top: 40px;
	}

	@media(max-width: 500px){
		#countdown-widget > div{
			width: 48%;
		}
	}
</style>

<div id="countdown-widget">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>

<div id="theTwitterShareButton" class="aligncenter">
</div>

### Phase 3 of the Marvel Cinematic Universe will end in <strong><span id="counter-ph"></span> days</strong>! Are you ready?

<script type="text/JavaScript">
	$( "#counter-ph" ).html( difference );
	initializeClock( new Date( releaseDate ));

	// Create tweet button
	twttr.ready(function(){
		window.twttr.widgets.createShareButton(
			"https://ComicsNCoffee.com/avengers-endgame-countdown/",
			document.getElementById("theTwitterShareButton"),
			{
				text: "Avengers: Endgame will be here in " + difference + " days. Excited? Keep track with this countdown.",
				hashtags: "AvengersEndgame",
				via: "Comics_NCoffee",
				related: "MarvelStudios",
				size: "large"
			}
		);
	});
</script>
