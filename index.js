enchant();

var picNumber = 18;

window.onload = function(){
    var x = 2;
    var y = 0;
    var game = new Game(320, 480); 
    game.preload('http://enchantjs.com/assets/images/chara7.gif'); 
    game.onload = function() { 
        var bear = new Sprite(32, 32); 
        bear.rotate(45);
        bear.image = 
            game.assets['http://enchantjs.com/assets/images/chara7.gif'];
        bear.frame = 12; 
        bear.addEventListener(Event.ENTER_FRAME, function() { 
            picNumber++; 
            if (picNumber >26 ) { 
                picNumber = 18;
                x +=1;
                y +=1;
                if( x > 5){
                	x -= 5;
                }
                if( y > 5){
                    y -= 5;
                }
            }
            bear.frame = picNumber; 
            bear.x += x; 
            bear.y += y;
        });
        game.rootScene.addChild(bear);
    };
    
    game.start();
};