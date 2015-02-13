var styles = [
    'mixins',

    'bordered-pulled',
    'core',
    'fixed-width',
    'icons',
    'larger',
    'list',
    'path',
    'rotated-flipped',
    'animated',
    'stacked'
];

module.exports = function(content) {
    this.cacheable(true);
    var config = this.exec(content, this.resourcePath);
    var start =
            "@import          \"~font-awesome/less/variables.less\";\n"
            + "@fa-font-path: \"~font-awesome/fonts/\";\n"
            + "@import          \"./font-awesome.config.less\";\n";
    source = start + styles.filter(function(style) {
        return config.styles[style];
    }).map(function(style) {
        return "@import \"~font-awesome/less/" + style + ".less\";";
    }).join("\n");
    return source;
};
