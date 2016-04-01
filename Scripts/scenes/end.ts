// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _endLabel: objects.Label;
        private _scoreLabel: objects.Label
        private _highScoreLabel: objects.Label;
        private _restartButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }

            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            //Add Menu Label
            this._endLabel = new objects.Label(
                "GAME OVER", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);

            //Add HighScore Label
            this._highScoreLabel = new objects.Label(
                "High Score: " + highScoreValue, "40px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._highScoreLabel);

            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
    }
}