/**
 * @fileoverview Loosely restrict ES6 imports
 * @author Matt Goucher
 *
 * @author Guy Ellis (no-restricted-imports)
 * Heavilly inspired by no-restricted-imports
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
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

    create(context) {
        const restrictedImports = context.options;

        // if no imports are restricted we don't need to check
        if (restrictedImports.length === 0) {
            return {};
        }

        return {
            ImportDeclaration(node) {
                if (node && node.source && node.source.value) {
                    const value = node.source.value.trim();

                    restrictedImports.forEach(restricted => {
                        if (value.indexOf(restricted) !== -1) {

                            context.report(node, "'{{importName}}' import '" + restricted + "' is not allowed.", {
                                importName: value
                            });
                        }
                    });
                }
            }
        };
    }
};
