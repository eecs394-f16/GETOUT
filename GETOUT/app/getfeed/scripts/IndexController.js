angular
  .module('getfeed')
  .controller('IndexController', function($scope, supersonic) {

      $scope.updateCurrentEvent = function (ev) {
          var view = new supersonic.ui.View("detail#detailEvent");
          supersonic.ui.layers.push(view, { params: ev });
      };

    $scope.testEvent1 = {
      name: "WhirlyBall",
      location: "1825 W Webster Ave, Chicago, IL 60614",
      subLocation: "Bucktown",
      lat: 41.9212,
      lng: -87.6739,
      location: "1825 W Webster Ave",
      time: "11AM - 12AM",
      eventType: "Activity",
      activityType: "Sports",
      desc: "You can play whirlyball, bowl, play tag & watch sports at this spot also with American grub & drink.",
      link: "http://www.whirlyball.com",
      source: "Google",
      image: "https://assets3.thrillist.com/v1/image/1375346/size/tmg-facebook_social.jpg",
    }
    $scope.testEvent3 = {
      name: "Koi Happy Hour",
      location: "624 Davis Street Evanston, IL 60201",
      subLocation: "Evanston",
      lat: 42.0464,
      lng: -87.6811,
      image: "http://www.koievanston.com/images/logo-Koi01.gif",
      location: "624 Davis Street",
      time: "6:00PM - 7:30PM",
      eventType: "Food",
      foodType: "Asian",
      desc: "Koi is located in the right in the heart of charming Evanston’s restaurant row. Koi brings the bold flavors of the eight different regions of authentic Chinese Cuisine and fresh sushi to every dining experience. The new menu brings owner Sandy Chens’ love for traditional Chinese cooking to the forefront, while still offering the menu favorites that our regular customers have come to love.",
      link: "https://www.yelp.com/biz/koi-fine-asian-cuisine-and-lounge-evanston",
      source: "yelp",
      image: "https://www.diningin.com/img/Home2.jpg",
    }
    $scope.testEvent2 = {
      name: "Holiday Tree Lighting",
      location: "First Northern Credit Union, 1705 Sherman Ave",
      subLocation: "Evanston",
      lat: 42.0470,
      lng: -87.6816,
      location: "1705 Sherman Ave",
      time: "6:00PM - 7:30PM",
      eventType: "Holiday",
      activityType: "Outdoors",
      desc: "Festivities will begin at 5 p.m. with music from the Evanston Children's Choir and appearances from surprise special guests. At 5:30 p.m., Mayor Elizabeth Tisdahl, Santa and Mrs. Claus will flip the switch and light the tree in Fountain Square. The event is free and open to all ages.",
      link: "http://www.cityofevanston.org/news/2015/11/celebrate-the-season-at-downtown-evanstons-holiday-tree-lighting-november-20/",
      source: "cityofevanston",
      image:"http://www.photos-public-domain.com/wp-content/uploads/2012/11/holiday-night-street-scene-with-christmas-lights.jpg",
    }

    //$scope.currentEvent = $scope.testEvent1;

    $scope.testEvents =[];
    $scope.testEvents.push($scope.testEvent1);
    $scope.testEvents.push($scope.testEvent2);
    $scope.testEvents.push($scope.testEvent3);
  });
