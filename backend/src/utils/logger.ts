import pino from "pino";

const logger = pino({
    level: process.env.LOG_LEVEL || "info",
     //TODO: transporter to storage the errors in a file with date and time of errors but now could overkill
});

export default logger;