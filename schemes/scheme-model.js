const knex = require("knex");
const options = require("../knexfile").development;
const connect = knex(options);
const schemes = connect("schemes");
const steps = connect("steps");
const find = () => schemes;
const findById = id => schemes.where({ id });
const findSteps = id =>
  schemes
    .innerJoin("steps as s")
    .where("s.scheme_id", id)
    .andWhere("schemes.id", id)
    .select("scheme_name", "step_number", "instructions");
const add = scheme => schemes.insert(scheme);
const update = (changes,id) => schemes.where({id}).update(changes)
const remove = id => schemes.where({id}).del()
module.exports = {
  add,
  find,
  findById,
  findSteps,
  update,
  remove
};
