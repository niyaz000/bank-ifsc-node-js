
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
  res.status(200).json(branch.get())
}

module.expors = {
  branchControllerGet,
  setService
}
