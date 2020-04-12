const uuidv1 = require('uuid/v1');
const logger = require('pino')()

const XRequestIdHeader = "X-Request-ID";

const generateXReqId = (req, res) => {
  let uuid = null;
  if(req.get(XRequestIdHeader) == undefined ||
     req.get(XRequestIdHeader) == null ||
     req.get(XRequestIdHeader).trim().length == 0) {
    uuid = uuidv1();
  } else {
    uuid = req.get(XRequestIdHeader);
  }
  res.set(XRequestIdHeader, uuid);
  return uuid;
}

const getElapsedTime = (startHrTime) => {
  const elapsedHrTime = process.hrtime(startHrTime);
  return elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
}

const RequestLogger = (req, res, next) => {

  const startHrTime = process.hrtime();
  const uuid = generateXReqId(req, res);
  logger.info({"X-Request-ID": uuid,
              "PATH": req.path,
              "METHOD": req.method,
              "QUERY": req.query});

  res.on('finish', () => {
    logger.info({"X-Request-ID": uuid,
              "STATUS": res.statusCode,
              "TIME": getElapsedTime(startHrTime)});
  });

  next();
}

const ResponseLogger = (req, res, next) => {
  next();
}

module.exports = {
  RequestLogger,
  ResponseLogger
}
