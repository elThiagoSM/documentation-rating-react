import React from "react";
import CodeBlock from "./CodeBlock";

const GettingStarted = () => {
  return (
    <section id="getting-started" className="mb-16 p-4 md:p-8 text-left">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Getting Started
      </h2>

      <div className="mb-10">
        <p className="text-base md:text-lg font-medium text-gray-800 mb-4">
          Step 1: Install
        </p>
        <CodeBlock codeString="npm install rating-react" />
      </div>

      <div>
        <p className="text-base md:text-lg font-medium text-gray-800 mb-4">
          Step 2: Add the <span className="font-semibold">Rating</span>{" "}
          component to your app
        </p>
        <CodeBlock
          codeString={`import React from "react";
import Rating from "rating-react";

const YourComponent = () => {
  return (
    <div>
      <Rating />
    </div>
  );
};

export default YourComponent;
`}
        />
      </div>
    </section>
  );
};

export default GettingStarted;
