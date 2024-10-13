import React from "react";
import CodeBlock from "./CodeBlock";
import Rating from "rating-react";

const BasicUsage = () => {
  return (
    <section id="basic-usage" className="mb-16 p-4 md:p-8 text-left">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Basic Uses
      </h2>

      <p className="text-base md:text-lg font-medium text-gray-800 mb-4">
        Here is an example of how to use the{" "}
        <span className="font-semibold">Rating</span> component:
      </p>

      <div className="my-4">
        <Rating
          maxRating={5}
          onRate={(value) => console.log(value)}
          value={3}
          size="md"
          iconType="stars"
        />
      </div>

      <CodeBlock
        codeString={`import Rating from 'rating-react';

<Rating
  maxRating={5}
  onRate={(value) => console.log(value)}
  value={3}
  size="md"
  iconType="stars"
/>`}
      />
    </section>
  );
};

export default BasicUsage;
