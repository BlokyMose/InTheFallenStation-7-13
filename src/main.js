/** @type {import("../typings/phaser.d.ts")} */

import { SOpening } from "./scenes/SOpening.js";
import { STestGround } from "./scenes/STestGround.js";
import { SWareHouse } from "./scenes/SWareHouse.js";
import { SPentapolis } from "./scenes/SPentapolis.js";
import UIPlay from "./UI/UIPlay.js";
import UIPlay2 from "./UI/UIPlay2.js";
import { STestGround2 } from "./scenes/STestGround2.js";
import CanvasDialogue from "./Chat/CanvasDialogue.js";

var config = {
    type: Phaser.AUTO,
    width:800,
    height:600,
    pixelArt: true,
    scale:{
        parent:'myGame',
        // autoCenter:Phaser.Scale.CENTER_BOTH
    },
    physics:{
        default: 'matter',
        matter:{
            gravity:{y:0.4},
            debug:false
        }
    },
    scene:[
        SPentapolis,
        UIPlay2,
        STestGround2,
        CanvasDialogue,

        //======================
        SWareHouse,
        UIPlay,
        STestGround,
        SOpening,

    ]
};

let game = new Phaser.Game(config);


// //  Inject our CSS
// var element = document.createElement('style');
// document.head.appendChild(element);
// var sheet = element.sheet;
// var styles = '@font-face { font-family: "Centaur"; src: url("dist\assets\fonts\IMPACT.TTF") format("opentype"); }';
// sheet.insertRule(styles, 0);
// styles = '@font-face { font-family: "Perpetua"; src: url("dist\assets\fonts\IMPACT.TTF") format("opentype"); }';
// sheet.insertRule(styles, 0);
// styles = '@font-face { font-family: "Futura"; src: url("dist\assets\fonts\IMPACT.TTF") format("opentype"); }';
// sheet.insertRule(styles,0);
