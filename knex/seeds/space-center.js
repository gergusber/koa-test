/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const spaceCenterData = require('../../data/space-centers');
const { getPlanets } = require('../queries/queries');
exports.seed = async (knex) => {

  // Deletes ALL existing entries
  await knex('space-center').del();
  // Inserts seed entries
  // console.log(spaceCenterData[1])
  let insert = [];
  for (const dat of spaceCenterData) {

    const planet = await getPlanets({ code: dat.planet_code });
    // console.log(planet)
    insert.push({
      name: dat.name,
      uid: dat.uid,
      description: dat.description,
      latitude: dat.latitude,
      longitude: dat.longitude,
      planets_id: planet.id
    });

  }
  return knex('space-center').insert(insert);
}