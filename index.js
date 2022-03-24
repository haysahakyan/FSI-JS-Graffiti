
// Select some elements...

let header =document.querySelector('#page-header')
header.style.textAlign= 'left'

let dogImages = document.querySelectorAll('.dog-image')
for(let i=0; i<dogImages.length; i++){
    dogImages[i].style.border='double red'
    dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.transform ='rotate(180deg)'
}

let imageBorder = document.querySelector('.second')
imageBorder.style.borderRadius="50px 0"

let dogName =document.querySelectorAll('.dog-name')
for(let i=0; i<dogName.length; i++){
    dogName[i].style.textAlign = 'left'
}

let footerTextColor = document.querySelector('.footer')
footerTextColor.style.color='green'
footerTextColor.style.border ='double'

let dogDescription =document.querySelectorAll('.dog-description')
for(let i=0; i<dogDescription.length; i++){
    dogDescription[i].style.border = ' double blue '
    dogDescription[i].style.padding = '10px'
}
dogDescription[0].style.borderRadius = '0 50px'
dogDescription[2].style.borderRadius = '0 50px'
// I tried write if conditon insted of last two line 
    