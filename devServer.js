var path = require("path");
var express = require("express");
var webpack = require("webpack");

var port = process.env.PORT || 8082;
var host = process.env.HOST || "localhost";

var env = "dev";

var webpackConfig = require("./webpack.config." + env);
var compiler = webpack(webpackConfig);
var app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "formbuilder", "index.html"));
});

app.get("/react-jsonschema-form.css", function(req, res) {
  res.sendFile(path.join(__dirname, "css", "react-jsonschema-form.css"));
});

app.listen(port, host, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Express server started...Listening at http://" + host + ":" + port);
});
