module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class Island extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("island");
            
           this._speed.y = 5; //island speed
           this._reset(this._topBounds);
           this.name = "island";
           this.soundString = "yay";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the island 
            // is outside the viewport         
            if(this.y >= value) {
                this._reset(this._topBounds);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {          
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the island 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        }
    }
}