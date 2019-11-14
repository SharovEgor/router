var koordinat= ['Москва', 'Тверь'];
var kor2=[];
var myMap;
function init () {
  
    // Создаем карту с добавленной на нее кнопкой.
    myMap = new ymaps.Map('Map', {
        center: [56.399625, 36.71120],
        zoom: 7
      
    });

    // Добавляем мультимаршрут на карту.
    
//создаём элемент для обработки кнопки update
    document.getElementById('update').onclick = function () {
        var multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: koordinat
                   
        }, {
            // Тип промежуточных точек, которые могут быть добавлены при редактировании.
            editorMidPointsType: "via",
            // В режиме добавления новых путевых точек запрещаем ставить точки поверх объектов карты.
            editorDrawOver: false
        });
        if(koordinat !=kor2){
        myMap.geoObjects.add(multiRoute);
        kor2= koordinat
       };
    };

    //обработка кнопки удаление карты
   document.getElementById('clear').onclick= function () {
   myMap.destroy(); //уничтожение карты 
    myMap = new ymaps.Map('Map', {//создание картыч
    center: [56.399625, 36.71120],
    zoom: 7
  
}

);
kor2=[]; }
}


ymaps.ready(init);


