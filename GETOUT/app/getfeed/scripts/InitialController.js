﻿angular
  .module('getfeed')
  .controller('InitialController', function($scope, supersonic) {
    $scope.userFilters = [];
// add filters to the request, or remove it if it is already present
    $scope.addFilter = function (filter){
      if ($scope.userFilters.indexOf(filter)>=0){
        $scope.userFilters.splice($scope.userFilters.indexOf(filter),1);
      }
      else {
        $scope.userFilters.push(filter);
      }
    };
    // energy slider paramters
    $scope.energySlider = {
      minValue: 3,
      maxValue: 7,
      options: {
        floor: 1,
        ceil: 10,
        step: 1,
        showTicksValues: true,
        showTicks: false,
        stepsArray: [
          {value: 1, legend: 'Chill'},
          {value: 2},
          {value: 3},
          {value: 4},
          {value: 5},
          {value: 6},
          {value: 7},
          {value: 8},
          {value: 9},
          {value: 10, legend: 'Rage'},
        ]
      }
    };
//go to homepage
    $scope.initializeFeed = function(){
      $scope.filterRequest = {};
      $scope.filterRequest.filters = $scope.userFilters;
      $scope.filterRequest.energyLevelMax= $scope.energySlider.maxValue;
      $scope.filterRequest.energyLevelMin = $scope.energySlider.minValue;
      window.localStorage.setItem("filterRequest", JSON.stringify($scope.filterRequest));
      supersonic.ui.initialView.dismiss();
    }

    $scope.testEvents =
      {
          "records": [
            {
                "id": "rec0VNNyRnVZADEDt",
                "fields": {
                    "UniqueID": 42,
                    "name": "GES Meeting: Election 2016",
                    "image": [
                      {
                          "id": "att2Nz7p7zYGIwNed",
                          "url": "https://dl.airtable.com/RLGQRyvPSNOiaw6wRdgB_tb5.jpg",
                          "filename": "tb5.jpg",
                          "size": 15723,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/sIUCfkD5THO04BeQxvx1_small_tb5.jpg",
                                  "width": 92,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/6aw6OFJ0T3isUkQnqP1b_large_tb5.jpg",
                                  "width": 512,
                                  "height": 219
                              }
                          }
                      },
                      {
                          "id": "attVwE6yKlOUtJ1Xe",
                          "url": "https://dl.airtable.com/bDC8OORyRqP5utNnGgac_blob",
                          "filename": "blob",
                          "size": 118190,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/PhqXD7r5ThOa49ntUyLy_small_blob",
                                  "width": 36,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/74Swh1hQYe7kKWFc9pOK_large_blob",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-09T03:00:00.000Z",
                    "desc": "Come join the Global Engagement Summit as we open up our meeting to the rest of campus. We will having an open discussion on the presidential election with a focus on the role of the media and the scandals both candidates have been a part of. Also, because this is GES and we’re *internationally focused,* one of our members Sarah Faruqui is giving a presentation on elections in Hong Kong! ",
                    "energyLevel": 4,
                    "price": ["$0.00"],
                    "eventURL": "https://thegarage.northwestern.edu/event/ges-community-event/",
                    "address": "2311 Campus Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Cultural Infusion", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T03:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0597864",
                    "lng": "-87.6751549",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T03:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-08T01:54:55.000Z"
            },
            {
                "id": "rec2PnrTtHC2TcLV5",
                "fields": {
                    "UniqueID": 17,
                    "name": "Christkindlmarket ",
                    "image": [
                      {
                          "id": "attIG5JJg0J8tO1iy",
                          "url": "https://dl.airtable.com/TnvY2nDyQYvvBbb8AvXZ_1b94c646f99b4d8f9367a0a61f8703b61.jpg",
                          "filename": "1b94c646f99b4d8f9367a0a61f8703b61.jpg",
                          "size": 575661,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/n300PEd0RNydsxAjWbme_small_1b94c646f99b4d8f9367a0a61f8703b61.jpg",
                                  "width": 59,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/43smkiLyQkOdEhAU6s2F_large_1b94c646f99b4d8f9367a0a61f8703b61.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T02:43:00.000Z",
                    "desc": "Each year, people from all over the world visit the Christkindlmarket Chicago. The outdoor market in the Chicago Loop has become so popular and loved by everyone that any Chicagoan will tell you that they could not imagine the city without it. Christkindlmarket Chicago is no longer just a German tradition, it has become a Chicago institution. The unique shopping experience, typical German food and drinks, as well as diverse holiday entertainment make the Christkindlmarket Chicago a preferred and popular destination. Admission is FREE!",
                    "energyLevel": 2,
                    "price": ["$0.00"],
                    "eventURL": "http://www.christkindlmarket.com/",
                    "address": "Daley Plaza (50 W. Washington)",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60602,
                    "activityMood": ["Family Fun", "Cheap Thrills"],
                    "Field 15": "December 1 - 24, 2016 (begins Nov. 18)  Hours Open Daily:  Sunday - Thursday 11am - 8 pm  Friday - Saturday 11 am - 9 pm",
                    "fakeDate": "2016-12-03T02:43:00.000Z",
                    "cost": "0",
                    "lat": "41.8842641",
                    "lng": "-87.6325324",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T23:30:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:09:44.000Z"
            },
            {
                "id": "rec2no6v13uRhLK50",
                "fields": {
                    "UniqueID": 39,
                    "name": "DJ Night Public Skate",
                    "image": [
                      {
                          "id": "att1Rn9ycqktDiANM",
                          "url": "https://dl.airtable.com/YmiGFEJWTnauBa4zWWAP_iStock_000022187803Small.jpg",
                          "filename": "iStock_000022187803Small.jpg",
                          "size": 600956,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/bIpFsFVvQvaFazwJ0qyw_small_iStock_000022187803Small.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/iZPCihlQTp6OZzWzhnDB_large_iStock_000022187803Small.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-09T23:45:00.000Z",
                    "desc": "Robert Crown Center will be holding special DJ night skating sessions on the main rink ",
                    "energyLevel": 4,
                    "price": ["$8.00"],
                    "eventURL": "http://www.cityofevanston.org/events/2016/12/dj-night-public-skate-2/",
                    "address": "1701 Main St.",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60202,
                    "activityMood": ["Mad Skillz", "Thrill Seeker", "Night Owl", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T23:45:00.000Z",
                    "cost": "1",
                    "lat": "42.0347976",
                    "lng": "-87.6982894",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-02T23:45:00.000Z",
                    "TimeEnd": "2016-12-03T01:15:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T04:15:49.000Z"
            },
            {
                "id": "rec3FzvazruYhJGrU",
                "fields": {
                    "UniqueID": 5,
                    "name": "Winter Wonderfest",
                    "image": [
                      {
                          "id": "attBjPDbSsax3vc6B",
                          "url": "https://dl.airtable.com/sgxn00RTTgyutCn4EPr2_winter_wonderland_navy_pier.jpg",
                          "filename": "winter_wonderland_navy_pier.jpg",
                          "size": 6486702,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/tbrZYVF7TTaYUjLomLrX_small_winter_wonderland_navy_pier.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/HGrcBB73RLSh1IWPKOZg_large_winter_wonderland_navy_pier.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T16:00:00.000Z",
                    "desc": "Now in its 16th year, Chicago’s biggest and best indoor winter playground, Fifth Third Bank Winter WonderFest, returns December 2 through January 8! Packed with indoor family fun, this delightful family tradition features 170,000 square feet of rides, giant slides, the Chicago Blackhawks indoor ice skating rink and holiday decor that is sure to get you into the holiday spirit.",
                    "energyLevel": 7,
                    "price": ["$25.00"],
                    "eventURL": "https://navypier.com/winter-wonderfest/",
                    "address": "600 E. GRAND AVENUE",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60611,
                    "activityMood": ["Lone Wolf", "Family Fun", "Cultural Infusion", "Chill Zone"],
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "2",
                    "lat": "41.8916948",
                    "lng": "-87.609196",
                    "EnergyMin": 6,
                    "EnergyMax": 8,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T21:58:07.000Z"
            },
            {
                "id": "rec4A3DeCOHQtI917",
                "fields": {
                    "UniqueID": 35,
                    "name": "M&L Block Museum",
                    "image": [
                      {
                          "id": "attuVjqhpfrqmh1Ge",
                          "url": "https://dl.airtable.com/JpVxp579SfWFeSiQ5che_undefined.png",
                          "filename": "undefined.png",
                          "size": 3383703,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/1zKn5Mf8TQ6XAUgrSMMc_small_undefined.png",
                                  "width": 46,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/tLvxe6caSeS1OLZytKLO_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T15:00:00.000Z",
                    "desc": "The Block is a dynamic, imaginative, and innovative teaching and learning resource for Northwestern and its surrounding communities, featuring a global exhibition program that crosses time periods and cultures and serves as a springboard for thought-provoking discussions relevant to our lives today. The museum also commissions new work by artists to foster connections between artists and the public through the creative process.",
                    "energyLevel": 2,
                    "price": ["$0.00"],
                    "eventURL": "http://www.blockmuseum.northwestern.edu/",
                    "address": "40 Arts Circle Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60208,
                    "activityMood": ["Cultural Infusion", "Date Night", "Chill Zone", "Cheap Thrills"],
                    "Field 15": "open daily 10AM-5PM",
                    "fakeDate": "2016-12-02T15:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0523736",
                    "lng": "-87.6748991",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T15:00:00.000Z",
                    "TimeEnd": "2016-12-03T01:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T03:55:11.000Z"
            },
            {
                "id": "rec74NPLJFaTcAQ3Q",
                "fields": {
                    "UniqueID": 14,
                    "name": "BrewLights",
                    "image": [
                      {
                          "id": "attzawC8LdvPtCI3R",
                          "url": "https://dl.airtable.com/od4X4e56Riu2GujW3VyG_undefined.png",
                          "filename": "undefined.png",
                          "size": 3338366,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/jifgqWUbR6eSPIBZNBmm_small_undefined.png",
                                  "width": 48,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/3pzn7MQFQ4OFFbR9N4Lw_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-08T23:30:00.000Z",
                    "desc": "Join us at the Lincoln Park Zoo for a savory selection of holiday cheer for the second annual BrewLights Presented By Louis Glunz Beer. This beer-tasting event takes place during ZooLights —one of Chicago’s most loved holiday traditions. Guests can enjoy a dozen different draft beer samples, from stouts to pale ales, even as they enjoy the brilliance of 2 million holiday lights.",
                    "energyLevel": 4,
                    "price": ["$40.00"],
                    "eventURL": "http://www.lpzoo.org/events/brewlights-presented-louis-glunz-beer",
                    "address": "2001 North Clark Street",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60614,
                    "activityMood": ["Date Night", "Bottoms Up"],
                    "fakeDate": "2016-12-02T23:30:00.000Z",
                    "cost": "2",
                    "lat": "41.9187937",
                    "lng": "-87.6376537",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-02T23:30:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T00:40:53.000Z"
            },
            {
                "id": "rec7SSmITccVV5O1j",
                "fields": {
                    "UniqueID": 51,
                    "name": "Broadway - Finding Neverland",
                    "image": [
                      {
                          "id": "att4hGtmzs3ixVbWa",
                          "url": "https://dl.airtable.com/ZIlbw1YQGiUK0ghQz24F_blob",
                          "filename": "blob",
                          "size": 325772,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/Jf9pSLT5TKK2Vn8C9DKu_small_blob",
                                  "width": 50,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/TaUu56fmSGC0FySIuB3B_large_blob",
                                  "width": 512,
                                  "height": 428
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "After thrilling audiences on Broadway, the magical Finding Neverland heads out across the country on a national tour. Based on the Oscar-winning movie starring Johnny Depp, Finding Neverland tells the story of author J.M.Barrie and the family who inspired his greatest work - Peter Pan! ",
                    "energyLevel": 3,
                    "price": ["$85.00"],
                    "eventURL": "https://www.chicago-theater.com/theaters/cadillac-palace-theater/finding-neverland.php",
                    "address": "151 W RANDOLPH ST,",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60602,
                    "activityMood": ["Date Night", "Family Fun", "Cultural Infusion"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "3",
                    "lat": "41.8843395",
                    "lng": "-87.6350448",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T23:00:00.000Z",
                    "TimeEnd": "2016-12-03T01:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T01:41:20.000Z"
            },
            {
                "id": "rec9Gnc6Ru0GsRiRV",
                "fields": {
                    "UniqueID": 3,
                    "name": "Lycee French Market ",
                    "image": [
                      {
                          "id": "attbYWbo3RgVXlp0O",
                          "url": "https://dl.airtable.com/XDMLGrYFTwWr5AMnyk4g_file.png",
                          "filename": "file.png",
                          "size": 506115,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/mm69euT1Qbz10w3a9cjS_small_file.png",
                                  "width": 52,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/sFUxc5FaTqmLCsoWN20y_large_file.png",
                                  "width": 512,
                                  "height": 419
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T16:00:00.000Z",
                    "desc": "70 local and French artisans will sell fine and decorative arts, home décor, jewelry, apparel, accessories, gourmet food and more.Event opens Saturday at 10am.  Fun experiences available for all age groups. ",
                    "energyLevel": 3,
                    "price": ["$25.00"],
                    "eventURL": "https://www.eventbrite.com/e/2016-lycee-french-market-tickets-29022516127",
                    "address": "1929 West Wilson Avenue",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60640,
                    "activityMood": ["Date Night", "Lone Wolf", "Family Fun", "Cultural Infusion"],
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "2",
                    "lat": "41.9651243",
                    "lng": "-87.67946",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-05T21:23:42.000Z"
            },
            {
                "id": "rec9qQDArPDFg81Cv",
                "fields": {
                    "UniqueID": 26,
                    "name": "New Year's Eve Fireworks ",
                    "image": [
                      {
                          "id": "attCRidZT61AWUjXo",
                          "url": "https://dl.airtable.com/4t0U7F4Tp2sI94fFbr5o_new-years-hero.jpg",
                          "filename": "new-years-hero.jpg",
                          "size": 271584,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/yTRQRWURC6eGeviFsXuA_small_new-years-hero.jpg",
                                  "width": 72,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/3Nv8q2wSkOloyPVsZQtA_large_new-years-hero.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2017-01-01T05:59:00.000Z",
                    "desc": "Celebrate New Year’s Eve at Navy Pier! From Chicago’s only lakefront midnight fireworks show to the biggest and best parties in the city in the historic Aon Grand Ballroom and Crystal Gardens as well as dining cruises featuring entertainment and champagne toasts, you want to ring in the New Year at Navy Pier!",
                    "energyLevel": 3,
                    "eventURL": "https://navypier.com/new-years-eve/",
                    "address": "600 E Grand Ave",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60611,
                    "activityMood": ["Date Night", "Night Owl", "Family Fun"],
                    "Field 15": "The Navy Pier fireworks display on New Year’s Eve will take place at approximately 12:00 am.",
                    "fakeDate": "2016-12-03T05:59:00.000Z",
                    "cost": "4",
                    "lat": "41.8916948",
                    "lng": "-87.609196",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T05:00:00.000Z",
                    "TimeEnd": "2016-12-03T06:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:17:29.000Z"
            },
            {
                "id": "recAAMAkWW7MahNbe",
                "fields": {
                    "UniqueID": 43,
                    "name": "Startup 2.0",
                    "image": [
                      {
                          "id": "atthD7QDL4rvAte2W",
                          "url": "https://dl.airtable.com/0EHVZUtKTyarhxfq5n9y_thegarage.jpg",
                          "filename": "thegarage.jpg",
                          "size": 42497,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/nFCOyJ6nQnaCfFXbhsej_small_thegarage.jpg",
                                  "width": 36,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/DAvTu58WTp69wfIuweO9_large_thegarage.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-05T23:00:00.000Z",
                    "desc": "A primer on startups addressing company formation, funding, creating an elevator pitch and pitch deck and how VCs assess opportunities and develop investment memos. Presented by Osage Partners, a venture capital fund that invests exclusively in startups that are commercializing university research.",
                    "energyLevel": 3,
                    "price": ["$0.00"],
                    "eventURL": "https://thegarage.northwestern.edu/event/startup-2-0/",
                    "address": "2311 Campus Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Mad Skillz", "Cultural Infusion", "Lone Wolf", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T23:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0597864",
                    "lng": "-87.6751549",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T23:00:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-08T02:13:21.000Z"
            },
            {
                "id": "recAukUaYOn7r17RB",
                "fields": {
                    "UniqueID": 44,
                    "name": "Shark Tank's: Mark Doyle",
                    "image": [
                      {
                          "id": "attBTS7na0K8rcY5R",
                          "url": "https://dl.airtable.com/y1LYqGyQhiJuvYkJfoUB_Screen-Shot-2015-09-10-at-5.27.22-PM.png",
                          "filename": "Screen-Shot-2015-09-10-at-5.27.22-PM.png",
                          "size": 108124,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/WV90pkQ3ie4Ht7YhALbw_small_Screen-Shot-2015-09-10-at-5.27.22-PM.png",
                                  "width": 75,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/5P94hSyQI2ENUdsYPDth_large_Screen-Shot-2015-09-10-at-5.27.22-PM.png",
                                  "width": 512,
                                  "height": 263
                              }
                          }
                      },
                      {
                          "id": "attwbyeFfXtcmhulp",
                          "url": "https://dl.airtable.com/bmzHMv7eSfyCa0YglaLJ_blob",
                          "filename": "blob",
                          "size": 563587,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/vorwZ7rLScCq8gfy7wqU_small_blob",
                                  "width": 57,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/OvZcbdKhTEKh0Cud19ZH_large_blob",
                                  "width": 512,
                                  "height": 496
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-06T01:00:00.000Z",
                    "desc": "Mike Doyle, CEO of Rent Like a Champion and alumni of ABC’s Shark Tank will be appearing on a guest panel to discuss his experiences on the show. Rent Like a Champion secured a deal with renowned investors Mark Cuban and Chris Sacca as a result of their appearance on the show. The panel will talk through some accounting topics related to their journey, as well as the Shark Tank experience and what it has meant for their business.",
                    "energyLevel": 3,
                    "price": ["$0.00"],
                    "eventURL": "https://thegarage.northwestern.edu/event/shark-tank-alumni-mark-doyle-rent-like-champion/",
                    "address": "2311 Campus Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Mad Skillz", "Cultural Infusion", "Lone Wolf", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0597864",
                    "lng": "-87.6751549",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T02:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-08T02:23:31.000Z"
            },
            {
                "id": "recB5N4nTL2zEyAEP",
                "fields": {
                    "UniqueID": 10,
                    "name": "Jingle Paws",
                    "image": [
                      {
                          "id": "att6uqCZzV9aGrDBX",
                          "url": "https://dl.airtable.com/Hxn5C8ORQx6IwtY94tVz_Jingle_Paws_Chicago_2016.jpg",
                          "filename": "Jingle_Paws_Chicago_2016.jpg",
                          "size": 283474,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/Xk6sDCU0RPqdRpimSjAW_small_Jingle_Paws_Chicago_2016.jpg",
                                  "width": 36,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/99AEPyZ0TWGg95Ptx0HK_large_Jingle_Paws_Chicago_2016.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      },
                      {
                          "id": "attkV07d01V1jScfG",
                          "url": "https://dl.airtable.com/G9FmZwpGRoaAf1Hj9ayR_undefined.png",
                          "filename": "undefined.png",
                          "size": 2171245,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/OicggysASvmKXpDljUXJ_small_undefined.png",
                                  "width": 43,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/8oBZSLbmQ227sWemrVYw_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-05T20:00:00.000Z",
                    "desc": "Dress your pup for a great dog event! Snowy activities include a treat hunt, agility course, photos with Santa, free play area and a costume contest. All Ages,",
                    "energyLevel": 4,
                    "price": ["$5.00"],
                    "eventURL": "http://www.parkfun.com/programs/special-events/2015/09/14/jingle-paws",
                    "address": "220 E. Weathersfield Way",
                    "city": "Schaumburg",
                    "state": "Illinois",
                    "zip": 60159,
                    "activityMood": ["Family Fun", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T18:00:00.000Z",
                    "cost": "1",
                    "lat": "42.0169553",
                    "lng": "-88.0761861",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-02T18:00:00.000Z",
                    "TimeEnd": "2016-12-02T20:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:09:56.000Z"
            },
            {
                "id": "recBCgwjI96OirlBV",
                "fields": {
                    "UniqueID": 12,
                    "name": "The Glory Of Christmas",
                    "image": [
                      {
                          "id": "attBYPMVVZThLI46G",
                          "url": "https://dl.airtable.com/T5GDNlU9TanBBRYZG6DX_undefined.png",
                          "filename": "undefined.png",
                          "size": 4262395,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/X8OUrTfQNKtBLLOKbtOZ_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/GWxXn0m1SSa6wdnQmw7k_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-04T21:00:00.000Z",
                    "desc": "Northbrook Symphony Orchestra. Featuring the first-ever concert performance of the Christmas Piano Concertos of George Greeley (1959) with John Goodwin, guest pianist. Also, featuring 'The Festive Sounds of Hanukah' and other Holiday Favorites.",
                    "energyLevel": 2,
                    "price": ["$35.00"],
                    "eventURL": "http://northbrooksymphony.org/event/glory-of-christmas-1st-performance/",
                    "address": "1985 Waukegan Road",
                    "city": "Techny",
                    "state": "Illinois",
                    "zip": 60082,
                    "activityMood": ["Cultural Infusion", "Date Night", "Family Fun", "Chill Zone"],
                    "fakeDate": "2016-12-02T21:00:00.000Z",
                    "cost": "2",
                    "lat": "42.1195926",
                    "lng": "-87.8091357",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T21:00:00.000Z",
                    "TimeEnd": "2016-12-02T11:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:43:20.000Z"
            },
            {
                "id": "recBH7mpUBXNSQE1z",
                "fields": {
                    "UniqueID": 30,
                    "name": "Dennis Leise Release",
                    "image": [
                      {
                          "id": "attr5zFwzxvoc1kDE",
                          "url": "https://dl.airtable.com/sMdhwbTSPaiBel3loJ7r_14595803_1866886950194179_5583121027250124535_n.jpg",
                          "filename": "14595803_1866886950194179_5583121027250124535_n.jpg",
                          "size": 68357,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/mJeokZttRAWKI17ed2WY_small_14595803_1866886950194179_5583121027250124535_n.jpg",
                                  "width": 45,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/Jaeg0i8Ss2Q66Oyqe6Do_large_14595803_1866886950194179_5583121027250124535_n.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-11T01:00:00.000Z",
                    "desc": "Dennis is pleased to debut his upcoming CD \"Once in a Black Moon\" at the establishment that first permitted his solo music career (Which he then took up residence for 3+ years for---feed him, pay him, good luck getting rid of him.), Honky Tonk BBQ.\n\nHe will be joined by friends/colleagues Brian Wilkie (Guitar) and JJ Piet (Upright Bass) to form a band Dennis is calling \"Tiny Horse\" to the other two musicians' unawares.\n\nCome join in the fun, the food and the music.\n\nFriends in music Lonesome Stil follows at 10PM.",
                    "energyLevel": 3,
                    "eventURL": "https://www.facebook.com/events/160347701095022/",
                    "address": "Honkey Tonk BBQ: 1800 S Racine Ave ",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60608,
                    "activityMood": ["Cultural Infusion", "Cheap Thrills"],
                    "Field 15": "7-930",
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "1",
                    "lat": "41.857778",
                    "lng": "-87.656753",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T03:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:29:38.000Z"
            },
            {
                "id": "recCmn0Moo1D29YiX",
                "fields": {
                    "UniqueID": 58,
                    "name": "Out Of this World",
                    "image": [
                      {
                          "id": "attRf1kO5EiKGVIfv",
                          "url": "https://dl.airtable.com/UyHawp8USG2GqjqjXJfG_undefined.png",
                          "filename": "undefined.png",
                          "size": 3081199,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/0p2u4krHQE6FHZZUnpJK_small_undefined.png",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/jJ4T5qkTMOzx0QS5bNqg_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-11T01:00:00.000Z",
                    "desc": "Circus presented by Ringling Brothers & Barnum & Bailey",
                    "energyLevel": 3,
                    "eventURL": "http://www.ticketmaster.com/Ringling-Bros-and-Barnum-Bailey-tickets/artist/2235332",
                    "address": "6920 Manheim Road",
                    "city": "Rosemont",
                    "state": "Illinois",
                    "zip": 60018,
                    "activityMood": ["Family Fun", "Thrill Seeker"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "2",
                    "lat": "42.0053209",
                    "lng": "-87.8899828",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T03:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T00:58:30.000Z"
            },
            {
                "id": "recCynmoamd6zBI1Z",
                "fields": {
                    "UniqueID": 48,
                    "name": "1-night Painting",
                    "image": [
                      {
                          "id": "attLObUnQEtsrWNxQ",
                          "url": "https://dl.airtable.com/IBgniTPQ3CemkMjTRUVW_paintnite_holiday_wishes.jpg",
                          "filename": "paintnite_holiday_wishes.jpg",
                          "size": 177057,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/r4lPChw7Rfa3B7PQesNG_small_paintnite_holiday_wishes.jpg",
                                  "width": 29,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/ylQq7I2tTKuB2zlF6SNY_large_paintnite_holiday_wishes.jpg",
                                  "width": 399,
                                  "height": 500
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "A different night out.  Come learn to paint with guided instruction and have a blast doing it.",
                    "energyLevel": 4,
                    "eventURL": "https://www.paintnite.com/events/1115940.html",
                    "address": "1645 W Jackson Blvd",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60612,
                    "activityMood": ["Date Night", "Mad Skillz", "Cultural Infusion", "Chill Zone"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "2",
                    "lat": "41.8773766",
                    "lng": "-87.703072",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T01:13:42.000Z"
            },
            {
                "id": "recDBaknMP9I4vK3M",
                "fields": {
                    "UniqueID": 6,
                    "name": "Charlie Brown Christmas",
                    "image": [
                      {
                          "id": "attb1VGyGQmOAHXG3",
                          "url": "https://dl.airtable.com/J78IVpf9RyGZOelu6KwM_charlie_brown_christmas_broadway.jpg",
                          "filename": "charlie_brown_christmas_broadway.jpg",
                          "size": 377657,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/IpZ2AZd2Sd2zXAp6o5xw_small_charlie_brown_christmas_broadway.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/4VKeRzvPQaGWin5N0xqj_large_charlie_brown_christmas_broadway.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T16:00:00.000Z",
                    "desc": "Kick off your family’s yuletide celebrations by joining us for a very special opening day benefit performance of last year’s critically-acclaimed, SOLD-OUT holiday hit! All proceeds from this event support Emerald City Theatre’s signature outreach program, One Fund, with brings a free play and companion book to low-income Chicago Public Schools students. - See more at: http://www.broadwayinchicago.com/show/charlie-brown-christmas-2016/#sthash.qRhIHOAL.dpuf",
                    "energyLevel": 2,
                    "price": ["$80.00"],
                    "eventURL": "http://www.broadwayinchicago.com/show/charlie-brown-christmas-2016/",
                    "address": "175 E. Chestnut St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60611,
                    "activityMood": ["Family Fun", "Cultural Infusion"],
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "3",
                    "lat": "41.898025",
                    "lng": "-87.6251047",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-02T18:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:02:40.000Z"
            },
            {
                "id": "recDXQV8szanNQBVY",
                "fields": {
                    "UniqueID": 55,
                    "name": "Handel’s Messiah",
                    "image": [
                      {
                          "id": "attDc5HvESBEltg8y",
                          "url": "https://dl.airtable.com/k8pxzs9YT4qE4VWMHUcv_nwconcert.jpg",
                          "filename": "nwconcert.jpg",
                          "size": 149435,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/aAiYuwRECiwP7HODJOtw_small_nwconcert.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/Hx4SxIohRGSuxb78jF3m_large_nwconcert.jpg",
                                  "width": 400,
                                  "height": 267
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:30:00.000Z",
                    "desc": "The Callipygian Players, Chicago’s premier baroque music ensemble—featuring violinist Martin Davids and cellist–violist da gamba Craig Trompeter—join the Bienen Contemporary/Early Vocal Ensemble in two memorable weekend performances of Handel’s iconic and beloved oratorio.  ",
                    "energyLevel": 4,
                    "price": ["$15.00"],
                    "eventURL": "http://concertsatbienen.org/content/bienen-contemporaryearly-vocal-ensemble-and-callipygian-players-handel%E2%80%99s-messiah-0",
                    "address": "711 Elgin Rd ",
                    "city": "Evanston ",
                    "state": "Illinois",
                    "zip": 60208,
                    "activityMood": ["Date Night", "Cultural Infusion", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:30:00.000Z",
                    "cost": "1",
                    "lat": "42.0505661",
                    "lng": "-87.6827749",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T01:30:00.000Z",
                    "TimeEnd": "2016-12-03T02:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T02:52:56.000Z"
            },
            {
                "id": "recDYiBESZUB2kTw4",
                "fields": {
                    "UniqueID": 47,
                    "name": "Bulls vs. Cavaliers",
                    "image": [
                      {
                          "id": "attSiWvRE4wp3fCrA",
                          "url": "https://dl.airtable.com/a30fixLNSNuSJkNsHkpa_chicago_bulls.jpg",
                          "filename": "chicago_bulls.jpg",
                          "size": 24875,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/zYl6W8kDSOiNoYjLw5Nc_small_chicago_bulls.jpg",
                                  "width": 36,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/pIN552VsQ3KxGYqTu06D_large_chicago_bulls.jpg",
                                  "width": 400,
                                  "height": 400
                              }
                          }
                      },
                      {
                          "id": "attVvOGanAcgAutTL",
                          "url": "https://dl.airtable.com/rqpTZ2DoSK5oUIdsM0WC_undefined.png",
                          "filename": "undefined.png",
                          "size": 2059159,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/9gohiPXQWv1f7uQr7RgX_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/zCiwroQuQgeTrJlfsHMJ_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "Dwane Wade and the Chicago Bulls host defending champion Lebron James and the Cavaliers",
                    "energyLevel": 4,
                    "price": ["$120.00"],
                    "eventURL": "http://www1.ticketmaster.com/chicago-bulls-vs-cleveland-cavaliers-chicago-illinois-12-02-2016/event/04005111B0F01215?brand=bulls&extcmp=gw502926&wt.mc_id=NBA_TEAM_SCHED_PG_PRI_CHI&camefrom=NBABULLS&fg=sim&f_display_landing_popup=true&f_resale_print_on_offercard=true&f_sessioncam=1&ab=m_efeat3888v1desktop",
                    "address": "1901 W Madison St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60612,
                    "activityMood": ["Family Fun", "Mad Skillz", "Bottoms Up"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "4",
                    "lat": "41.8806508",
                    "lng": "-87.6763415",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T01:12:49.000Z"
            },
            {
                "id": "recDtS3tK8ZKW0oUU",
                "fields": {
                    "UniqueID": 46,
                    "name": "Live Theatre: War Horse",
                    "image": [
                      {
                          "id": "attiog0tkgWogfbuY",
                          "url": "https://dl.airtable.com/ug1LP8n2RHOJTCkQICXp_undefined.png",
                          "filename": "undefined.png",
                          "size": 4436599,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/9Y24fsHhQjClcgm0aSMz_small_undefined.png",
                                  "width": 52,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/nKYaG4dTBTr15mCyDdwA_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-08T01:00:00.000Z",
                    "desc": "Since its first performance at the National Theatre in 2007, War Horse has become an international smash hit, capturing the imagination of millions of people around the world. Based on Michael Morpurgo’s novel and adapted for the stage by Nick Stafford, War Horse takes audiences on an extraordinary journey from the fields of rural Devon to the trenches of First World War France. Filled with stirring music and songs, this powerfully moving and imaginative drama is a show of phenomenal inventiveness",
                    "energyLevel": 2,
                    "price": ["$25.00"],
                    "eventURL": "https://www.communication.northwestern.edu/wirtz/performances/stage_on_screen",
                    "address": "30 Arts Circle Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Cultural Infusion", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "1",
                    "lat": "42.0527667",
                    "lng": "-87.673995",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T03:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-08T05:52:50.000Z"
            },
            {
                "id": "recEaqaWUDeG0Jb0F",
                "fields": {
                    "UniqueID": 54,
                    "name": "Dearborn Observatory",
                    "image": [
                      {
                          "id": "attAYJIMmzZmIQYH1",
                          "url": "https://dl.airtable.com/d9ii5xIXS7Mud0kizsRb_observatory.jpg",
                          "filename": "observatory.jpg",
                          "size": 87598,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/TU36taKTyuzH7tu1Vws8_small_observatory.jpg",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/p4tYTq3TuGeRZ2EWMgiw_large_observatory.jpg",
                                  "width": 512,
                                  "height": 422
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "Northwestern University's Dearborn Observatory opens up to the public every Friday night, allowing visitors to gaze at the stars through the facility's vintage refracting telescope. The observatory takes reservations from 8–9pm, but walk-ins are welcome between 9–10pm.",
                    "energyLevel": 3,
                    "price": ["$0.00"],
                    "eventURL": "http://www.physics.northwestern.edu/about/dearborn-observatory/",
                    "address": "2145 Sheridan Rd ",
                    "city": "Evanston ",
                    "state": "Illinois",
                    "zip": 60208,
                    "activityMood": ["Family Fun", "Date Night", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "0",
                    "lat": "42.057478",
                    "lng": "-87.6780385",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T03:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T02:23:51.000Z"
            },
            {
                "id": "recF42wKRDWlEHMbr",
                "fields": {
                    "UniqueID": 13,
                    "name": "Bears vs. 49ers ",
                    "image": [
                      {
                          "id": "attkhU4dUBrmd2jX0",
                          "url": "https://dl.airtable.com/Ju29xtuRL6OUm8CJqsrp_undefined.png",
                          "filename": "undefined.png",
                          "size": 10495447,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/r47erJWcQJGTxRfEGs0q_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/0yjdjhIuR0mn63RpS9Sk_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-04T22:00:00.000Z",
                    "desc": "Watch the NFL Chicago Bears play a game at Soldier Field against the San Francisco 49ers ",
                    "energyLevel": 5,
                    "price": ["$120.00"],
                    "eventURL": "http://www.chicagobears.com/gameday/coming-to-the-game/game-8.html",
                    "address": "1410 Museum Campus Dr",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60605,
                    "activityMood": ["Thrill Seeker", "Bottoms Up", "Date Night"],
                    "fakeDate": "2016-12-02T18:00:00.000Z",
                    "cost": "4",
                    "lat": "41.8622686",
                    "lng": "-87.6188269",
                    "EnergyMin": 4,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T18:00:00.000Z",
                    "TimeEnd": "2016-12-02T18:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T00:20:50.000Z"
            },
            {
                "id": "recGRPxnw62KjMPCa",
                "fields": {
                    "UniqueID": 4,
                    "name": "Santa Hustle Chicago",
                    "image": [
                      {
                          "id": "attFea1fT9XkSKBTg",
                          "url": "https://dl.airtable.com/VaG6LmqORRCQVJ4ZDmRv_file.png",
                          "filename": "file.png",
                          "size": 1986493,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/WEzBt16JReOcaqNxlJyp_small_file.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/vydgHB8uRUCJ6EUnvZOa_large_file.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T15:00:00.000Z",
                    "desc": "Santa Claus is comin’, and is running to your town! Join us and many of your Santa friends at the Santa Hustle Chicago 5k on Saturday, December 3, 2016. See Chicago unlike ever before as thousands of Santas race along the streets and paths of the lakefront. ",
                    "energyLevel": 9,
                    "price": ["$55.00"],
                    "eventURL": "http://www.santahustle.com/chicago/",
                    "address": "345 N Eric Dr ",
                    "city": "Palatine ",
                    "state": "Illinois",
                    "zip": 60067,
                    "activityMood": ["Date Night", "Bottoms Up", "Night Owl", "Thrill Seeker"],
                    "fakeDate": "2016-12-02T15:00:00.000Z",
                    "cost": "3",
                    "lat": "42.117258",
                    "lng": "-88.0531806",
                    "EnergyMin": 8,
                    "EnergyMax": 10,
                    "TimeStart": "2016-12-02T15:00:00.000Z",
                    "TimeEnd": "2016-12-02T16:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T21:41:13.000Z"
            },
            {
                "id": "recGuDINI0fDqZFjW",
                "fields": {
                    "UniqueID": 23,
                    "name": "Hip Hop Nutcracker",
                    "image": [
                      {
                          "id": "att7CeJnRl87uzIg6",
                          "url": "https://dl.airtable.com/lMhk8S3xQr6udpbrIf0w_undefined.png",
                          "filename": "undefined.png",
                          "size": 1799117,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/rjNDijTTRtGyJqHoxQMJ_small_undefined.png",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/JCUbuU8PTm6Fk7Ni9rDT_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-10T01:30:00.000Z",
                    "desc": "A holiday mash-up for the whole family, The Hip Hop Nutcracker re-imagines Tchaikovsky’s classic score through explosive hip hop choreography. A dozen all-star dancers,  on-stage DJ and an electric violinist bring the traditional Nutcracker story to life in contemporary New York City.  This evening-length show celebrates love, community and the magic of the holiday season.  Parking is available close to all entrances of the Rosemont Theatre. Parking fee ranges from $15-$20 (Cash Only).\nBuses and limos are extra. Parking is open two hours prior to event. No tailgating is permitted.",
                    "energyLevel": 2,
                    "eventURL": "http://www.rosemont.com/theatre/events/hip-hop-nutcracker/",
                    "address": "5400 N. River Road",
                    "city": "Rosemont",
                    "state": "Illinois",
                    "zip": 60018,
                    "activityMood": ["Date Night", "Cultural Infusion", "Night Owl"],
                    "fakeDate": "2016-12-03T01:30:00.000Z",
                    "cost": "2",
                    "lat": "41.9762399",
                    "lng": "-87.8665112",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-03T01:30:00.000Z",
                    "TimeEnd": "2016-12-03T04:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:16:48.000Z"
            },
            {
                "id": "recIGC0twoTsNUDBy",
                "fields": {
                    "UniqueID": 16,
                    "name": "Critical Mass",
                    "image": [
                      {
                          "id": "attB2GdkfK5NUbPF0",
                          "url": "https://dl.airtable.com/Hur53earTFChgXgaTze5_undefined.png",
                          "filename": "undefined.png",
                          "size": 1076417,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/eKoSB0YwToePEVArUNG1_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/Pdxn3Du3TP2CDNxnIRwn_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-30T23:30:00.000Z",
                    "desc": "Critical Mass is a very large group bike event, gathering in Chicago the last Friday of every month for more than a decade. Leaves Daley Plaza downtown around 6pm. Radically inclusive of riders (and skaters, etc) of all skills, ages and agenda. Educates that \"we are traffic\" and equally entitled to the roads for which we pay.",
                    "energyLevel": 10,
                    "price": ["$0.00"],
                    "eventURL": "https://www.facebook.com/events/1782639011989616/",
                    "address": "Daley Plaza (50 W. Washington)",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60602,
                    "activityMood": ["Thrill Seeker", "Mad Skillz", "Cheap Thrills"],
                    "Field 15": "Occurs the last friday of every month",
                    "fakeDate": "2016-12-02T23:30:00.000Z",
                    "cost": "0",
                    "lat": "41.8842641",
                    "lng": "-87.6325324",
                    "EnergyMin": 8,
                    "EnergyMax": 10,
                    "TimeStart": "2016-12-02T23:30:00.000Z",
                    "TimeEnd": "2016-12-03T02:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:01:17.000Z"
            },
            {
                "id": "recIfLucZxuDovLuA",
                "fields": {
                    "UniqueID": 15,
                    "name": "2nd Fridays Gallery Night ",
                    "image": [
                      {
                          "id": "atthpeHkB48m2B7VF",
                          "url": "https://dl.airtable.com/o4aootnrTCaPG5WxouYI_PSCOTTSELFIE%20WR.jpg",
                          "filename": "PSCOTTSELFIE WR.jpg",
                          "size": 104571,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/D2SnpXNTHW0hUJshTvnp_small_PSCOTTSELFIE%20WR.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/ufIWVGFT924CXMUFfv2A_large_PSCOTTSELFIE%20WR.jpg",
                                  "width": 512,
                                  "height": 374
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-10T01:02:00.000Z",
                    "desc": "The Chicago Arts District hosts 2nd Fridays Gallery Night, the monthly opening receptions at the galleries and artists' studios centered around South Halsted Street, beginning at 1711 and ending at 2005 South Halsted Street in Chicago. The event begins at 6:00pm and runs til 10:00pm.\n\nCome visit the creative spaces in the Chicago Arts District at South Halsted Street as they showcase an exciting display of art and artists from Chicago and beyond. This unique art community opens its doors, free of charge, and lets you get up close and personal with the art and artists. \n\nPick up a map at the information center at 2003 S. Halsted and explore the city's most vibrant art community, the Chicago Arts District, where people meet ART!",
                    "energyLevel": 5,
                    "price": ["$0.00"],
                    "eventURL": "http://chicagoartsdistrict.org/events_main.asp",
                    "address": "Chicago Arts District Chicago Arts District on South Halsted Street",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60608,
                    "activityMood": ["Cultural Infusion", "Lone Wolf", "Date Night", "Cheap Thrills"],
                    "Field 15": "(occurs second Friday of Every month 6pm-10pm ",
                    "fakeDate": "2016-12-03T01:02:00.000Z",
                    "cost": "0",
                    "lat": "41.8555324",
                    "lng": "-87.646795",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-03T00:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T00:50:54.000Z"
            },
            {
                "id": "recJk9AJRSdvWgUHZ",
                "fields": {
                    "UniqueID": 62,
                    "name": "Comedy Sportz",
                    "image": [
                      {
                          "id": "attgdGugxA9mU6UzI",
                          "url": "https://dl.airtable.com/HZKnHw5VQ6ieRhmqKn9e_download.png",
                          "filename": "download.png",
                          "size": 40351,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/UEfKQxE7QQqXvmAa7SFe_small_download.png",
                                  "width": 98,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/SKHs4PkdQaCvQsHBNnI5_large_download.png",
                                  "width": 512,
                                  "height": 238
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T02:00:00.000Z",
                    "desc": "ComedySportz's interactive format is emceed by a referee overseeing a hilarious battle of wits between the home team, the blue Downtown Chicago Bosses, and the \"visiting\" red team, scored by live keyboard music and rocking popular music between scenes!  Using audience suggestions and willing volunteers, our professional players  create short games, scenes and songs on the spot, and the winner is determined by the Applause-o-Meter and your laughs!",
                    "energyLevel": 4,
                    "eventURL": "http://www.cszchicago.com/",
                    "address": "929 West Belmont",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60657,
                    "activityMood": ["Date Night", "Family Fun"],
                    "fakeDate": "2016-12-03T02:00:00.000Z",
                    "cost": "2",
                    "lat": "41.9396898",
                    "lng": "-87.6548557",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T02:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:17:55.000Z"
            },
            {
                "id": "recKDm8L1Fqq7Atcs",
                "fields": {
                    "UniqueID": 56,
                    "name": "Century 12 Theatre",
                    "image": [
                      {
                          "id": "att9Xj6CQXPRNgnLC",
                          "url": "https://dl.airtable.com/YYlWVw3RUKS1r4DKlOmQ_century%20theatre.jpg",
                          "filename": "century theatre.jpg",
                          "size": 84725,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/atmC4JdQz6cRIpZMcdHh_small_century%20theatre.jpg",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/X9eXdeQCTBGWoSXOsQaf_large_century%20theatre.jpg",
                                  "width": 512,
                                  "height": 422
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "The Cinemark Theater in Evanston may look like your average multiplex, but due to its proximity to Northwestern University, it attracts an impressive lineup of art films and limited releases. Whether you want to see the latest blockbuster or see something a bit more highbrow, Century 12 is your gateway to the world of cinema in Evanston.",
                    "energyLevel": 3,
                    "price": ["$8.00"],
                    "eventURL": "https://www.cinemark.com/theatre-439",
                    "address": "1715 Maple Ave ",
                    "city": "Evanston ",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Date Night", "Family Fun", "Lone Wolf", "Cultural Infusion"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "1",
                    "lat": "42.0490241",
                    "lng": "-87.6865706",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T15:45:00.000Z",
                    "TimeEnd": "2016-12-03T03:25:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T03:00:44.000Z"
            },
            {
                "id": "recN4cZ0DZJeUI6Qp",
                "fields": {
                    "UniqueID": 60,
                    "name": "SEEDCON",
                    "image": [
                      {
                          "id": "attd9Q0hZqym6bQSY",
                          "url": "https://dl.airtable.com/AHbx6UvwTjKVXwN4Febi_blob",
                          "filename": "blob",
                          "size": 39345,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/N6otoCgYSXeET0cTGnGV_small_blob",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/GNuFDYJjR2ByvOVd33Ul_large_blob",
                                  "width": 512,
                                  "height": 400
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T16:30:00.000Z",
                    "desc": "Join the EVC group and the Polsky Center at the 17th annual SeedCon, Chicago Booth's annual entrepreneurship and venture capital conference. Through keynotes, workshops, panels, and networking, the conference provides exciting opportunities for entrepreneurs, investors, and those passionate about start-ups to network and build businesses together.",
                    "energyLevel": 5,
                    "eventURL": "https://www.chicagobooth.edu/alumni/events/showEvent?eventId=12570",
                    "address": "610 South Michigan Ave",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60605,
                    "activityMood": ["Mad Skillz"],
                    "fakeDate": "2016-12-02T16:30:00.000Z",
                    "cost": "2",
                    "lat": "41.8740206",
                    "lng": "-87.6269807",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-02T16:30:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:11:52.000Z"
            },
            {
                "id": "recNRfVIUkwsyU6AN",
                "fields": {
                    "UniqueID": 52,
                    "name": "Bowling",
                    "image": [
                      {
                          "id": "attzClMBtp0FIJK6T",
                          "url": "https://dl.airtable.com/AJDEWI4qTwKZhjyf1MBw_bowling.jpg",
                          "filename": "bowling.jpg",
                          "size": 102772,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/U4emCHZgT6GjdJhJyhxh_small_bowling.jpg",
                                  "width": 75,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/3iod1ZXiSw6MRmLf9sTw_large_bowling.jpg",
                                  "width": 512,
                                  "height": 354
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "The best place for bowling on the North Shore!  Come and experience our lively and energizing atmosphere, \r\nand find out why this is such a fun place for gatherings for all ages!",
                    "energyLevel": 5,
                    "price": ["$5.00"],
                    "eventURL": "http://www.wilmettebowl.com/",
                    "address": "1903 Schiller Ave",
                    "city": "Wilmette",
                    "state": "Illinois",
                    "zip": 60091,
                    "activityMood": ["Date Night", "Family Fun", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "1",
                    "lat": "42.0776816",
                    "lng": "-87.7251164",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-03T03:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T02:17:37.000Z"
            },
            {
                "id": "recNgeWlEGPZIiGZp",
                "fields": {
                    "UniqueID": 63,
                    "name": "You’re No One ’Til...",
                    "image": [
                      {
                          "id": "att4HPMqN8Z494vBx",
                          "url": "https://dl.airtable.com/0CnXruKNRT3yyxuCFQ5K_images.png",
                          "filename": "images.png",
                          "size": 11106,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/PupEeQ5KpDFM32kbRmgs_small_images.png",
                                  "width": 149,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/Go2h5yBTDONQ38pWY0sD_large_images.png",
                                  "width": 456,
                                  "height": 110
                              }
                          }
                      },
                      {
                          "id": "attOjUJf64DYHueoA",
                          "url": "https://dl.airtable.com/65BmJewfQLaTawGNS2rq_blob",
                          "filename": "blob",
                          "size": 246602,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/VOT2LRJrTVKKuZ5qcHHE_small_blob",
                                  "width": 48,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/HD3Ncp4zQVCDT8YTtkJu_large_blob",
                                  "width": 512,
                                  "height": 398
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T14:00:00.000Z",
                    "desc": "Presented by Karen DeCrow and the Fight for Gender Equality. Here at the 50th anniversary of NOW, join Northwestern University Libraries as we celebrate DeCrow’s accomplishments with an exhibit drawn from her personal papers (which were donated to University Archives upon her death in 2014) and materials from our vast Femina Collections documenting the First and Second Wave liberation movements.",
                    "energyLevel": 1,
                    "eventURL": "http://planitpurple.northwestern.edu/event/502446",
                    "address": "1970 Campus Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Cultural Infusion", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T14:00:00.000Z",
                    "cost": "0",
                    "lat": "42.053532",
                    "lng": "-87.6762547",
                    "EnergyMin": 1,
                    "EnergyMax": 2,
                    "TimeStart": "2016-12-02T14:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:19:54.000Z"
            },
            {
                "id": "recRSX4qebkx3BU8V",
                "fields": {
                    "UniqueID": 49,
                    "name": "Curling - Learn2Curl",
                    "image": [
                      {
                          "id": "attZ0VjnbE0p7Lr0f",
                          "url": "https://dl.airtable.com/BxUZbJHjSBqhKUL05ykI_learn2curl.jpg",
                          "filename": "learn2curl.jpg",
                          "size": 57710,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/igQarbO8SyaJsNk03Yv5_small_learn2curl.jpg",
                                  "width": 27,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/JbrNqrIXQxSoj4BCd0Hg_large_learn2curl.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      },
                      {
                          "id": "attJzmWA90FCilFYk",
                          "url": "https://dl.airtable.com/ZkzOkg0LSpSd7ElfvPie_undefined.png",
                          "filename": "undefined.png",
                          "size": 2229660,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/kXIb2VqhSPOSBfhvBbWs_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/icEaJ7V1SbyekkP9WeXv_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-21T20:30:00.000Z",
                    "desc": "A Learn2Curl event is a great introduction to the sport of curling and the Chicago Curling Club.",
                    "energyLevel": 6,
                    "price": ["$80.00"],
                    "eventURL": "http://www.curlingchicago.org/content.aspx?page_id=87&club_id=196081&item_id=302993",
                    "address": "555 Dundee Road",
                    "city": "Northbrook ",
                    "state": "Illinois",
                    "zip": 60062,
                    "activityMood": ["Family Fun", "Lone Wolf", "Mad Skillz", "Date Night"],
                    "fakeDate": "2016-12-02T20:30:00.000Z",
                    "cost": "3",
                    "lat": "42.137228",
                    "lng": "-87.7949026",
                    "EnergyMin": 5,
                    "EnergyMax": 7,
                    "TimeStart": "2016-12-02T20:30:00.000Z",
                    "TimeEnd": "2016-12-02T23:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T01:17:55.000Z"
            },
            {
                "id": "recUZ8Uc3iDS2piwN",
                "fields": {
                    "UniqueID": 20,
                    "name": "Simpsons in Chicago",
                    "image": [
                      {
                          "id": "attPWf1htHwHWltPc",
                          "url": "https://dl.airtable.com/gvefYhBtQlqgDXMgkeqM_13450737_10154198811566067_7036055502606174042_n.jpg",
                          "filename": "13450737_10154198811566067_7036055502606174042_n.jpg",
                          "size": 99558,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/2uTB5W5RTv6S2olnr2OQ_small_13450737_10154198811566067_7036055502606174042_n.jpg",
                                  "width": 43,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/9sLyGmLYT2DRfA4m6OIw_large_13450737_10154198811566067_7036055502606174042_n.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-10T21:00:00.000Z",
                    "desc": "On December 10th, the Logan Theatre will screen FOUR Christmas themed episodes of \"The Simpsons\" on the big screen! \n\nSimpsons themed drinks will be available and Simpsons trivia (with prizes!) will follow the screening!\n\nYes, there will be Flaming Moe's. Or Flaming Homer's. Depends on who you ask.\n\nAll proceeds from this event will benefit Chicago HOPES for Kids - a 501(c)(3) nonprofit that provides academic support for children living in Chicago's homeless shelters. (www.chicagohopesforkids.org)\n\nA $40 donation will get you a ticket to this event. For the next forty-eight hours, you can purchase an early-bird ticket for a donation of $30. \n\nPurchase tickets through Eventbrite: https://www.eventbrite.com/e/the-simpsons-in-chicago-tickets-26492759557?ref=ecount\n\nMedia, sponsorship opportunities, and general questions should be directed toward rita@chicagohopesforkids.org",
                    "energyLevel": 3,
                    "price": ["$40.00"],
                    "eventURL": "https://www.facebook.com/events/257942951238067/",
                    "address": "The Logan Theatre: 2646 N Milwaukee Ave",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60647,
                    "activityMood": ["Bottoms Up"],
                    "Field 15": "3-6 pm ",
                    "fakeDate": "2016-12-02T21:00:00.000Z",
                    "cost": "2",
                    "lat": "41.929780",
                    "lng": "-87.708933",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T21:00:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:16:05.000Z"
            },
            {
                "id": "recWhSMOPTXbIQrdQ",
                "fields": {
                    "UniqueID": 36,
                    "name": "Locked Chicago",
                    "image": [
                      {
                          "id": "attN6cmUmy1StFB1S",
                          "url": "https://dl.airtable.com/fyd1eSIjQ6CQFZImucRW_cropped-most-popular-escape-room-games.png",
                          "filename": "cropped-most-popular-escape-room-games.png",
                          "size": 68099,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/nPddiEk7R5ah4PhCzmpY_small_cropped-most-popular-escape-room-games.png",
                                  "width": 87,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/11aeXxuqSSq9i1RObn6l_large_cropped-most-popular-escape-room-games.png",
                                  "width": 512,
                                  "height": 351
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T16:00:00.000Z",
                    "desc": "Lock Chicago is an innovative new Escape Room adventure in the Chicago area . For those who aren't familiar, an Escape Room is a space that has been decorated, designed, and decked out with a theme and puzzles that you and a group of friends will have an hour to solve. Traditionally, the end-goal of an Escape Room is to, as the name suggests, Escape the Room by solving the puzzles and unlocking the front door.\n\nHowever, unlike other Escape Rooms, you won't be locked into a room at Lock Chicago--you will be given alternate end-goals for each challenge, so really we're a Challenge Room adventure rather than an Escape Room.",
                    "energyLevel": 5,
                    "price": ["$29.95"],
                    "eventURL": "http://www.lockedchicago.com/",
                    "address": "1601 Sherman Avenue",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Mad Skillz", "Thrill Seeker"],
                    "Field 15": "public or private events",
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "2",
                    "lat": "42.047298",
                    "lng": "-87.6837527",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-02T23:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T03:58:16.000Z"
            },
            {
                "id": "recWpqGUsy7jQxhAn",
                "fields": {
                    "UniqueID": 66,
                    "name": "MPD2 2017 Bash",
                    "image": [
                      {
                          "id": "attgw9ccZR7NbaNa9",
                          "url": "https://dl.airtable.com/GBF6K9yrRFWd3YXTMDvp_MPD%202017.jpg",
                          "filename": "MPD 2017.jpg",
                          "size": 49330,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/bxfTD0uQBG8sTRge6Nuc_small_MPD%202017.jpg",
                                  "width": 60,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/W996M6PiSruMcArn0skD_large_MPD%202017.jpg",
                                  "width": 400,
                                  "height": 240
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T22:00:00.000Z",
                    "desc": "HAPPY HOUR COURTESY OF THE GREEN TEAM!  Please join your classmates at The Cellar to closeout the year for some Liquid Networking.  ",
                    "energyLevel": 10,
                    "eventURL": "http://thecellarevanston.com/",
                    "address": "820 Clark St",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Bottoms Up"],
                    "fakeDate": "2016-12-02T22:00:00.000Z",
                    "cost": "2",
                    "lat": "42.0498078",
                    "lng": "-87.6829285",
                    "EnergyMin": 10,
                    "EnergyMax": 10,
                    "TimeStart": "2016-12-02T22:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z"
                },
                "createdTime": "2016-11-23T01:26:46.000Z"
            },
            {
                "id": "recYzP1iceDGfvYRi",
                "fields": {
                    "UniqueID": 28,
                    "name": "Randolph Street Festival",
                    "image": [
                      {
                          "id": "attfZpC88FAlf9ylo",
                          "url": "https://dl.airtable.com/Pv12ZIY1SsCpejOacIA6_image%20(1).jpg",
                          "filename": "image (1).jpg",
                          "size": 122984,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/IF6uyMMfRpKwnQXuXdtY_small_image%20(1).jpg",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/ANOHJHrJRifhmQneA26n_large_image%20(1).jpg",
                                  "width": 512,
                                  "height": 422
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T02:43:00.000Z",
                    "desc": "This mega fair is an opportunity for serious crafters from around the country to sell their handmade arts and wares, and it's the perfect place to get extra special gifts, or maybe a little something for yourself in the process. \n\n250+ MAKERS AND MORE\nRenegade is a celebration of DIY spirit and for each Fair gathers new and seasoned independent Makers alike.\n\nStay tuned for our Roster line-up!\nParking is limited, so enjoy our free trolley! Pick-up services from Ashland Ave. Orange Line Stop begins at 10:30am. Last pick-up from Bridgeport Art Center at 6:30pm.\n\nNeed a ride? UBER has provided a code for a free $15 ride for all 1st time users for ALL 2016 RCF events! The code isRCF2016 and can be used for all Fairs!",
                    "energyLevel": 2,
                    "price": ["$0.00"],
                    "eventURL": "http://www.renegadecraft.com/chicago",
                    "address": "1200 W 35th St ",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60609,
                    "activityMood": ["Family Fun", "Lone Wolf", "Cultural Infusion", "Cheap Thrills"],
                    "Field 15": "Saturday December 3 2016 - Sunday December 4 2016 8am–12pm",
                    "fakeDate": "2016-12-03T02:43:00.000Z",
                    "cost": "0",
                    "lat": "41.831156",
                    "lng": "-87.656709",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T17:00:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:29:32.000Z"
            },
            {
                "id": "recZY7Xl8TEn2t5RD",
                "fields": {
                    "UniqueID": 53,
                    "name": "WhrilyBall",
                    "image": [
                      {
                          "id": "attGy6UB5sg5vU4kj",
                          "url": "https://dl.airtable.com/i3TspYqGRM2oKcnyskIr_whirlyball.jpg",
                          "filename": "whirlyball.jpg",
                          "size": 1166595,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/eZ39fGhVSZ6uFdAyJfIu_small_whirlyball.jpg",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/gRfz4m6QP67vxjV3PlcQ_large_whirlyball.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "Your competitive energy has a special place here at WhirlyBall. Each location offers the game of WhirlyBall along with something a little different, whether it’s bowling, lasertag, pool tables or foosball. Just bring your skills.",
                    "energyLevel": 7,
                    "price": ["$35.00"],
                    "eventURL": "http://www.whirlyball.com/",
                    "address": "1825 W Webster Ave",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60614,
                    "activityMood": ["Date Night", "Thrill Seeker", "Bottoms Up"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "2",
                    "lat": "41.9212019",
                    "lng": "-87.6759077",
                    "EnergyMin": 6,
                    "EnergyMax": 8,
                    "TimeStart": "2016-12-02T17:00:00.000Z",
                    "TimeEnd": "2016-12-03T08:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T02:17:56.000Z"
            },
            {
                "id": "recb1AsDKJFrAgNKQ",
                "fields": {
                    "UniqueID": 7,
                    "name": "Zoo - Holiday Magic 2016",
                    "image": [
                      {
                          "id": "attrJVkZZo724Oxjj",
                          "url": "https://dl.airtable.com/gJKEgRbR92yNEnVOF1CG_file.png",
                          "filename": "file.png",
                          "size": 2992069,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/UDjDn7oqShmGRc1LBFyr_small_file.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/JP192mkeTYOoo6Bc7A8X_large_file.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T22:11:00.000Z",
                    "desc": "See the Lights. Feel the Magic. Continue the Tradition.",
                    "energyLevel": 5,
                    "price": ["$0.00"],
                    "eventURL": "https://www.czs.org/Brookfield-ZOO/Events/Upcoming-Events/Holiday-Magic",
                    "address": "8400 31st Street ",
                    "city": "Brookefield",
                    "state": "Illinois",
                    "zip": 60513,
                    "activityMood": ["Date Night", "Family Fun", "Chill Zone", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T22:11:00.000Z",
                    "cost": "0",
                    "lat": "41.8353184",
                    "lng": "-87.8343133",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-02T23:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:03:17.000Z"
            },
            {
                "id": "recby6XpLNlpPGf5B",
                "fields": {
                    "UniqueID": 41,
                    "name": "Sushi Workshop",
                    "image": [
                      {
                          "id": "attiA5SRKVMRfa6Rf",
                          "url": "https://dl.airtable.com/CjsKnIUPQzClTPDfzqbc_c700x420.jpg",
                          "filename": "c700x420.jpg",
                          "size": 110818,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/QxV8W3N1TVGmgcVmKM2U_small_c700x420.jpg",
                                  "width": 60,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/UmDoyMu4TQyTsFbYUpjI_large_c700x420.jpg",
                                  "width": 512,
                                  "height": 420
                              }
                          }
                      }
                    ],
                    "dateTime": "2017-01-13T00:00:00.000Z",
                    "desc": "Be your own sushi master! With a little practice and our chef's helpful hints, you will learn how easy it really is to make sushi in your own kitchen. ",
                    "energyLevel": 2,
                    "price": ["$85.00"],
                    "eventURL": "https://atyourschool.youritdept.com/tcb/jsp/ViewEvent.jsp?CALTYPE=M&eventId=201553&SESSIONID=1478566077581",
                    "address": "4747 N Lincoln",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60625,
                    "activityMood": ["Mad Skillz", "Date Night", "Cultural Infusion"],
                    "fakeDate": "2016-12-03T00:00:00.000Z",
                    "cost": "3",
                    "lat": "41.9679758",
                    "lng": "-87.6899815",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-03T00:00:00.000Z",
                    "TimeEnd": "2016-12-03T02:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-08T00:54:31.000Z"
            },
            {
                "id": "recd9TFQFxXAye5yd",
                "fields": {
                    "UniqueID": 27,
                    "name": "Chi-Town Rising",
                    "image": [
                      {
                          "id": "attSR16g5xIFJLgTD",
                          "url": "https://dl.airtable.com/RidqW72CSzaOpV48BUae_image.jpg",
                          "filename": "image.jpg",
                          "size": 102512,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/IYANa7gCShOJOL4yqBQ5_small_image.jpg",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/vexV6xf2SmuhAgrmmjNa_large_image.jpg",
                                  "width": 512,
                                  "height": 422
                              }
                          }
                      }
                    ],
                    "dateTime": "2017-01-01T01:42:00.000Z",
                    "desc": "The organizers for this New Year's Eve event aren't skimping. To ring in the inaugural event, they've tapped Chicago (the band) and American Authors to headline sets leading up to 2016. As the final approach of midnight nears, a star will ascend the west tower of the Hyatt Regency until it reaches the top. Attendees can pay $150 to watch the event on \"Broadcast Boulevard\" or pay $99 to view the festivities from a dinner buffet across the river. A free public viewing area will be set up in Pioneer Court. The whole event will be broadcast live on NBC 5 and Telemundo Chicago.",
                    "energyLevel": 5,
                    "eventURL": "http://chi-townrising.com/",
                    "address": "151 E Wacker Dr",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60601,
                    "activityMood": ["Date Night", "Bottoms Up", "Night Owl"],
                    "fakeDate": "2016-12-03T01:42:00.000Z",
                    "cost": "4",
                    "lat": "41.8876984",
                    "lng": "-87.6249604",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T06:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:29:28.000Z"
            },
            {
                "id": "recektGVM3nxSCM8x",
                "fields": {
                    "UniqueID": 61,
                    "name": "Second City",
                    "image": [
                      {
                          "id": "attCjbBQFJz7MzDWg",
                          "url": "https://dl.airtable.com/4llX6DY2QAW1ZtDK9MZg_network-logo-large.png",
                          "filename": "network-logo-large.png",
                          "size": 12367,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/FeNZNhFTSywJPjZ2jV5y_small_network-logo-large.png",
                                  "width": 115,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/cZHKAZlUR52QdHpPb3IT_large_network-logo-large.png",
                                  "width": 425,
                                  "height": 133
                              }
                          }
                      },
                      {
                          "id": "attol3SKcTTpkqVxm",
                          "url": "https://dl.airtable.com/CbJZDfAgT5eNAg1svC0I_blob",
                          "filename": "blob",
                          "size": 427165,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/5x2UuavTSrSmhbvSmgHx_small_blob",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/xe0JFGvHTImbCX6osKrt_large_blob",
                                  "width": 512,
                                  "height": 506
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "Students of The Harold Ramis Film School at The Second City Training Center in Chicago recently got a visit from bona fide comedy badass Paul Feig. If you live on a planet where there is no laugher, you might not be familiar with his copious list of credits, including creating cult TV fave Freaks and Geeks and, more recently, directing Bridesmaids, The Heat, and last summer’s Ghostbusters reboot.",
                    "energyLevel": 4,
                    "eventURL": "http://www.secondcity.com/paul-feig-harold-ramis-film-school",
                    "address": "1616 N Wells St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60614,
                    "activityMood": ["Date Night", "Mad Skillz", "Night Owl"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "2",
                    "lat": "41.9115878",
                    "lng": "-87.6372294",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:13:22.000Z"
            },
            {
                "id": "recfKV4NUyFfUkbbF",
                "fields": {
                    "UniqueID": 37,
                    "name": "Sketchbook Brewing Company",
                    "image": [
                      {
                          "id": "attbD3C9yJG3s1Jiv",
                          "url": "https://dl.airtable.com/mv7KlSomRWmbprcqU50G_undefined.png",
                          "filename": "undefined.png",
                          "size": 15659253,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/FS8UckbYTyqclmBgrOym_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/CX31wqCTSeAUTcUtgDVo_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T16:00:00.000Z",
                    "desc": "Evanston's community-supported brewery",
                    "energyLevel": 3,
                    "eventURL": "http://www.sketchbookbrewing.com/",
                    "address": "821 Chicago Ave",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60202,
                    "activityMood": ["Bottoms Up", "Date Night", "Night Owl"],
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "2",
                    "lat": "42.0329473",
                    "lng": "-87.6809998",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T18:00:00.000Z",
                    "TimeEnd": "2016-12-03T05:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T04:01:51.000Z"
            },
            {
                "id": "recgAhZUtrpbN6fXJ",
                "fields": {
                    "UniqueID": 64,
                    "name": "Keep the Shadow...",
                    "image": [
                      {
                          "id": "att8CErL89ra7cFgr",
                          "url": "https://dl.airtable.com/MVaKfHZ8QdOpLCszqq6K_images.png",
                          "filename": "images.png",
                          "size": 11106,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/nW8zMT2RyuHQO9aOeDWS_small_images.png",
                                  "width": 149,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/7TdwiqzQHCp408kkRSAl_large_images.png",
                                  "width": 456,
                                  "height": 110
                              }
                          }
                      },
                      {
                          "id": "att48t777fkgQrL9B",
                          "url": "https://dl.airtable.com/hMveaRdQODmZmczLOGQK_blob",
                          "filename": "blob",
                          "size": 502913,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/HYAdbJfNRucGEW1aRoJG_small_blob",
                                  "width": 48,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/BjVWquMQSl67Jf7Yu5ZH_large_blob",
                                  "width": 512,
                                  "height": 398
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T14:00:00.000Z",
                    "desc": "Mourning during the AIDS Crisis. During much of the 20th century, death was a private and comparatively silent event. However, during the HIV/AIDS crisis in the 1980s and 90s, a politicized resurgence of highly visible and public acts of mourning emphasized the body ravaged by the virus. In some ways, these practices paralleled the public and material mourning practices of the nineteenth century. ",
                    "energyLevel": 1,
                    "eventURL": "http://planitpurple.northwestern.edu/event/498594",
                    "address": "1970 Campus Drive",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Mad Skillz", "Cultural Infusion", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T14:00:00.000Z",
                    "cost": "0",
                    "lat": "42.053532",
                    "lng": "-87.6762547",
                    "EnergyMin": 1,
                    "EnergyMax": 2,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-03T02:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:30:51.000Z"
            },
            {
                "id": "recj8t8v0LRpukqrM",
                "fields": {
                    "UniqueID": 40,
                    "name": "Warm Bevvy Walk",
                    "image": [
                      {
                          "id": "attZ887IRFQSZCmHg",
                          "url": "https://dl.airtable.com/3leLIv1Skuv9F1dqhfSR_160122_DRINK_hot-cocktail.jpg.CROP.promo-xlarge2.jpg",
                          "filename": "160122_DRINK_hot-cocktail.jpg.CROP.promo-xlarge2.jpg",
                          "size": 389302,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/owz6qbsJStmPrEmiBFZ5_small_160122_DRINK_hot-cocktail.jpg.CROP.promo-xlarge2.jpg",
                                  "width": 50,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/MkOAa5V3QHSZgZu4kBKY_large_160122_DRINK_hot-cocktail.jpg.CROP.promo-xlarge2.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-08T21:00:00.000Z",
                    "desc": "Shoppers can enjoy a variety of spiced and spiked warm beverages, including hot chocolate, mulled wine, hot cider and more, at businesses in downtown Evanston and on Main and Dempster Streets along Chicago Avenue.",
                    "energyLevel": 2,
                    "price": ["$0.00"],
                    "eventURL": "http://www.cityofevanston.org/events/2016/12/warm-bevvy-walk-1/",
                    "address": "Downtown Evanston",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Chill Zone", "Lone Wolf", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T21:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0466051",
                    "lng": "-87.6851874",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T21:00:00.000Z",
                    "TimeEnd": "2016-12-03T01:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T04:18:43.000Z"
            },
            {
                "id": "recjJMPfiFhKjHznq",
                "fields": {
                    "UniqueID": 21,
                    "name": "Annual Houndstooth Ball",
                    "image": [
                      {
                          "id": "attaFe1BxM55zJwz4",
                          "url": "https://dl.airtable.com/mtwaBmQDRuWJed7JwJky_undefined.png",
                          "filename": "undefined.png",
                          "size": 9654779,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/u4rHHNWMSgiMtXwel6Gq_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/aYNBKvKTvCIOqxkWwHFQ_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-10T01:00:00.000Z",
                    "desc": "Join us for our 8th annual Houndstooth Ball \nAn evening to benefit the rescue and the dogs we help\n\nSponsored by \nRover-Time Dog Walking & Pet Sitting\nCanine Crews\nPERL Mortgage\n\nDinner by Blue Plate Chicago and Upton's Naturals\nDesserts by Pie, Pie My Darling, Bang Bang Pie & Biscuits, Windy City Dinner Fairy, Vanille Patisserie and Insomnia Cookies\nDog treat buffet by Happy Dog Barkery\nOpen bar by Temperance Beer Company, Stolen Spirits (and more!)\nDog friendly photobooth by Magnolia Photo Booth Co.\nPhotos by Jeremy Lawson Photography\nHosted by Elliott Bambrough\n\nVIP tickets include a custom OTAT tote full of items from Vital Essentials Raw, SkinnyPop, La Familia Green, Chipotle, KIND Bars, Soap Distillery, Nature's Bakery and a copy of our 2017 Calendar!\n\nCanine tickets are limimted. Cocktail attire requested. Street parking available. Come hungry, thirsty, and ready to celebrate! \n\nTickets go on sale October 1, 2016.\n\nInterested sponsors please contact Heather@onetail.org",
                    "energyLevel": 4,
                    "eventURL": "https://www.facebook.com/events/777103312393292/",
                    "address": "Architectural Artifacts, Inc.: 325 N Ravenswood Ave",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60613,
                    "activityMood": ["Date Night", "Cultural Infusion", "Night Owl"],
                    "Field 15": "7-11",
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "4",
                    "lat": "41.973771",
                    "lng": "-87.6759093",
                    "EnergyMin": 3,
                    "EnergyMax": 5,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T05:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:16:29.000Z"
            },
            {
                "id": "recm3zZwtlLgWfzZa",
                "fields": {
                    "UniqueID": 8,
                    "name": "The Polar Express ",
                    "image": [
                      {
                          "id": "attx6uKWWRWKvSa05",
                          "url": "https://dl.airtable.com/13zvPSxlR7SedR0c7v64_The_Polar_Express_Union_Station.jpg",
                          "filename": "The_Polar_Express_Union_Station.jpg",
                          "size": 707044,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/ltmsrL4PTGF9YEr0wGFQ_small_The_Polar_Express_Union_Station.jpg",
                                  "width": 51,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/dDn9U0isSeGKDcbw2w97_large_The_Polar_Express_Union_Station.jpg",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T18:00:00.000Z",
                    "desc": "Set to the sounds of the motion picture soundtrack, passengers will relive the magic of the classic story as they are whisked away on THE POLAR EXPRESS™ for a magical one-hour trip through the tunnels, rail yards, and neighborhoods along the Chicago River. MULTIPLE TIMES AVAILABLE",
                    "energyLevel": 2,
                    "price": ["$50.00"],
                    "eventURL": "https://www.chicagothepolarexpressride.com/",
                    "address": "500 W Jackson Blvd",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60661,
                    "activityMood": ["Family Fun", "Cultural Infusion"],
                    "fakeDate": "2016-12-02T18:00:00.000Z",
                    "cost": "3",
                    "lat": "41.8788582",
                    "lng": "-87.6407518",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T17:00:00.000Z",
                    "TimeEnd": "2016-12-02T18:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:03:42.000Z"
            },
            {
                "id": "recmVcQDLb1lnDIeV",
                "fields": {
                    "UniqueID": 22,
                    "name": "Richard Cheese, Chicago",
                    "image": [
                      {
                          "id": "att15dXDEpmqsbswV",
                          "url": "https://dl.airtable.com/VlOQ6KbhRJ6rQsbOsRoY_undefined.png",
                          "filename": "undefined.png",
                          "size": 2062533,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/nmSCgrZrTLSrm3DP171t_small_undefined.png",
                                  "width": 50,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/pXVlftV8TUCLqGxVtwnr_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T02:00:00.000Z",
                    "desc": "RICHARD CHEESE & LOUNGE AGAINST THE MACHINE\nFriday December 2, 2016 9:00PM (Doors Open 8:00PM)\nThalia Hall\n1807 S Allport Street\nChicago, Illinois\n\nRC&LATM RETURN TO CHICAGO!\n\nAges 18+ **UNCENSORED SHOW**\nTICKETS: $35 / $74 (plus fees/taxes)\n\nhttp://tickets.richardcheese.com/\n\nTickets went on sale Friday August 19, 2016 at 10AM CST.",
                    "energyLevel": 5,
                    "eventURL": "https://www.facebook.com/events/1594832797476322/",
                    "address": "Thalia Hall: 1807 S Allport St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60608,
                    "activityMood": ["Date Night", "Bottoms Up", "Cultural Infusion"],
                    "Field 15": "8-10-45",
                    "fakeDate": "2016-12-03T02:00:00.000Z",
                    "cost": "2",
                    "lat": "41.857711",
                    "lng": "-87.657320",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-03T02:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:45:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:16:39.000Z"
            },
            {
                "id": "recnABzYpTxPJhDJJ",
                "fields": {
                    "UniqueID": 59,
                    "name": "Senator Lightford",
                    "image": [
                      {
                          "id": "attXNbXW27RDE4xVG",
                          "url": "https://dl.airtable.com/Jbod5JzwSJe5lVX7OIX9_blob",
                          "filename": "blob",
                          "size": 279392,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/4PiRMX9OQJ6DDtJNP3Wc_small_blob",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/Tw1Xo9HVSZ2N4eIxU3nx_large_blob",
                                  "width": 512,
                                  "height": 399
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "As part of National Week of Action Against School Pushout, the Education Law & Policy Society (ELPS) and Stand Up For Each Other (SUFEO) are hosting an event discussion about Senate Bill 100 and the impact it is having in our schools, the school-to-prison pipeline, and the process of creating and passing legislation. Lunch will be provided!",
                    "energyLevel": 3,
                    "price": ["$0.00"],
                    "eventURL": "http://lucweb.luc.edu/newsevents/public/calendar_detail.cfm?eventid=87164&siteid=138&month=11&year=2016&day=1&range=ww&audience=0&view=mw&skin=default",
                    "address": "25 E Pearson St,",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60611,
                    "activityMood": ["Mad Skillz", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "0",
                    "lat": "41.8976813",
                    "lng": "-87.6292303",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T18:00:00.000Z",
                    "TimeEnd": "2016-12-02T19:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-10T01:05:20.000Z"
            },
            {
                "id": "recnXme6dzWypjxl7",
                "fields": {
                    "UniqueID": 38,
                    "name": "Windy City Wine & Beer Tours",
                    "image": [
                      {
                          "id": "attGJjcRs5uUQ7Zab",
                          "url": "https://dl.airtable.com/lNnBojd3SlCfK4B6XjbP_wine.jpeg",
                          "filename": "wine.jpeg",
                          "size": 54371,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/yT33SoLQlG1ItWgbiiMw_small_wine.jpeg",
                                  "width": 91,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/VcMAJutGTKCiCPvgnwOx_large_wine.jpeg",
                                  "width": 512,
                                  "height": 396
                              }
                          }
                      },
                      {
                          "id": "attVQhJUIL7hHzPHz",
                          "url": "https://dl.airtable.com/5grIv02JQK6QxK7wB7d1_undefined.png",
                          "filename": "undefined.png",
                          "size": 2555987,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/BJbWJR9uTRqB23Bsp6hJ_small_undefined.png",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/yj5otbKNQp2z5B0caIbt_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-04T04:20:00.000Z",
                    "desc": "We are Chicago's experts on the wine trails around Chicago and other parts of the Midwest!  We now also offer tours to craft breweries and artisanal distilleries as well.",
                    "energyLevel": 2,
                    "price": ["$149.00"],
                    "eventURL": "http://www.windycitytourcompany.net/wine-trails",
                    "address": "2113 N Kedzie Blvd",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60647,
                    "activityMood": ["Bottoms Up", "Date Night", "Mad Skillz"],
                    "fakeDate": "2016-12-03T04:20:00.000Z",
                    "cost": "4",
                    "lat": "41.9196997",
                    "lng": "-87.7087705",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T17:00:00.000Z",
                    "TimeEnd": "2016-12-02T21:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T04:08:07.000Z"
            },
            {
                "id": "recowgiQG4Y0Fipk2",
                "fields": {
                    "UniqueID": 33,
                    "name": "Gingerbreads for Charity",
                    "image": [
                      {
                          "id": "attsNvZK11mUFfIEM",
                          "url": "https://dl.airtable.com/3sNbB8pjT3aPOs7Rthku_undefined.png",
                          "filename": "undefined.png",
                          "size": 4184159,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/xbNMpRvQRPWmEfNaSVjd_small_undefined.png",
                                  "width": 48,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/M5jrwyrQSUaTYozwpUtu_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T21:00:00.000Z",
                    "desc": "Get in the holiday spirit and please join A Perry Homes for their Annual Gingerbread Building for Charity.  Winner will receive $250 to go to their favorite charity.  ",
                    "energyLevel": 2,
                    "price": ["$30.00"],
                    "eventURL": "http://www.aperryhomes.com/events",
                    "address": "1220 Washington Avenue",
                    "city": "Wilmette",
                    "state": "Illinois",
                    "zip": 60091,
                    "activityMood": ["Family Fun", "Chill Zone"],
                    "fakeDate": "2016-12-02T21:00:00.000Z",
                    "cost": "2",
                    "lat": "41.8832439",
                    "lng": "-87.6283934",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T21:00:00.000Z",
                    "TimeEnd": "2016-12-02T23:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T02:10:23.000Z"
            },
            {
                "id": "recp2PeGK9cD6Yq5n",
                "fields": {
                    "UniqueID": 32,
                    "name": "SantaCon Chicago 2016",
                    "image": [
                      {
                          "id": "attCXw87axvKThQTu",
                          "url": "https://dl.airtable.com/qZUfyPY3Rue7Qjt4zyi0_undefined.png",
                          "filename": "undefined.png",
                          "size": 2611785,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/iOD4MSDToK6KoNhtlzTA_small_undefined.png",
                                  "width": 55,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/zrKolybNSeGA33J5cztR_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T18:00:00.000Z",
                    "desc": "Who: Anybody who dresses up as Santa, Santa's elves, Santa's Reindeer, Mrs Claus, or anything else Holiday related What: An afternoon adventure spreading joy and good cheer.",
                    "energyLevel": 5,
                    "price": ["$0.00"],
                    "eventURL": "https://www.santacon.info/Chicago-IL/?SantaCon_Chicago",
                    "address": "520 South Michigan Avenue",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60605,
                    "activityMood": ["Bottoms Up", "Night Owl", "Cheap Thrills"],
                    "fakeDate": "2016-12-02T18:00:00.000Z",
                    "cost": "0",
                    "lat": "41.8750619",
                    "lng": "-87.6269963",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-02T18:00:00.000Z",
                    "TimeEnd": "2016-12-03T06:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T02:05:02.000Z"
            },
            {
                "id": "recqCCso9E2ENNI2n",
                "fields": {
                    "UniqueID": 2,
                    "name": "Holiday Tree Lighting",
                    "image": [
                      {
                          "id": "attqJwqaMOhBKus4m",
                          "url": "https://dl.airtable.com/iFb4DLvJRPW7YZhwmjpx_file.png",
                          "filename": "file.png",
                          "size": 1814166,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/ttUZ5R5sTT61SqEnnNtc_small_file.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/OMDn56xMSGiBE5iOoAxr_large_file.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "price": ["$0.00"],
                    "activityMood": ["Family Fun", "Date Night", "Lone Wolf", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "0",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T01:00:00.000Z",
                    "TimeEnd": "2016-12-03T02:00:00.000Z"
                },
                "createdTime": "2016-11-05T21:23:42.000Z"
            },
            {
                "id": "recroGSzH2Tt0SH9R",
                "fields": {
                    "UniqueID": 11,
                    "name": "Holiday Orchestra",
                    "image": [
                      {
                          "id": "attzqcbBueWDQVAoH",
                          "url": "https://dl.airtable.com/Jf0GZbEKRymRGKr9xP6O_undefined.png",
                          "filename": "undefined.png",
                          "size": 12543901,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/TYj9yS5R0up7wX0r1LgQ_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/q4t43FjhSXCT0SgleGrO_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-04T21:00:00.000Z",
                    "desc": "The best holiday event in Evanston, including a visit from Santa and his elves!!",
                    "energyLevel": 2,
                    "price": ["$30.00"],
                    "eventURL": "http://www.evanstonsymphony.org/concert/holiday-concert-2016",
                    "address": "1600 Dodge Avenue",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Date Night", "Chill Zone", "Cultural Infusion"],
                    "fakeDate": "2016-12-02T21:00:00.000Z",
                    "cost": "2",
                    "lat": "42.046397",
                    "lng": "-87.7045007",
                    "EnergyMin": 1,
                    "EnergyMax": 3,
                    "TimeStart": "2016-12-02T21:00:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:26:51.000Z"
            },
            {
                "id": "recsDe52UicWNwIrP",
                "fields": {
                    "UniqueID": 9,
                    "name": "Comedy Dinner",
                    "image": [
                      {
                          "id": "attwaNxbksrBPmV8N",
                          "url": "https://dl.airtable.com/lYK23qmXSemMcocuJyp1_Comedy_Dinner_chicago.jpg",
                          "filename": "Comedy_Dinner_chicago.jpg",
                          "size": 159537,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/4zD57ukFRHCPUSpFhsjQ_small_Comedy_Dinner_chicago.jpg",
                                  "width": 60,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/uwYYMtD0Q2esLFxcCto3_large_Comedy_Dinner_chicago.jpg",
                                  "width": 512,
                                  "height": 420
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-04T02:30:00.000Z",
                    "desc": "Head to Der Brew-Ha-Ha for a raucous evening of dinner, dancing, drinking and, of course, bingo! Guests will meet a colorful cast of characters leading the evening in games and good-natured fun, but soon learn they are amongst two rival Chicago parishes, one Italian and one Irish, who are set to be merged with one anothe",
                    "energyLevel": 3,
                    "price": ["$60.00"],
                    "eventURL": "http://www.wegottabingo.com/about-the-show/",
                    "address": "1113 W. Belmont Avenue ",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60657,
                    "activityMood": ["Date Night", "Bottoms Up", "Cultural Infusion", "Night Owl"],
                    "fakeDate": "2016-12-03T02:30:00.000Z",
                    "cost": "3",
                    "lat": "41.9396064",
                    "lng": "-87.6593678",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T02:30:00.000Z",
                    "TimeEnd": "2016-12-03T04:30:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-06T22:09:09.000Z"
            },
            {
                "id": "rect5McGYne7oIpxv",
                "fields": {
                    "UniqueID": 34,
                    "name": "Grosse Point Lighthouse",
                    "image": [
                      {
                          "id": "attaSbifPIYbFXeuI",
                          "url": "https://dl.airtable.com/Wb97rm9HQ66WtaQJwd0M_undefined.png",
                          "filename": "undefined.png",
                          "size": 6324915,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/9EDV6K8MTUGikWVIro6n_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/YOYpRl3SPuCv1Y2bvyRw_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T13:00:00.000Z",
                    "desc": "Grosse Point Lighthouse was built by the United States Government in 1873 as the lead lighthouse marking the approach to Chicago after several shipwrecks demonstrated its need. The promontory on which it stands was named Grosse Point (Great Point) by early French explorers and traders in the 17th century. ",
                    "energyLevel": 1,
                    "price": ["$0.00"],
                    "eventURL": "http://www.grossepointlighthouse.net/visit.html",
                    "address": "2601 Sheridan Road",
                    "city": "Evanston",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Lone Wolf", "Cultural Infusion", "Chill Zone", "Cheap Thrills"],
                    "Field 15": "open year round",
                    "fakeDate": "2016-12-02T13:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0639249",
                    "lng": "-87.6785329",
                    "EnergyMin": 1,
                    "EnergyMax": 2,
                    "TimeStart": "2016-12-02T13:00:00.000Z",
                    "TimeEnd": "2016-12-02T22:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T02:31:43.000Z"
            },
            {
                "id": "rectaeWaq6Ws7EKWA",
                "fields": {
                    "UniqueID": 57,
                    "name": "Bat 17",
                    "image": [
                      {
                          "id": "attzZdAfevrRW9iSV",
                          "url": "https://dl.airtable.com/VhOmGLAQ8uPOHyZW7j3i_blob",
                          "filename": "blob",
                          "size": 318307,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/qWZhWCDjT1usyADt35TC_small_blob",
                                  "width": 53,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/OvMKpmZdTS6MVUQnFaxF_large_blob",
                                  "width": 480,
                                  "height": 325
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T01:00:00.000Z",
                    "desc": "Beer geeks flock to this deli and pub for its tasty fare, pool tables, and 40-plus craft brews. ",
                    "energyLevel": 6,
                    "price": ["000.00"],
                    "eventURL": "http://bat17evanston.com/",
                    "address": "1709 Benson Ave.",
                    "city": "Evanston ",
                    "state": "Illinois",
                    "zip": 60201,
                    "activityMood": ["Bottoms Up", "Mad Skillz", "Night Owl", "Cheap Thrills"],
                    "fakeDate": "2016-12-03T01:00:00.000Z",
                    "cost": "0",
                    "lat": "42.0490241",
                    "lng": "-87.6865706",
                    "EnergyMin": 5,
                    "EnergyMax": 7,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-03T07:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T03:07:14.000Z"
            },
            {
                "id": "recu5FKF2nXUW0Fjz",
                "fields": {
                    "UniqueID": 50,
                    "name": "Museum of Sci. & Ind.",
                    "image": [
                      {
                          "id": "att5QKgIZcOfpArU2",
                          "url": "https://dl.airtable.com/g3rDghZSTbSH6UMtHqOI_msichicago.jpg",
                          "filename": "msichicago.jpg",
                          "size": 97974,
                          "type": "image/jpeg",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/Y6xdNFkyQpmeWG6BzADW_small_msichicago.jpg",
                                  "width": 27,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/3LM88iSBQjqligxV2TAD_large_msichicago.jpg",
                                  "width": 478,
                                  "height": 512
                              }
                          }
                      },
                      {
                          "id": "atti0i2WUWVZ2Fh8G",
                          "url": "https://dl.airtable.com/uhI9SDrRRfZwNauW1Yxg_undefined.png",
                          "filename": "undefined.png",
                          "size": 2606391,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/xwE6gDRqWDtaCEKVuUJg_small_undefined.png",
                                  "width": 64,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/dXZVDUPmQYa3HCxmZcIH_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-02T20:30:00.000Z",
                    "desc": "Come explore the power of play with the giant LEGO exhibit.  Descend the mine shaft and learn about coal mining on the interactive Coal Mine exhibit.  Sat back, and be dazzled by the National Parks Adventure and Great White Shark Omnimax Shows",
                    "energyLevel": 5,
                    "price": ["$25.00"],
                    "eventURL": "http://www.msichicago.org/",
                    "address": "5700 S. Lakeshore Dr.",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60637,
                    "activityMood": ["Family Fun", "Lone Wolf", "Cultural Infusion", "Chill Zone"],
                    "fakeDate": "2016-12-02T20:30:00.000Z",
                    "cost": "2",
                    "lat": "41.7906128",
                    "lng": "-87.5852473",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-03T03:30:00.000Z",
                    "TimeEnd": "2016-12-02T22:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-09T01:33:35.000Z"
            },
            {
                "id": "recuA8nff1BGtFonH",
                "fields": {
                    "UniqueID": 24,
                    "name": "Chicago Christmas Crawl",
                    "image": [
                      {
                          "id": "attF9vpWoUibxJsEB",
                          "url": "https://dl.airtable.com/JsgiteAIQx2t2tT7ahpg_CCC-Logo-tansparent-with-stroke.png",
                          "filename": "CCC-Logo-tansparent-with-stroke.png",
                          "size": 187788,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/fyBaUM9EQyKo1Ipcu0Oh_small_CCC-Logo-tansparent-with-stroke.png",
                                  "width": 97,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/kA7RqCAnRqqjOakdeVyJ_large_CCC-Logo-tansparent-with-stroke.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      },
                      {
                          "id": "attIsOPGLjoi64tyB",
                          "url": "https://dl.airtable.com/6AsmHv9xTDqVg6aHJWf4_blob",
                          "filename": "blob",
                          "size": 204579,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/b4YqEHqyQZ27729FpvhS_small_blob",
                                  "width": 55,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/OQqtOy14TuregHYhpph5_large_blob",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-10T16:00:00.000Z",
                    "desc": "City sidewalks, busy sidewalks, dressed in holiday style. In the air there's a feeling of Christmas. Chicago Christmas Crawl, #CCC2016 is a walking themed event in which local venues showcase their food tasting and cocktail holiday specials. The event focuses on the spirit of the season in celebration of the holidays with food, family, friends, costumes and fun. Each venue will provide a $3-$7 tasting option in which attendees can go on a “food crawl” throughout a chicago neighborhood. Participants will be given a “holiday plate” in which to collect stamps from venues for purchasing the specials and will be entered into a raffle for a variety of amazing prizes. From Frames, Santa Hats, & Funny Holiday Photo Props, we have you covered for some classy Chicago tundra/vortex fun. It's a day you will remember for the rest of your life and truly an experience you can not miss. We wouldn't want you to have FOMO. Happy Holidays!",
                    "energyLevel": 7,
                    "eventURL": "http://chicagochristmascrawl.com/",
                    "address": "Old Town",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60610,
                    "activityMood": ["Bottoms Up", "Thrill Seeker", "Night Owl"],
                    "fakeDate": "2016-12-02T16:00:00.000Z",
                    "cost": "3",
                    "lat": "41.9094014",
                    "lng": "-87.6384097",
                    "EnergyMin": 6,
                    "EnergyMax": 8,
                    "TimeStart": "2016-12-02T16:00:00.000Z",
                    "TimeEnd": "2016-12-03T00:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:17:08.000Z"
            },
            {
                "id": "recvMySutlrjLB1HV",
                "fields": {
                    "UniqueID": 29,
                    "name": "Adler After Dark",
                    "image": [
                      {
                          "id": "attIYM5qDo4Lu1eXg",
                          "url": "https://dl.airtable.com/3JtFqFKTke22guER32kJ_undefined.png",
                          "filename": "undefined.png",
                          "size": 18212395,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/tx8Rgp4TGioH5vCAyeME_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/BxAOwCsATXakZNdyTwAa_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-15T12:00:00.000Z",
                    "desc": "Exclusively for adults 21+, this evening offers you open access, unlimited shows, and unique entertainment every third Thursday of the month from 6:00 pm—10:00 pm.With themes that change every month, Adler After Dark is never the same event twice. Reinvent your Adler experience every month with friends, family, or that special someone on a date they’ll never forget!\nWhat’s Included?\nFull access and admission to museum exhibits and galleries\nUnlimited sky shows in our 3 state-of-the-art theaters\nSpecial guests and lectures\nStellar hands-on educational programs\nAccess to the Doane Observatory (weather permitting)\nLive entertainment\nThe best view of the skyline from anywhere in Chicago!\nPlease note that ticketed tours of the Doane Observatory can be added to your General Admission ticket for $5.00 a piece. Cocktails and other alcoholic beverages are available for purchase at the event bars. Entrée items and snacks are available for purchase at Café Galileo’s.\nThe votes are in and the hands-down winner is Adler After Dark. What are you waiting for? Book your tickets today!\n\nRead more at http://www.adlerplanetarium.org/adler-after-dark/#Cy7y6xSc2lvMoQVU.99This month, guests dress up in prom couture for an unforgettable night of dancing…without the awkward stress of finding the perfect date.",
                    "energyLevel": 3,
                    "eventURL": "http://www.adlerplanetarium.org/adler-after-dark",
                    "address": "1300 S Lake Shore Dr ",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60605,
                    "activityMood": ["Date Night", "Bottoms Up", "Mad Skillz", "Night Owl"],
                    "Field 15": "6-10 pm",
                    "fakeDate": "2016-12-02T12:00:00.000Z",
                    "cost": "2",
                    "lat": "41.866337",
                    "lng": "-87.6089716",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-03T00:00:00.000Z",
                    "TimeEnd": "2016-12-03T04:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:29:36.000Z"
            },
            {
                "id": "recxU4tIf4SffETgx",
                "fields": {
                    "UniqueID": 19,
                    "name": "Zoo Lights",
                    "image": [
                      {
                          "id": "attGT3SyxNhy8VW6n",
                          "url": "https://dl.airtable.com/Hye2lXmETtKj2BciuqCQ_undefined.png",
                          "filename": "undefined.png",
                          "size": 7187769,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/qixogzkSfGi6GEmySN2g_small_undefined.png",
                                  "width": 53,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/BXgwjEmCSPmlv7E3t9DD_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-03T02:43:00.000Z",
                    "desc": "Join us for the brilliance of this fun, free, family-oriented holiday celebration, featuring luminous displays and holiday-season activities throughout zoo grounds.\n\nFestive Activities\nPhotos with Santa through December 23\nFree crafts for children\nUnique educational chats\n3D displays\nWarm spiced wine and frosty lagers\nDelicious holiday snacks\nHoliday gift shopping\nLive ice-sculpture carving\nCarousel and train rides\nMusical light shows\n3D holiday specs while supplies last!\nSpecial Events\nZooLights Opening Night\nFriday, November 25\nHelp us flip the switch! At 4:25 p.m. join a lighting ceremony next to Café at Wild Things to kick off the festivities.\n\nHoliday Market\nTuesday, November 29\nDon’t miss the wildest holiday-shopping fair in the city! The zoo’s first-ever Holiday Market will feature more than 30 amazing artisan vendors throughout zoo grounds during ZooLights. Please note: only those with tickets will be allowed entry to the zoo this evening.\n6:30–10 p.m.\nFor participants of all ages\n$10 ($8 for Lincoln Park Zoo members)\nBuy tickets to the Holiday Market\n\nBrewLights Presented By Louis Glunz Beer\nThursday, December 1\nJoin Louis Glunz Beer and the Auxiliary Board of Lincoln Park Zoo for a craft-beer fest during ZooLights! Enjoy local craft, seasonal and international beers on tap throughout the zoo. Please note: only those with tickets will be allowed entry to the zoo this evening.\n5:30 p.m.–9 p.m.\nFor participants ages 21 and older\n$40–$60\nBuy tickets to BrewLights Presented By Louis Glunz Beer\n\nAdults Night Out at ZooLights\nWednesday, December 7\nEnjoy the brilliance of ZooLights minus the kids and crowds and with a beer in hand! This adults-only event features animal chats and enrichment viewings, a live band and food and drinks available for purchase. Please note: only those with tickets will be allowed entry to the zoo this evening.\n6:30 p.m.–10 p.m.\nFor participants ages 18 and older\n$15 ($12 for Lincoln Park Zoo members)\nBuy tickets to Adults Night Out at ZooLights\n\nMembers-Only Night at ZooLights Presented By Kalahari Resorts and Conventions\nThursday, December 8\nLincoln Park Zoo members and their guests get exclusive access to ZooLights as well as free skate rental and ice time at the Farm-in-the-Zoo!\n4:30–9 p.m.\nFor Lincoln Park Zoo members and their guests\nLearn more about Members-Only Night at ZooLights\n\nThe Chris White Trio Tribute to “A Charlie Brown Christmas”\nThursday, December 15\nSnap your fingers and sing along to this jazzy take on one of the season’s classic soundtracks. Please note: this is a ticketed event that takes place at Café Brauer during ZooLights.\n$25 ($20 for Lincoln Park Zoo members); VIP upgrade: $40\nFor participants of all ages\nBuy tickets to Charlie Brown Christmas Tribute\n\nNew Year’s Eve at ZooLights\nSaturday, December 31\nCelebrate New Year’s Eve at the most sparkling setting in town! We’ll distribute complimentary festive hats, horns and party favors to visitors while supplies last.\n4:30-9 p.m.\nFor participants of all ages\n\nZooLights Coat Drive\nEvery night of ZooLights we will be collecting new and gently used winter clothing. Donated items will be distributed to Chicago charities. Donation boxes will be located in Gateway Pavilion and Park Place Café.\n\nMembers Lounge\nLincoln Park Zoo members enjoy exclusive access to a Members Lounge located on the lower level of Park Place Café! Warm up with free hot chocolate, cider and tea, cookies and crafts.\nEvery ZooLights night except December 8 and January 1\nMembers Lounge hours: 4:30–8 p.m.\n\nMarketing and sponsorship opportunities are available. For more information, please contact Corporate Alliances Manager Ryann Kehoe at rkehoe@lpzoo.org.",
                    "energyLevel": 3,
                    "price": ["$0.00"],
                    "eventURL": "http://www.lpzoo.org/zoolights-presented-comed-and-powershares-qqq-invesco",
                    "address": "2001 N Clark St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60614,
                    "activityMood": ["Family Fun", "Date Night", "Cheap Thrills"],
                    "Field 15": "November 25–27, December 2–4, 9–23, 26–31; January 1, 2017  4:30–9 p.m.",
                    "fakeDate": "2016-12-03T02:43:00.000Z",
                    "cost": "0",
                    "lat": "41.9187937",
                    "lng": "-87.6376537",
                    "EnergyMin": 2,
                    "EnergyMax": 4,
                    "TimeStart": "2016-12-02T22:30:00.000Z",
                    "TimeEnd": "2016-12-03T03:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:15:56.000Z"
            },
            {
                "id": "recxViodlaYA86cFM",
                "fields": {
                    "UniqueID": 31,
                    "name": "Chicago ft. The Cool Kids",
                    "image": [
                      {
                          "id": "attkrXWwQvlm4Cz7S",
                          "url": "https://dl.airtable.com/E7U2ydwfRiuVoDuHI5GG_undefined.png",
                          "filename": "undefined.png",
                          "size": 1781572,
                          "type": "image/png",
                          "thumbnails": {
                              "small": {
                                  "url": "https://dl.airtable.com/biPPG1IfR52dn8fsoXHW_small_undefined.png",
                                  "width": 54,
                                  "height": 36
                              },
                              "large": {
                                  "url": "https://dl.airtable.com/durspewkQBu6u29Ixrfa_large_undefined.png",
                                  "width": 512,
                                  "height": 512
                              }
                          }
                      }
                    ],
                    "dateTime": "2016-12-07T03:00:00.000Z",
                    "desc": "Red Bull Sound Select is a monthly live music showcase curated by local tastemakers. \n\nFeaturing: The Cool Kids / Payroll Giovanni (of Doughboyz Cashout) / Femdot\n\nDJ Set by: Ty Howard\n\n*RSVP for $3 entry: http://win.gs/DecChi \n*Join the conversation: @RBsoundselect #BreakMusic\n\nNOTE: RSVP confirmation does not guarantee you entry, but does qualify you for a $3 ticket. Entry is first come first served up to capacity, regardless of RSVP. RSVP is also only good for each individual guest. No +1s will be included. You must RSVP on redbullsoundselect.com to receive the discounted ticket price. The show is all ages, but an ID is required.",
                    "energyLevel": 5,
                    "price": ["$3.00"],
                    "eventURL": "https://www.facebook.com/events/1201724863199610/",
                    "address": "Thalia Hall: 1807 S Allport St",
                    "city": "Chicago",
                    "state": "Illinois",
                    "zip": 60608,
                    "activityMood": ["Bottoms Up", "Night Owl", "Cultural Infusion", "Cheap Thrills"],
                    "Field 15": "9-1am",
                    "fakeDate": "2016-12-03T03:00:00.000Z",
                    "cost": "1",
                    "lat": "41.857711",
                    "lng": "-87.657320",
                    "EnergyMin": 4,
                    "EnergyMax": 6,
                    "TimeStart": "2016-12-03T03:00:00.000Z",
                    "TimeEnd": "2016-12-03T07:00:00.000Z",
                    "confirm Lat/Long (don't use, temporary)": "x"
                },
                "createdTime": "2016-11-07T01:29:41.000Z"
            }
          ]
      }

    $scope.testEvents = $scope.testEvents.records;
    //calculate cost string
    $scope.costString = function (cost) {
        if (cost == 0) {
            return "FREE"
        }
        else {
            var result = ""
            for (var i = 0; i < cost; i++) {
                result += "$"
            }
            return result
        }
    };
// push info to the detail view as an im feeling lucky event
    $scope.feelingLucky = function () {
        var len = $scope.testEvents.length - 1;
        var r = Math.floor(Math.random() * len);
        var ev = $scope.testEvents[r];
        $scope.newEvent = jQuery.extend(true, {}, ev);
        $scope.newEvent.fields.lucky = true;
        $scope.newEvent.fields.image = ev.fields.image[ev.fields.image.length - 1]['url'];
        $scope.newEvent.fields.displayCost = $scope.costString(ev.fields.cost);
        var view = new supersonic.ui.View("detail#detailEvent");
        supersonic.ui.layers.push(view, { params: $scope.newEvent.fields });
    }
  });
