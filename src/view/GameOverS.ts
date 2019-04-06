class GameOverS extends egret.Sprite{
    public constructor(texture:egret.SpriteSheet){
        super();
        let gameOverS:egret.Bitmap = new egret.Bitmap();
        gameOverS.texture = texture.getTexture("victory");
        this.addChild(gameOverS);
        this.width = 400;
        this.height =338;
        this.x  = (egret.MainContext.instance.stage.stage.width-this.width)/2;
        this.y  = (egret.MainContext.instance.stage.stage.height-this.height)/2;

    }
}