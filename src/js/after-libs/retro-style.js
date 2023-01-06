// Retro style toggle
// Let the button toggle the retro class on and off of the <body> element.
const retro_style_toggle = document.querySelector('.controls-retro-style');
retro_style_toggle.addEventListener( 'click', retro_style_toggle_onClick );

function retro_style_toggle_onClick(e){
  e.preventDefault();

  if( document.body.classList.contains('retro') ){
    document.body.classList.remove('retro');
  } else {
    document.body.classList.add('retro');
  }

}
