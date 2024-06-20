const { $Player_ } = require("packages/net/minecraft/world/entity/player/$Player")
/**
 * 
 * event.setCanceled(boolean) whether to cancel the event.
 */
global.pmmoXp = (event) => {
    /** @type {$Player_}*/
    const player = event.getEntity()
    /** @type {string}*/
    const skill = event.skill
    /** @type {boolean}*/
    const levelup = event.levelup()
    /** @type {number}*/
    const xp = event.amountAwarded
    switch (skill) {
        case 'aginity':
            player.tell(`${xp}`)
            break;
        case '':

            break;
        default:
            break;
    }
   
}