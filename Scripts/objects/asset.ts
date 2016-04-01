/**
 * Objects module - defines game objects which are the building blocks of the game
 * 
 * @module objects
 */
module objects {
    /**
     * Simple utility class that defines an Asset object
     * 
     * @class Asset
     */
    export class Asset {
        /**
         * @param  {string} public id
         * @param  {string} public src
         * 
         * @Constructor
         */
        constructor(public id:string, public src:string) {

        }
    }
}