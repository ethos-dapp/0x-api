/**
 * @fileoverview Require address to be in lowercase
 * @author
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
    meta: {
        type: 'problem', // `problem`, `suggestion`, or `layout`
        docs: {
            description: 'Require address to be in lowercase',
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
        messages: {
            notLowercasedAddress: 'Address is not lowercased.',
        },
    },

    create(context) {
        const regex = /^0x[a-fA-F0-9]{40}/;
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Literal(node) {
                if (
                    typeof node.value === 'string' &&
                    regex.test(node.value) &&
                    node.value !== node.value.toLowerCase()
                ) {
                    context.report({
                        node,
                        messageId: 'notLowercasedAddress',
                    });
                }
            },
        };
    },
};
