function jpAddClass(el, className){
    var added_class = false;
    var add_class_to_these = [];

    try {

        // Check if the given element is a NodeList, like what document.querySelectorAll() will return. In that case, we can replace the add_class_to_these array directly with the NodeList.
        if( el.length ){
            add_class_to_these = el;

        // Otherwise it's just a single element, add it to the add_class_to_these array.
        } else {
            add_class_to_these.push(el);

        }

        // Now that the add_class_to_these array is populated, loop through and add classes.
        for( i=0; i<add_class_to_these.length; i++ ){
            if( add_class_to_these[i].classList ){
                add_class_to_these[i].classList.add(className);
                added_class = true;

            } else {
                add_class_to_these[i].className += ' ' + className;
                added_class = true;

            }
        }

    } catch( error ){
        console.log(error);
    }

    return added_class;
}



function jpHasClass(el, className){
    var has_class = false;

    try {

        if( el.classList ) {
            has_class = el.classList.contains(className);

        } else {
            has_class= new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);

        }

    } catch( error ){}

    return has_class;
}
