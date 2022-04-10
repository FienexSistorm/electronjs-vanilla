// main electron application

const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const template = require("./custom-menu");

let mainWindow;  // this is the main app window
let tray=null;   // the tray menu holder

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
        },
        icon: `${__dirname}/assets/icon.ico`
    });

    mainWindow.loadFile("src/index.html");
}

// the window menu configuration
const configureMenu = () => {
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

const configureTrays = () => {
    tray = new Tray(`${__dirname}/assets/icon.ico`);
    tray.setToolTip('This is Electron Application Trays')
    tray.setContextMenu(contextMenu)
}

app.whenReady().then(() => {
    configureTrays();
    configureMenu();
    console.log("creating the main window..");
    createMainWindow();
})


