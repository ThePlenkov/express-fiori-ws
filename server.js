const express = require("express");
const express_ui5 = require("express-sapui5");

let oConfig = {
  neoApp: require("./neo-app.json"),
  destinations: require("./neo-dest.json"),
  static: ["resources"]
};

// initialize environment variables
require("dotenv").config();
// proxy initializtion
if (process.env.HTTP_PROXY) {
  const HttpsProxyAgent = require("https-proxy-agent");
  oConfig.agent = new HttpsProxyAgent(process.env.HTTP_PROXY);
}

let app = express();

//sapui5 middleware
app.use(express_ui5(oConfig));

app.listen(process.env.PORT || 3000);
