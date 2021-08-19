let chevycomments = document.getElementById('chevycomments');
let fordcomments = document.getElementById('fordcomments');

let chevyimage = document.getElementById('chevyImg');
let fordimage = document.getElementById('fordImg');

let chevytype = document.getElementById('sportscar');
let fordtype = document.getElementById('offroad');

let chevyspecs = document.getElementById('chevyspecs');
let fordspecs = document.getElementById('fordspecs');





function chevyReveal(){
    if(chevycomments.style.visibility == 'visible'){
        chevycomments.style.visibility = 'hidden';
        chevyimage.style.visibility = 'hidden';
        chevytype.style.visibility = 'hidden';
        chevyspecs.style.visibility = 'hidden';
    }
    else{
        chevycomments.style.visibility = 'visible';
        chevyimage.style.visibility = 'visible';
        chevytype.style.visibility = 'visible';
        chevyspecs.style.visibility = 'visible';
    }
    
}


function fordReveal(){
    if(fordcomments.style.visibility == 'visible'){
        fordcomments.style.visibility = 'hidden';
        fordimage.style.visibility = 'hidden';
        fordtype.style.visibility = 'hidden';
        fordspecs.style.visibility = 'hidden';
    }
    else{
        fordcomments.style.visibility = 'visible';
        fordimage.style.visibility = 'visible';
        fordtype.style.visibility = 'visible';
        fordspecs.style.visibility = 'visible';
    }
    
}
