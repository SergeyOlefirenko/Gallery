var figures = [
    {
        url : 'https://source.unsplash.com/MCMfw-bl8lY/500x500' , 
        text : 'My dream' , 
        rotate : '-12deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/9FEoZ7Oj4R8/500x500' , 
        text : 'Roads' , 
        rotate : '15deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/fFX2vB_NNzQ/500x500' , 
        text : 'Early morning' , 
        rotate : '12deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/KkCig7EbfoA/500x500' , 
        text : 'Lost' , 
        rotate : '-15deg' ,
    } ,
    {
        url : 'https://source.unsplash.com/HAoEfVC3y68/500x500 ' , 
        text : '#Brooklyn Bridge' , 
        rotate : '5deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/y6aXFooXcRs/500x500' , 
        text : 'Skys' , 
        rotate : '10deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/eGD69I3ODC4/500x500' , 
        text : 'Forest' , 
        rotate : '-12deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/0hAnt8BUbbA/500x500' , 
        text : 'My temporary home' , 
        rotate : '-8deg' ,
    } ,
    {
        url : 'https://source.unsplash.com/MU70DTGr7d0/500x500' , 
        text : 'Love' , 
        rotate : '5deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/L4nwL3195U0/500x500' , 
        text : 'Grandma' , 
        rotate : '12deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/I4dR572y7l0/500x500' , 
        text : 'Miss you...' , 
        rotate : '-12deg' ,
    } , 
    {
        url : 'https://source.unsplash.com/BcVvVvqiCGA/500x500' , 
        text : 'Dance' , 
        rotate : '15deg' ,
    } 
]

var elements = [];

for(var i=0; i<figures.length; i++){
    var figure = document.createElement('figure')
    var image = document.createElement('img')
    var figcaption = document.createElement('figcaption')

    figure.style.transform = `rotate(${figures[i].rotate})`
    image.src= figures[i].url
    figcaption.innerText=figures[i].text

    figure.appendChild(image)
    figure.appendChild(figcaption)
    
    gallery.appendChild(figure);
}

// function getContainer() {


// }



for(var i = 1; i  <=elements.length; i++){
    box.appendChild(elements[i-1])
    if(i%4==0){
        // document.body.appendChild(box)
        // box = getContainer();
    }
}
