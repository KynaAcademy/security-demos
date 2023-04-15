const Koa = require("koa");
const errors = require("./middleware/errors");
const pg = require("./middleware/pg");
const setupViews = require("./middleware/views");
const logger = require("./utils/logger");

const PORT = process.env.PORT || 5000;

logger.info("Starting app on port:", PORT);

const app = new Koa();
setupViews(app);

const overview = require("./routes/overview");
const brokenAuth = require("./routes/broken-auth");
const sensitiveExp = require("./routes/cryptographic-failures");
const brokenAc = require("./routes/broken-ac");
const injection = require("./routes/injection");
const unsafeXSS = require("./routes/unsafe-xss");
const hacker = require("./routes/hacker");

app.use(errors);

logger.info("Connecting to PG...");
app.use(pg.connect);

app.use(overview.routes());
app.use(brokenAuth.routes());
app.use(sensitiveExp.routes());
app.use(brokenAc.routes());
app.use(injection.routes());
app.use(unsafeXSS.routes());
app.use(hacker.routes());
app.use(overview.allowedMethods());
app.use(brokenAuth.allowedMethods());
app.use(sensitiveExp.allowedMethods());
app.use(brokenAc.allowedMethods());
app.use(injection.allowedMethods());
app.use(unsafeXSS.allowedMethods());
app.use(hacker.allowedMethods());

app.use(pg.release);
logger.info("App listening on http://localhost:" + PORT);

app.listen(PORT);
