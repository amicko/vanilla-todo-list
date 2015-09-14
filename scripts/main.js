'use strict';

var label = document.getElementById('label');
var button = document.getElementById('button');
var list = document.getElementById('listInput');
var listItems = [];


button.addEventListener('click', function() {
  listInput.innerHTML += '&#8226;' + ' ' + label.value + '<br />';
  listItems.push([label.value])
  label.value = '';
  console.log(listItems);
})

reset.addEventListener('click', function() {
  list.innerHTML = '' ;
  label.value = '';
})