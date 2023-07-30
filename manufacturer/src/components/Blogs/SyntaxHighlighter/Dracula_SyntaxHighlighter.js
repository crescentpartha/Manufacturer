import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/prism';
SyntaxHighlighter.registerLanguage('javascript', javascript);

const Dracula_SyntaxHighlighter = ({ code, language }) => {
    return (
        <SyntaxHighlighter language={language} style={dracula}>
            {code}
        </SyntaxHighlighter>
    );
};

export default Dracula_SyntaxHighlighter;