"use strict";
const appRoot = require("app-root-path");
const app = require("../app");
const PORT = process.env.PORT || 3000;

const logger = require(`${appRoot}/src/config/logger`);

app.listen(PORT, () => {
    logger.info(`${PORT} server on`);
});