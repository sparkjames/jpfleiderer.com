// Retro style toggle
// Let the button toggle the retro class on and off of the <body> element.
const retro_style_toggle = document.querySelector('.controls-retro-style');
retro_style_toggle.addEventListener( 'click', retro_style_toggle_onClick );

function retro_style_toggle_onClick(e){
  e.preventDefault();

  if( document.body.classList.contains('retro') ){
    document.body.classList.remove('retro');
    retro_style_stop_midi();

  } else {
    document.body.classList.add('retro');
    retro_style_start_midi();
  }

}



let retro_midi_player;
function retro_style_start_midi(){
  if( !retro_midi_player ){
    retro_midi_player = new Audio( window.location.pathname+'/assets/passport.mp3' );

    retro_midi_player.addEventListener("canplaythrough", () => {
      retro_midi_player.play();
    });

  } else {
    retro_midi_player.play();
  }

}

function retro_style_stop_midi(){
  if( retro_midi_player ){
    retro_midi_player.pause();

  }
}