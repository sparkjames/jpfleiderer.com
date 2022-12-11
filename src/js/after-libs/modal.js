var show_modal = function(e){
    // console.log(e);

    try {
        var target = e.target;
        var modal = document.getElementById('modal');
            // console.log(modal);

        if( !modal.classList.contains('is-active') ){
            modal.classList.add('is-active');
        }

        var modal_image = document.getElementById('modal-image');
            // console.log(modal_image);
        var image_src = '' + target.dataset.screenshot;
            // console.log(image_src);
        modal_image.src = image_src;
    }
    catch(error){}
}



var modal_links = document.querySelectorAll('.modal-link');

try {

    for( i=0; i<modal_links.length; i++ ){
        modal_links[i].addEventListener('click', show_modal );
    }

}
catch(error){}
