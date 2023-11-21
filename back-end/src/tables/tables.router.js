const router = require("express").Router({ mergeParams: true });
const controller = require("./tables.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);

router
  .route("/:table_id/seat")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;