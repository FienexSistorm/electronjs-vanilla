// main electron application

const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");


let mainWindow;  // this is the main app window

/**@method createMainWindow */
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 260,
        center: true,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: true
        },
        icon: `${__dirname}/assets/icon.ico`
    });

    mainWindow.loadFile("src/index.html");
}


/**@method configureShortcuts */
const configureShortcuts = () => {
    globalShortcut.register("CommandOrControl+R", () => {
        console.log("Content refreshing...");
    });
    globalShortcut.register("Shift+CommandOrControl+I", () => {
        console.log("DevTools shortcut is requested");
    });
    globalShortcut.register("CommandOrControl+F", () => {
        console.log("Find in content");
    })
}

app.whenReady().then(() => {
    configureShortcuts();
    console.log("creating the main window..");
    createMainWindow();

})

