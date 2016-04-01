/**
 * Objects module - defines game objects which are the building blocks of the game
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * Simple utility class that defines an Asset object
     *
     * @class Asset
     */
    var Asset = (function () {
        /**
         * @param  {string} public id
         * @param  {string} public src
         *
         * @Constructor
         */
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    }());
    objects.Asset = Asset;
})(objects || (objects = {}));

//# sourceMappingURL=asset.js.map
