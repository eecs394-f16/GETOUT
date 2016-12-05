# GETOUT

## Download
Follow the steps on the [AppGyver website](http://www.appgyver.io/steroids/getting_started) to install the Steroids command line interface. Note that you will need to create an AppGyver account to complete this step.

After installing Steroids, open a terminal and run the following commands:
```
git clone https://github.com/eecs394-f16/GETOUT.git
cd GETOUT/GETOUT/
steroids login
steroids update
```

## Running the App
In order to run this app, you will first need to download the AppGyver Scanner on your mobile phone ([iOS](https://itunes.apple.com/fi/app/appgyver-scanner/id575076515) and [Android](https://play.google.com/store/apps/details?id=com.appgyver.freshandroid)).

### Deploying Locally
To run this app locally, open a terminal and run the following commands:
```
cd GETOUT/
steroids connect
```
This will open a new webpage in your browser containing a QR code for the app. Use the AppGyver Scanner to scan the QR code and run the app. Note that your mobile phone must be connected to the same LAN as the computer on which the app is being deployed.

### Deploying to the Cloud
Follow the steps above to deploy the app locally. When the webpage containing the QR code opens, click on the "Cloud" button in the top right corner of the screen. Next, click on the "Deploy to Cloud" button. In the same terminal in which you ran `steroids connect`, you will see a URL pointing to a new QR code for the application. Open the URL and scan the QR code using the AppGyver Scanner to run the app.
