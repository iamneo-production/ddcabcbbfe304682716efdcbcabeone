const express = require('express');
const app = express();
const port = 8081;
let currentplayer="X";
let gameBoard=["","","","","","","","",""];
let gameover=false;

function checkwinn(){
    const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
}
//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));