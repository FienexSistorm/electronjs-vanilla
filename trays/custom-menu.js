
const { MenuItem, app } = require("electron");

let template = [
    {
        label: app.name,

    }, {
        role: "seperator"
    }, {
        label: "Quit",
        click() {
            console.log("Quit");
            app.quit();
        }
    },
    {
        label: "Reluanch",
        click() {
            console.log("Relaunched");
            app.relaunch();
        }
    },
    {
        label: "Exit",
        click() {
            console.log("Exit");
            app.exit();
        }
    },
    {
        label: "Infos",
        click() {
            console.log("Informations about the app are required by the user");
        }
    }
];



module.exports = template;