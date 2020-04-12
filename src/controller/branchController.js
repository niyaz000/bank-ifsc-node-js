
const setService = (service) => {
  this.service = service;
}

const branchControllerGet = (req, res) => {
  const id = req.params.id;
  const branch = this.service.findById(id);
  if(branch.isEmpty()) {
    res.status(404);
    return;
  }
  res.status(200).json(branch.data())
}

const branchControllerPost = (req, res) => {
  const branch = this.service.save(req.body);
  res.status(201).json(branch)
}

module.exports = {
  branchControllerGet,
  branchControllerPost,
  setService
}
