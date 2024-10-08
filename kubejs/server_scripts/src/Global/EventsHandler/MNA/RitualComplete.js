// ignore: true
// priority: 100
// This part has been divided into another project.
// const { $Player_ } = require("packages/net/minecraft/world/entity/player/$Player")
// const { extractName: Utils.extractName } = require("../../../API/Utils")

/**
 * @description A set of actions when players complete the ritual.
 * @param { $RitualCompleteEvent_ } event
 */
global.ritualComplete = (event) => {

    /** @type {string}*/
    let ritual = Utils.extractName(event.getRitual().getRegistryId().toString())
    /** @type {$Player_}*/
    let caster = event.getCaster()
    /** @type {string}*/
    let casterName = event.getCaster().getName().getString()

    switch (ritual) {
        case 'wandering_wizard':
            caster.tell(`You have completed the ritual: ${ritual}`)
            caster.tell(`Test`)
            caster.tell(`Test2`)
            break;
        case '':

            break;
        default:
            break;
    }
}