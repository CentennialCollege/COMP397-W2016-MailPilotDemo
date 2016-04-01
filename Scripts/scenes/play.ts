// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PRIVATE METHODS
        
        /**
         * @method _updateScore
         * @return void
         */
        private _updateScore():void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Set Cloud Count
            this._cloudCount = 3;
            livesValue = 5;
            scoreValue = 0;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
            }
            
            //added LivesLabel to the scene
            this._livesLabel = new objects.Label(
                "Lives: " + livesValue,
                "40px Consolas",
                "#ffff00",
                10, 10, false
            );
            this.addChild(this._livesLabel);
            
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#ffff00",
                390, 10, false
            );
            this.addChild(this._scoreLabel);
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._island.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            this._collision.check(this._island);
            
            this._updateScore();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}