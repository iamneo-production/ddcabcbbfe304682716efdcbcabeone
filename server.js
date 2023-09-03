const express = require('express');
const app = express();
const port = 8081;
let currentplayer="X";
let gameBoard=["","","","","","","","",""];
let gameover=false;

function checkwinn(){
    const winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(const pattern of winpatterns){
        const [a,b,c]=pattern;
        if(gameBoard[a] && gameBoard[a]===gameBoard[b] && gameBoard[a]===gameBoard[c]){
            return gameBoard[a];
    }


}

if(!gameBoard.includes("")){
    return "Tie";
}
return null;
}function handleclick(event){
    const cellIndex=event.target.id;
    if(!gameBoard[cellIndex] && !gameover){
        gameBoard[cellIndex]=currentpalyer;
        const winner=checkwinn();
        if(winner){
            gameover=true;
            if(winner==="Tie"){
                message.textcontent="It is a tie!";
            }
            else{
                message.textcontent='player ${winner} wins!';
            }
            else{
                currentplayer=currentplayer==="X"?"O":"X";
                message.textcontent='player ${currentplayer} turn';
            }

            }
            }
        }
    }
}
//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));