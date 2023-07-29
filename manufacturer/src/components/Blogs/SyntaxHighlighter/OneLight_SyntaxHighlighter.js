import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
SyntaxHighlighter.registerLanguage('javascript', javascript);

const OneLight_SyntaxHighlighter = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={oneLight}>
            {code}
        </SyntaxHighlighter>
    );
};

export default OneLight_SyntaxHighlighter;