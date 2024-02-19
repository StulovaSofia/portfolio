let angular = window.document.getElementById('angular');
let layout = window.document.getElementById('layout');
let layoutList = window.document.getElementById('layoutList');
let angularList = window.document.getElementById('angularList');
layoutList.style.display = 'grid'
angularList.style.display = 'none'

angular.addEventListener('click', ev => {
    angular.classList.add('select__item--active');
    layout.classList.remove('select__item--active')
    angularList.style.display = 'grid'
    layoutList.style.display = 'none'
});
layout.addEventListener('click', ev => {
    layout.classList.add('select__item--active');
    angular.classList.remove('select__item--active')
    layoutList.style.display = 'grid'
    angularList.style.display = 'none'
});
