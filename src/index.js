const app = require('express')()
const PORT = 8080
const BranchService = require('./service/branchService');
const BranchDao = require('./dao/branchDao');
const bodyParser = require('body-parser');
const controller = require('./controller/branchController');
const branchLogger = require('./middleware/logger');

app.use(bodyParser.json());

const addBranchesRoute = () => {
  app.use(branchLogger.RequestLogger);
  app.post("/api/v1/branches", controller.branchControllerPost)
  app.get("/api/v1/branches/:id", controller.branchControllerGet)
  controller.setService(new BranchService(new BranchDao()));
}

app.listen(PORT, () => {
  addBranchesRoute()
})