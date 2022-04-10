// main electron application

const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const template  = require("./custom-menu");

let mainWindow;  // this is the main app window

/**@method createMainWindow */
const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        center: true,
        resizable: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            devTools: true
        }
    });

    mainWindow.loadFile("src/index.html");
}


const configurMenu = () => {

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}
app.whenReady().then(() => {
    configurMenu();
    console.log("creating the main window..");
    createMainWindow();
})


