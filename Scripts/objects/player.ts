module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _leftBounds: number;
        private _rightBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super(assets.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._leftBounds = this.width * 0.5;
            this._rightBounds = config.Screen.WIDTH - (this.width * 0.5);

            this.y = 430;
            
            // assign and play the engine sound
            this.engineSound = createjs.Sound.play("engine");
            // Loop engine sound forever
            this.engineSound.loop = -1;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x < this._leftBounds) {
                this.x = this._leftBounds;
            }

            if (this.x > this._rightBounds) {
                this.x = this._rightBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.x = stage.mouseX;
            this._checkBounds();
        }
    }
}