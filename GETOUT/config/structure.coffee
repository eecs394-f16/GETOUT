# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Home"
      id: "index"
      location: "getfeed#index" # Supersonic module#view type navigation
    }
    {
      title: "Settings"
      id: "settings"
      location: "example#settings"
    }
  ]

  # rootView:
  #   location: "example#getting-started"

<<<<<<< HEAD

=======
  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
    {
      id: "detail-view"
      location: "example#detail-view"
    }
  ]
>>>>>>> 3603bb287c893d2c08ac5fb9b8af1ccb967dea3b

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
