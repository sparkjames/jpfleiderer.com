let show_modal = function(e){
    // console.log(e);

    try {
        let target = e.target;
        let modal = document.getElementById('modal');
            // console.log(modal);

        if( !modal.classList.contains('is-active') ){
            modal.classList.add('is-active');
        }

        let modal_image = document.getElementById('modal-image');
        modal_image.src = '' + target.dataset.screenshot;
        modal_image.alt = target.dataset.alt;
    }
    catch(error){
        console.log( 'Error showing modal: ', error );
    }
}



let modal_links = document.querySelectorAll('.modal-link');

try {

    for( i=0; i<modal_links.length; i++ ){
        modal_links[i].addEventListener('click', show_modal );
    }

}
catch(error){
    console.log( 'Error setting modal link click: ', error );
}
