class GameOverF extends egret.Sprite{
    public constructor(texture:egret.SpriteSheet){
        super();
        let gameOverF:egret.Bitmap = new egret.Bitmap();
        gameOverF.texture = texture.getTexture("failed");
        this.addChild(gameOverF);
        this.width = 400;
        this.height =361;
        this.x  = (egret.MainContext.instance.stage.stage.width-this.width)/2;
        this.y  = (egret.MainContext.instance.stage.stage.height-this.height)/2;

    }
}