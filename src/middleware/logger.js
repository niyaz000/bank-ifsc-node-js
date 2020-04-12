const uuidv1 = require('uuid/v1');
const logger = require('pino')()

const XRequestIdHeader = "X-Request-ID";

const generateXReqId = (req) => {
  if(req.get(XRequestIdHeader) == undefined ||
     req.get(XRequestIdHeader) == null ||
     req.get(XRequestIdHeader).trim().length == 0) {
    return uuidv1();
  }
  return req.get(XRequestIdHeader);
}

const LoggerMiddleWare = (req, res, next) => {
  logger.info({XRequestIdHeader: generateXReqId(req),
              "PATH": req.path,
              "METHOD": req.method,
              "QUERY": req.query});
  next();
}

module.exports = LoggerMiddleWare;