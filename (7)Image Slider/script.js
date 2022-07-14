let flag=0;
function controller(x){
    flag=flag+x;
    slideshow(flag);
    //we called slideshow inside controller function because controller function will be called when user click to move left or right.
    //we need to show other image when person clicked left or right according to the updtaed flag value
}

slideshow(flag);

function slideshow(num){
    let slides=document.getElementsByClassName('slider');
    //slides is a array that contains all the image 
    //Since, slides is an array that have all the elemnts having class="slider" and we know all the image have class="slider" 
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    //Added two if condition
    //1st if condition is to handle a case when we click next on last image then after handling we can go to 1st image on clicking next on last image
    //2nd if condition is to handle a case when we click previous on 1st image then after handling we can go to last image on clicking previous on 1st image
    
    for(let y of slides){
        y.style.display="none";
    }
    //Added a for loop to make display of every image as none(invisible) and then we made that image display as block(visible) which is at index equals to flag in slides array
    slides[num].style.display="block";
}