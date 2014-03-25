define('appkit/templates/application', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<nav class=\"navbar navbar-default\" role=\"navigation\">\n\t<div class=\"navbar-header\">\n\t\t<button type=\"button\" class=\"navbar-toggle\">\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t{{#link-to 'index' classNames=\"navbar-brand\"}}Mikomos Dating{{/link-to}}\n\t</div>\n\t<div class=\"navbar-collapse collapse\" id=\"mainCollapse\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t{{#link-to 'index' tagName=\"li\"}}<a href=\"#\">Home</a>{{/link-to}}\n\t\t\t{{#link-to 'browse' tagName=\"li\"}}<a href=\"#\">Browse</a>{{/link-to}}\n\t\t\t{{#link-to 'search' tagName=\"li\"}}<a href=\"#\">Search</a>{{/link-to}}\n\t\t</ul>\n\t\t<form class=\"navbar-form navbar-right\" role=\"search\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t{{input type=\"text\" classNames=\"form-control\" placeholder=\"Search Mikomos\" value=search action=\"query\"}}\n\t\t\t</div>\n\t\t\t<button {{action \"query\"}} type=\"submit\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-search\"></span></button>\n\t\t</form>\n\t</div>\n</nav>\n<div class=\"container\">\n\t{{outlet}}\n</div>"); });

define('appkit/templates/browse', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<div class=\"row\">\n\t<div class=\"col-md-3\">\n\t\t<p class=\"lead\">Options</p>\n\t\t<div class=\"panel-group\" id=\"accordion\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n\t\t\t\t\t\t\tStates\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. \n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h4 class=\"panel-title\">\n\t\t\t\t\t\t<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n\t\t\t\t\t\t\tCountries\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-md-9\">\n\t\t<p class=\"lead\">Places</p>\n\t\t{{#each}}\n\t\t\t{{this.title}}\n\t\t\t<br>\n\t\t{{/each}}\n\t</div>\n</div>"); });

define('appkit/templates/components/pretty-color', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("Pretty Color: {{name}}\n"); });

define('appkit/templates/error', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Sorry, Something went wrong</h1>\n{{message}}\n<pre>\n{{stack}}\n</pre>\n"); });

define('appkit/templates/index', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<ul>\n{{#each}}\n  <li>{{this}}</li>\n{{/each}}\n</ul>\n"); });

define('appkit/templates/loading', ['exports'], function(__exports__){ __exports__['default'] = Ember.Handlebars.compile("<h1>Loading...</h1>\n"); });