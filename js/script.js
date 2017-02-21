var contact_us = document.querySelector('.contacts .btn');
var contact_popup = document.querySelector('.modal-content');
var open_map = document.querySelector('.btn-map');
var map_popup = document.querySelector('.modal-content-map');
var close_contact = contact_popup.querySelector('.modal-content-close');
var close_map = map_popup.querySelector('.modal-content-close');
var form = contact_popup.querySelector('.contact-us-form');
var username = contact_popup.querySelector('[name=username]');
var email = contact_popup.querySelector('[name=email]');
var text = contact_popup.querySelector('[name=letter]');

var storage_user = localStorage.getItem('username');
var storage_email = localStorage.getItem('email');
var storage_text = localStorage.getItem('textarea');

contact_us.addEventListener('click', function(event) {
  event.preventDefault();
  contact_popup.classList.add('modal-content-show');

  if (storage_user && storage_email && storage_text) {
    username.value = storage_user;
    email.value = storage_email;
    text.value = storage_text;
  } else {
    username.focus();
  }

});

open_map.addEventListener('click', function(event) {
  event.preventDefault();
  map_popup.classList.add('modal-content-show');
});

close_contact.addEventListener('click', function(event) {
  event.preventDefault();
  contact_popup.classList.remove('modal-content-show');
  contact_popup.classList.remove('modal-error');
});

close_map.addEventListener('click', function(event) {
  event.preventDefault();
  map_popup.classList.remove('modal-content-show');
});

form.addEventListener('submit', function(event) {
  if (!username.value || !email.value || !textarea.value) {
    event.preventDefault();
    contact_popup.classList.remove('modal-error');
    contact_popup.offsetWidth = contact_popup.offsetWidth;
    contact_popup.classList.add('modal-error');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (contact_popup.classList.contains('modal-content-show')) {
      contact_popup.classList.remove('modal-content-show');
      contact_popup.classList.remove('modal-error');
    }
    if (map_popup.classList.contains('modal-content-show')) {
      map_popup.classList.remove('modal-content-show');
    }
  }
});

ymaps.ready(init);

var myMap,
    myPlacemark;

function init() {
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
