import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";

const CodeBlock = ({ codeString }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="relative mb-6">
      <button
        className="absolute right-2 top-4 bg-gray-900 p-1 lg:p-2 rounded hover:bg-gray-700 text-gray-100 text-sm lg:text-base"
        onClick={handleCopy}
      >
        <FaRegCopy />
      </button>
      <div className="overflow-auto max-w-full rounded-lg">
        <SyntaxHighlighter
          language="javascript"
          style={vs}
          className="rounded-lg"
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
