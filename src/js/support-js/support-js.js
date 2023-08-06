const websites = [{
        title: 'Save the Children',
        url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: null,
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: null,
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: null,
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: null,
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: null,
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: null,
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: null,
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: null,
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: null,
    },
]

const links = document.querySelectorAll('#links a');

for (var i = 0; i < websites.length; i++) {
    links[i].setAttribute('href', websites[i].url);
    links[i].setAttribute('title', websites[i].title);
    links[i].setAttribute('target', '_blank');
}




// function expandList() {
//     const supportList = document.querySelectorAll('.support-list');
//     const scrollButton = document.querySelector(".support-scroll");

//     listContainer.classList.toggle("collapsed");

//     if (listContainer.classList.contains("collapsed")) {
//         scrollButton.innerHTML = `
//             <svg width="38" height="38">
//                 <use href="../img/spryte.svg#icon-scroll-down"></use>
//             </svg>`;
//     } else {
//         scrollButton.innerHTML = `
//             <svg width="38" height="38">
//                 <use href="../img/spryte.svg#icon-scroll-up"></use>
//             </svg>`;
//         listContainer.style.maxHeight = listContainer.scrollHeight + "px"; // Розгорнутий стан
//     }
// }
// Функция для раскрытия и скрытия элементов списка
// Функция для раскрытия и скрытия элементов списка
function toggleList() {
    var supportList = document.querySelectorAll('.support-list'); // Получаем все элементы списка
    var button = document.querySelector('.support-scroll'); // Получаем кнопку
    var upArrow = button.querySelector('svg:nth-child(2)');
    var downArrow = button.querySelector('svg:first-child');

    // Определяем состояние списка
    var isListExpanded = supportList[4].style.display === 'block';

    // Изменяем стили элементов списка в зависимости от состояния
    for (var i = 4; i < supportList.length; i++) {
        supportList[i].style.display = isListExpanded ? 'none' : 'block';
    }

    // Переключаем видимость стрелок
    upArrow.style.display = isListExpanded ? 'block' : 'none';
    downArrow.style.display = isListExpanded ? 'none' : 'block';

    // Адаптивность для иконок в зависимости от состояния списка и ширины экрана
    var iconSize = isListExpanded ? '16px' : '20px';
    upArrow.setAttribute('width', iconSize);
    upArrow.setAttribute('height', iconSize);
    downArrow.setAttribute('width', iconSize);
    downArrow.setAttribute('height', iconSize);
}

// Назначаем обработчик события на кнопку
var button = document.querySelector('.support-scroll');
button.addEventListener('click', toggleList);

// Вызываем функцию для адаптивности при загрузке страницы
window.addEventListener('load', function() {
    toggleList();
});

// Вызываем функцию для адаптивности при изменении размеров окна
window.addEventListener('resize', function() {
    toggleList();
});