// Check for OS color scheme setting, switch to dark mode if needed.
if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ){
  document.body.classList.add('dark-mode');
}



// Let the button toggle the dark-mode class on and off of the <body> element.
const color_scheme_toggle = document.querySelector('.controls__color-scheme');
color_scheme_toggle.addEventListener( 'click', color_scheme_toggle_onClick );

function color_scheme_toggle_onClick(e){
  e.preventDefault();

  if( document.body.classList.contains('dark-mode') ){
    document.body.classList.remove('dark-mode');
  } else {
    document.body.classList.add('dark-mode');
  }

}
