var song = document.createElement("audio");

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

	if(request.type == "loop"){
		if (request.value == "true"){
			song.loop = true;
		} else {
			song.loop = false;
		}
	}

	if (request.type == "Start"){
		if (request.value == "ludicrous"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/ludicrous_speed.mp3";
			song.play();
		}

		if (request.value == "hydra"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/Hydra.mp3";
			song.play();
		}

		if (request.value == "muffin"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/muffin_time.mp3";
			song.play();
		}

		if (request.value == "BetterNow"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/better_now.mp3";
			song.play();
		}

		if (request.value == "Thunder"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/thunder.mp3";
			song.play();
		}

		if (request.value == "Bob"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/bob_the_builder.mp3";
			song.play();
		}

		if (request.value == "Mine"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/mine_diamonds.mp3";
			song.play();
		}

		if (request.value == "Sorry"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/sorry.mp3";
			song.play();
		}

		if (request.value == "Megalovania"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/Megalovania.mp3";
			song.play();
		}

		if (request.value == "lemon_tree"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/lemon_tree.mp3";
			song.play();
		}

		if (request.value == "quantom_mechanic"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/quantom_mechanic.mp3";
			song.play();
		}

		if (request.value == "hotel_california"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/hotel_california.mp3";
			song.play();
		}

		if (request.value == "bohemian_rhapsody"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/bohemian_rhapsody.mp3";
			song.play();
		}

		if (request.value == "painkiller"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/painkiller.mp3";
			song.play();
		}

		if (request.value == "jingle_bell_rock"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/jingle_bell_rock.mp3";
			song.play();
		}

		if (request.value == "o_holy_night"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/o_holy_night.mp3";
			song.play();
		}

		if (request.value == "back_in_black"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/back_in_black.mp3";
			song.play();
		}

		if (request.value == "merry_little_christmas"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/merry_little_christmas.mp3";
			song.play();
		}

		if (request.value == "yellow_ledbetter"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/yellow_ledbetter.mp3";
			song.play();
		}

		if (request.value == "life_is_fun"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/life_is_fun.mp3";
			song.play();
		}

		if (request.value == "god_bless_usa"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/god_bless_usa.mp3";
			song.play();
		}

		if (request.value == "elephant_gun"){
			song.src = "https://cookie-clicker.github.io/musicplayer/songs/elephant_gun.mp3";
			song.play();
		}


		if (request.value == "current"){
			if(song){
				song.play();
			}
		}
	}

	if (request.type == "Pause"){
		if(song){
			song.pause();
		}
	}

	if (request.type == "Restart"){
		if(song){
			song.pause();
			song.currentTime = 0;
		}
	}

});
