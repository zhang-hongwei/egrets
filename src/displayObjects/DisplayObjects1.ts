/*
 * @Author: zhanghongwei
 * @LastEditors: ZHW
 * @Date: 2019-04-06 22:58:10
 * @LastEditTime: 2019-04-09 12:54:45
 */

class DisplayObjects1 extends egret.DisplayObjectContainer {
   private static STEP_ROT:number = 3;
   private static STEP_SCALE:number = .03
   private _bird :egret.Bitmap;
   private _textInfo:egret.TextField;
   public constructor(){
     super();
     this.once(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
   }
   private onAddToStage (event:egret.Event){
    //    let imgLoader:egret.ImageLoader = new egret.ImageLoader();
    //    imgLoader.once(egret.Event.COMPLETE,this.imgLoadHandler,this);
    //    imgLoader.load("resource/assets/egret/cartoon.png");


       var imgLoader:egret.ImageLoader = new egret.ImageLoader;
       imgLoader.once(egret.Event.COMPLETE,this.imgLoadHandler,this);
       imgLoader.load("resource/assets/egret/cartoon.png");
   }



   private imgLoadHandler( evt:egret.Event ):void{
    /// 展示用显示对象： 白鹭小鸟
    this._bird = new egret.Bitmap( evt.currentTarget.data );
    this.addChild( this._bird );

    this._bird.anchorOffsetX = this._bird.width/2;
    this._bird.anchorOffsetY = this._bird.height/2;
    this._bird.x = this.stage.stageWidth / 2;
    this._bird.y = this.stage.stageHeight * 0.618;

    
}



   private imgLoaderHandle(evt:egret.Event){
    console.log("+++---++")
     console.log(evt.currentTarget.data);
    //  return;
        /// 展示用显示对象： 白鹭小鸟
        this._bird = new egret.Bitmap( evt.currentTarget.data );
        this.addChild( this._bird );
    //    console.log("+++---++")
    //    console.log(evt.currentTarget.data);
    //    this._bird = new egret.Bitmap(evt.currentTarget.data);
    //    this.addChild(this._bird);
    //    this._bird.anchorOffsetX = this._bird.width/2;
    //    this._bird.anchorOffsetY = this._bird.height/2;
    //    this._bird.x = this.stage.stageWidth/2;
    //    this._bird.y = this.stage.stageHeight*.618;

   }
}
