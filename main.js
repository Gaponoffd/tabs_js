
var list = document.querySelector('.list');
var items = Array.from(list.querySelectorAll('.item'));

var descriptionList = document.querySelector('.description-list');
var descriptionItems = Array.from(descriptionList.querySelectorAll('.description-item'));

list.addEventListener('click', function(event){
    
    var button = event.target;
    var item = button.parentNode;
    var itemIndex = items.indexOf(item);

    if(item){
        this.querySelector('.button.active').classList.remove('active');
        button.classList.add('active');

        descriptionList.querySelector('.description-item.active').classList.remove('active');
        descriptionItems[itemIndex].classList.add('active');
    }
});