import Raven from "raven-js";

function init() {
  Raven.config(
    "https://a3bdd73cc27a4e3c8e464604c77777a7@o563750.ingest.sentry.io/5704059",
    {
      release: "1-0-0",
      environment: "development-test",
    }
  ).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log,
};
