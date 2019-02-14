ymaps.ready(init);

var placemark = [
    {
        latitude: 55.758509, //широта
        longitude: 37.641045 ,//долгота
        hintContent: 'Нажми',
        balloonContent: 'улица Покровка, 4'
    },
    {
        latitude: 55.760545, //широта
        longitude: 37.623268,//долгота
        hintContent: 'Нажми',
        balloonContent: 'Пушечная улица, 6'
    } 
];


    function init(){    
        var myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 13
        });
        placemark.forEach(function(obj){
            var myPlacemark = new ymaps.Placemark ([obj.latitude, obj.longitude] , {
                hintContent: obj.hintContent,
                balloonContent: obj.balloonContent
            },
            {
                iconLayout:'default#image',
                iconImageHref:'./img/map/map-marker.png',
                iconImageSize:[46,57]
    
            });
            myMap.geoObjects.add(myPlacemark);
        });
        
    
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('inputSearch');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        
       
    };

  