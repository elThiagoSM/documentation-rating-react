import React from "react";

const Props = () => {
  return (
    <section id="props" className="mb-16 p-8 text-left">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Props</h2>
      <p className="text-lg font-medium text-gray-800 mb-4">
        The <span className="font-semibold">Rating</span> component accepts the
        following props:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-max w-full table-auto text-left mb-8 border border-gray-300">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border px-4 py-2">Prop</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="border px-4 py-2">maxRating</td>
              <td className="border px-4 py-2">number</td>
              <td className="border px-4 py-2">
                Maximum number of icons for the rating.
              </td>
              <td className="border px-4 py-2">5</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">onRate</td>
              <td className="border px-4 py-2">function</td>
              <td className="border px-4 py-2">
                Callback function that is called when the user selects a rating.
              </td>
              <td className="border px-4 py-2">undefined</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">value</td>
              <td className="border px-4 py-2">number</td>
              <td className="border px-4 py-2">
                The rating value (if controlled externally).
              </td>
              <td className="border px-4 py-2">undefined</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">readOnly</td>
              <td className="border px-4 py-2">bool</td>
              <td className="border px-4 py-2">
                If true, the component is not interactive.
              </td>
              <td className="border px-4 py-2">false</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">disabled</td>
              <td className="border px-4 py-2">bool</td>
              <td className="border px-4 py-2">
                If true, the component is disabled.
              </td>
              <td className="border px-4 py-2">false</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">size</td>
              <td className="border px-4 py-2">string</td>
              <td className="border px-4 py-2">
                Icon size. Options: "sm", "md", "lg".
              </td>
              <td className="border px-4 py-2">"md"</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">defaultColor</td>
              <td className="border px-4 py-2">string</td>
              <td className="border px-4 py-2">Color for inactive icons.</td>
              <td className="border px-4 py-2">"#ffc107"</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">activeColor</td>
              <td className="border px-4 py-2">string</td>
              <td className="border px-4 py-2">Color for active icons.</td>
              <td className="border px-4 py-2">undefined</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">showNoRatingGiven</td>
              <td className="border px-4 py-2">bool</td>
              <td className="border px-4 py-2">
                Shows a message if no rating has been given.
              </td>
              <td className="border px-4 py-2">false</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">disabledOpacity</td>
              <td className="border px-4 py-2">number</td>
              <td className="border px-4 py-2">
                Opacity of the component when disabled.
              </td>
              <td className="border px-4 py-2">0.5</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">resettable</td>
              <td className="border px-4 py-2">bool</td>
              <td className="border px-4 py-2">
                Allows resetting the rating to 0.
              </td>
              <td className="border px-4 py-2">false</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">tooltip</td>
              <td className="border px-4 py-2">array of strings</td>
              <td className="border px-4 py-2">
                Tooltips to display when hovering over the icons.
              </td>
              <td className="border px-4 py-2">[]</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">iconType</td>
              <td className="border px-4 py-2">string</td>
              <td className="border px-4 py-2">
                Type of icon to display. Options: "stars", "hearts", "thumbs",
                "faces".
              </td>
              <td className="border px-4 py-2">"stars"</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">ariaLabel</td>
              <td className="border px-4 py-2">string</td>
              <td className="border px-4 py-2">
                ARIA label for accessibility.
              </td>
              <td className="border px-4 py-2">"rating"</td>
            </tr>
            <tr className="border-t">
              <td className="border px-4 py-2">showValue</td>
              <td className="border px-4 py-2">bool</td>
              <td className="border px-4 py-2">
                Displays the current rating value.
              </td>
              <td className="border px-4 py-2">false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Props;
