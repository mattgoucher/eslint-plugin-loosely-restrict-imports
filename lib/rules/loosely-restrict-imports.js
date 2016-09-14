'use strict';

/**
 * @fileoverview Loosely restrict ES6 imports
 * @author Matt Goucher
 *
 * @author Guy Ellis (no-restricted-imports)
 * Heavilly inspired by no-restricted-imports
 */
module.exports = {
    meta: {
        docs: {
            description: 'Loosely disallow specified modules when loaded by `import`',
            category: 'ECMAScript 6',
            recommended: false
        },

        schema: {
            type: 'array',
            items: {
                type: 'string'
            },
            uniqueItems: true
        }
    },

    create: function create(context) {

        // No options provided
        if (!context.options || !context.options.length) {
            return {};
        }

        return {
            ImportDeclaration: function ImportDeclaration(node) {
                var importStatement = void 0;

                if (!node || !node.source || !node.source.value) {
                    return {};
                }

                // Grab import value
                importStatement = node.source.value.trim();

                // Loop through imported options
                context.options.forEach(function (restricted) {
                    if (importStatement.indexOf(restricted) === -1) {
                        return {};
                    }

                    context.report(node, "'{{importStatement}}' import is restricted from being used.", {
                        importStatement: importStatement
                    });
                });
            }
        };
    }
};