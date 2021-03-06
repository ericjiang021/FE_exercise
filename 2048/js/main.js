var board = new Array();

var score = 0;

$(function(){

    newgame();

})

function newgame(){
    //初始化棋盘格
    init();
    //随机生成2个数字
    gengerateANumber();
    gengerateANumber();
}

function init(){
    for (var i = 0; i < 4 ; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $('#grid-cell-'+i+'-'+j);
            // console.log(gridCell);
            gridCell.css('top',getPosTop(i,j));
            gridCell.css('left',getPosLeft(i,j));
        }
    }

    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }
    updateBorderView();
}

function updateBorderView(){
    $(".number-cell").remove();
    for (var i = 0; i < 4 ; i++) {
        for( var j = 0 ; j < 4 ; j ++ ){
            $("#grid-container").append( '<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>' );
            console.log(i,j);
            var theNumberCell = $('#number-cell-'+i+'-'+j);

            if(board[i][j] == 0){
                theNumberCell.css('width','0px');
                theNumberCell.css('height','0px');
                theNumberCell.css('top',getPosTop(i,j)+50);
                theNumberCell.css('left',getPosLeft(i,j)+50);
            }else {
                theNumberCell.css('width','100px');
                theNumberCell.css('height','100px');
                theNumberCell.css('top',getPosTop(i,j));
                theNumberCell.css('left',getPosLeft(i,j));
                theNumberCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color',getNumberColor(board[i][j]));
            }
        }
    }
}

function gengerateANumber(){
    if (nospace(board)) {
        return false;

    }else {
        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
        while(1){
            if (board[randx][randy] == 0 ) {
                break;
            }
            randx = parseInt(Math.floor(Math.random() * 4));
            randy = parseInt(Math.floor(Math.random() * 4));
        }
        var randNumber = Math.random() < 0.5 ? 2 : 4;
        board[randx][randy] = randNumber;
        showNumberWithAnimation(){}
        return true;
    }
}
