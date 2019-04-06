class ViewManage extends egret.EventDispatcher {
    private _rootView: egret.DisplayObjectContainer;
    private _texture: egret.SpriteSheet;
    public constructor(
        root: egret.DisplayObjectContainer,
        texture: egret.SpriteSheet
    ) {
        super();
        this._rootView = root;
        this._texture = texture;

        let bg: egret.Bitmap = new egret.Bitmap();
        bg.texture = this._texture.getTexture("again");
        this._rootView.addChild(bg);
    }
}
