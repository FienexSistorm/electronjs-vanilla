// main electron application

const { app, BrowserWindow } = require("electron");
const path = require("path");


let mainWindow;  // this is the main app window
let loadingWindow; // this is the loading window

// there are two ways to realise the loading concept: 
    //1- the first is to use the same window and load the two html contents; loading than the real app after the loading delai
    //2- the second is to use two frames which will give us more controll over the loading frame that we can set as frameless, not reszable and well designed


    /**@method createLoadingWindow will create the loading window */
const createLoadingWindow = () => {
    loadingWindow = new BrowserWindow({
        width: 400,
        height:180,
        frame: false,
        resizable: false,
        center: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: true
        }
    });

    loadingWindow.loadFile("src/loading.html");
}

const createMainWindow=() => {
    mainWindow = new BrowserWindow({
        width: 1920,
        height:1080,
        center: true,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: true
        }
    });

    mainWindow.loadFile("src/index.html");
}

app.whenReady().then(() => {
    createLoadingWindow();

    setTimeout(() => {
        console.log("creating the main window..");
        loadingWindow.close();
        loadingWindow=null; // resetting the loading window so we don't re-render it
        createMainWindow();
    }, 3000);  // the main frame will show after simulating three seconds
})


