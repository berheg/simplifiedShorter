const theParent = document.querySelector('#eventHandlerDiv');
theParent.addEventListener('click', diplayString,false);

function displayString(e){
    if(e.target !== e.currentTarget){
        const clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
};
