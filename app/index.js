// Generated by CoffeeScript 1.7.1

/*
	generator-joomla-admin-template

	index.coffee

	@author Sean
	
	@note Created on 2014-05-27 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
 */

(function() {
  "use strict";
  var JoomlaAdminTemplateGenerator, chalk, path, util, yeoman, yosay;

  util = require("util");

  path = require("path");

  yeoman = require("yeoman-generator");

  yosay = require("yosay");

  chalk = require("chalk");

  JoomlaAdminTemplateGenerator = yeoman.generators.Base.extend({
    init: function() {
      this.pkg = require("../package.json");
      return this.on("end", function() {
        if (!this.options["skip-install"]) {
          return this.installDependencies();
        }
      });
    },
    askFor: function() {
      var done, prompts;
      done = this.async();
      this.log(yosay("Welcome to the marvelous JoomlaAdminTemplate generator!"));
      prompts = [
        {
          name: "description",
          message: "Describe your component",
          "default": "A sample description"
        }, {
          name: "name",
          message: "What's the template's name?",
          "default": "default-value"
        }, {
          name: "authorName",
          message: "What's your name?",
          "default": "Author name"
        }, {
          name: "authorEmail",
          message: "What's your e-mail?",
          "default": "email@somedomain.com"
        }, {
          name: "authorURL",
          message: "What's your website?",
          "default": "somedomain.com"
        }, {
          name: "license",
          message: "What's the copyright license?",
          "default": "MIT"
        }, {
          type: "confirm",
          name: "includejQuery",
          message: "Use the latest version of jQuery (not joomla's 1.1.11 with migrate)?"
        }, {
          type: "confirm",
          name: "includeModernizr",
          message: "Use modernizr?"
        }, {
          type: "confirm",
          name: "sassBoilerplate",
          message: "Use my sass boilerplate to quickly create base styles? (Otherwise use LESS)"
        }
      ];
      return this.prompt(prompts, (function(props) {
        this.description = props.description;
        this.name = props.name;
        this.authorName = props.authorName;
        this.authorEmail = props.authorEmail;
        this.authorURL = props.authorURL;
        this.license = props.license;
        this.requireManageRights = props.requireManageRights;
        this.sassBoilerplate = props.sassBoilerplate;
        this.includejQuery = props.includejQuery;
        this.includeModernizr = props.includeModernizr;
        this.currentDate = (new Date()).toString();
        return done();
      }).bind(this));
    },
    app: function() {
      this.mkdir("app");
      this.mkdir("app/templates");
      this.template("_package.json", "package.json");
      return this.template("_bower.json", "bower.json");
    },
    projectfiles: function() {
      this.copy("editorconfig", ".editorconfig");
      return this.copy("jshintrc", ".jshintrc");
    },
    createLanguageFiles: function() {
      this.template("language/en-GB/_en-GB.tpl_template-name.ini", "language/en-GB/en-GB.tpl_" + this._.slugify(this.name) + ".ini");
      return this.template("language/en-GB/_en-GB.tpl_template-name.sys.ini", "language/en-GB/en-GB.tpl_" + this._.slugify(this.name) + ".sys.ini");
    },
    createTemplateInfoFiles: function() {
      return this.template("_templateDetails.xml", "templateDetails.xml");
    },
    createRootPHPFiles: function() {
      this.template("_index.php", "index.php");
      this.template("_component.php", "component.php");
      this.template("_error.php", "error.php");
      this.template("_layout-helpers.php", "layout-helpers.php");
      this.template("_cpanel.php", "cpanel.php");
      return this.template("_login.php", "login.php");
    },
    createBrowserFiles: function() {
      var file, files, _i, _len, _results;
      files = ["tile.png", "tile-wide.png", "crossdomain.xml", "browserconfig.xml", "favicon.ico", "apple-touch-icon-precomposed.png", "template_preview.png", "template_thumbnail.png"];
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.copy(file, file));
      }
      return _results;
    },
    createEmptyFolders: function() {
      var folders;
      folders = ["scripts", "styles", "styles/css", "language", "language/en-GB", "html", "bower_components"];
      return folders.forEach((function(_this) {
        return function(folderName) {
          _this.mkdir(folderName);
          return _this.template("_index.html", folderName + "/index.html");
        };
      })(this));
    },
    createStyles: function() {
      switch (this.sassBoilerplate) {
        case true:
          this.template("styles/sass/template.scss", "styles/sass/template.scss");
          this.template("styles/sass/template-rtl.scss", "styles/sass/template-rtl.scss");
          this.template("styles/sass/helpers/_icons.scss", "styles/sass/helpers/_icons.scss");
          this.copy("config.rb", "config.rb");
          break;
        default:
          this.template("styles/less/template.less", "styles/less/template.less");
          this.template("styles/less/template-rtl.less", "styles/less/template-rtl.less");
          this.template("styles/less/helpers/icomoon.less", "styles/less/helpers/icomoon.less");
          this.template("styles/less/helpers/variables.less", "styles/less/helpers/variables.less");
      }
      this.copy("styles/css/template.css", "styles/css/template.css");
      return this.copy("styles/css/template-rtl.css", "styles/css/template-rtl.css");
    }
  });

  module.exports = JoomlaAdminTemplateGenerator;

}).call(this);

//# sourceMappingURL=index.map
