var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.isColliding = false;
            this._topBounds = -this.height;
            this._bottomBounds = config.Screen.HEIGHT + this.height;
            this._leftBounds = 0;
            this._rightBounds = config.Screen.WIDTH - this.width;
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if y value has met the reset criteria
            if (this.y >= value) {
                this._reset(resetValue);
            }
        };
        // Reset the Object offscreen
        GameObject.prototype._reset = function (value) {
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        GameObject.prototype.update = function () {
            var boundValue = 0;
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(boundValue);
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));

//# sourceMappingURL=gameobject.js.map
