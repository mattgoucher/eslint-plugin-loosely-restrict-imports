/**
 * @fileoverview Loosely restrict ES6 imports
 * @author Matt Goucher
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
    meta: {
        docs: {
            description: "disallow specified modules when loaded by `import`",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: {
            type: "array",
            items: {
                type: "string"
            },
            uniqueItems: true
        }
    },

    create(context) {
        const restrictedImports = context.options;

        // if no imports are restricted we don"t need to check
        if (restrictedImports.length === 0) {
            return {};
        }

        return {
            ImportDeclaration(node) {
                if (node && node.source && node.source.value) {

                    const value = node.source.value.trim();

                    if (restrictedImports.indexOf(value) !== -1) {
                        context.report(node, "'{{importName}}' import is restricted from being used.", {
                            importName: value
                        });
                    }
                }
            }
        };
    }
};
