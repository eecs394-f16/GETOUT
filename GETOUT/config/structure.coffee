# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Feed"
      id: "home"
      location: "getfeed#index" # Supersonic module#view type navigation
    }
    {
      title: "Map"
      id: "map"
      location: "getfeed#mapview"
    }
  ]



  preloads: [

  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  initialView:
     id: "initialView"
     location: "getfeed#initial-view"
