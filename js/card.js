function init () {
  
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: ["Москва", "Тверь"]
    }, {
        // Тип промежуточных точек, которые могут быть добавлены при редактировании.
        editorMidPointsType: "via",
        // В режиме добавления новых путевых точек запрещаем ставить точки поверх объектов карты.
        editorDrawOver: false
    });


    

 

    // Создаем карту с добавленной на нее кнопкой.
    var myMap = new ymaps.Map('Map', {
        center: [56.399625, 36.71120],
        zoom: 7
      
    });

    // Добавляем мультимаршрут на карту.
    myMap.geoObjects.add(multiRoute);
}

ymaps.ready(init);


