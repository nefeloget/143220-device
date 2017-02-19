var contact_us = document.querySelector('.contacts .btn');
var contact_pop_up = document.querySelector('.modal-content');
var open_map = document.querySelector('.contacts img');
var map_pop_up = document.querySelector('.modal-content-map');
var close_contact = contact_pop_up.querySelector('.modal-content-close');
var close_map = map_pop_up.querySelector('.modal-content-close');

contact_us.addEventListener('click', function(event) {
  event.preventDefault();
  contact_pop_up.classList.add('modal-content-show');
});

open_map.addEventListener('click', function(event) {
  event.preventDefault();
  map_pop_up.classList.add('modal-content-show');
});

close_contact.addEventListener('click', function(event) {
  event.preventDefault();
  contact_pop_up.classList.remove('modal-content-show');
});

close_map.addEventListener('click', function(event) {
  event.preventDefault();
  map_pop_up.classList.remove('modal-content-show');
});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map('map', {
        center: [55.68709109, 37.52969634],
        zoom: 17
    });

    myPlacemark = new ymaps.Placemark([55.68709109, 37.52969634], {
        hintContent: 'DEVICE',
        balloonContent: 'Мы находимся здесь!'
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
}
