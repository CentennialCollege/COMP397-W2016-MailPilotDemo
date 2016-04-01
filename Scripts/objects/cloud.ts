module objects {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("cloud");
            
           this._reset(this._topBounds);
           this.name = "cloud";
           this.soundString = "thunder";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if(this.y >= value) {
                this._reset(this._topBounds);
            }
        }
        
        // reset the cloud offscreen
        protected _reset(value:number):void {
            this._speed.y = Math.floor(Math.random() * 5) + 5;
            this._speed.x = Math.floor(Math.random() * 4) - 2;
            
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cloud down the screen
            this.y += this._speed.y;
            this.x += this._speed.x;
            this._checkBounds(this._bottomBounds);
        }
    }
}