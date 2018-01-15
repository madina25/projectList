var cities = [
    "Abakan",
    "Barnaul",
    "Veliky Novgorod",
    "Vladivostok",
    "Dzerzhinsk",
    "Kazan",
    "Penza",
    "Saratov",
    "Samara"
];

// Добавление элементов из массива в список
function citySelect() {
    var city = document.getElementById('ulArray');
    for (var i = 0; i < cities.length; i++) {
        city.innerHTML = city.innerHTML + '<li onclick="addInputName(event)"><a href="#">' + cities[i] + '</a></li>';
    }
}

// Поиск
function selectCity() {
    var input = document.getElementById("inputArrayItem");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("ulArray");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}

// Изменение цвета
function changeColor() {
    var b = document.getElementById("color").value;
    document.getElementById("inputArrayItem").style.backgroundColor = b;
}

// Скрыть/показать color picker
function noChangeColor() {
    var c = document.getElementById('color');
    if (c.style.display === 'block') {
        c.style.display = "none";
    } else {
        c.style.display = "block"
    }
}

// Запись в input выбранного элемента
function addInputName(event) {
    var x = event.target.innerHTML;
    document.getElementById("inputArrayItem").value = x;
}

// Пользовательский Scroll
function customScroll() {
    var userHeight = document.getElementById('quantity').value;
    var liHeight = 35 * userHeight;
    document.getElementById('ulArray').style.height = (1 * liHeight) + 'px';
}

