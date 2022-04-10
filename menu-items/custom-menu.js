
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
    }
];



module.exports = template;