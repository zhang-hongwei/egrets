class BackgroundGame extends egret.Bitmap {
    public constructor(
        root: egret.DisplayObjectContainer,
        texture: egret.SpriteSheet
    ) {
        super();
        this.texture = texture.getTexture("bg");
        root.addChild(this);
    }
}
