let i = 0;
let images = [];
let time = 5000;

//image list 
images[0] = "images/images.png";
images[1] = "images/school.jpg";


//change image
function changePic(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changePic()", time);
}
window.onload = changePic();