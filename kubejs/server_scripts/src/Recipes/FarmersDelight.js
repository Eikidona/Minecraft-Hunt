/**
 * @author M1hono
 */
ServerEvents.recipes((event) => {
    const { farmersdelight , kubejs : { shapeless } } = event.recipes
    // shapeless('farmersdelight:chocolate_pudding', ['minecraft:milk_bucket', 'farmersdelight:cocoa_powder', 'farmersdelight:flour', 'farmersdelight:sugar', 'farmersdelight:pot']).keepIngredient('minecraft:milk_bucket')
})