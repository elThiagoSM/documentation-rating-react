import React from "react";
import Rating from "rating-react";
import CodeBlock from "./CodeBlock";

const Examples = () => {
  const handleRate = (value) => {
    alert(`Rating changed to ${value}`);
  };

  return (
    <section id="examples" className="mb-16 p-4 lg:p-8 text-left">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-gray-800">
        Examples
      </h2>

      {/* Ejemplo 1: Calificación básica con estrellas */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Basic Star Rating
        </h3>
        <Rating maxRating={5} onRate={handleRate} size="lg" />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
size="lg"
/>`}
        />
      </div>

      {/* Ejemplo 2: Calificación de caritas con colores cambiantes */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Face Rating with Changing Colors
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          iconType="faces"
          size="lg"
          defaultColor="#bdbdbd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
iconType="faces"
size="lg"
defaultColor="#bdbdbd"
/>`}
        />
      </div>

      {/* Ejemplo 3: Calificación con corazones */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Heart Rating
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          iconType="hearts"
          size="md"
          activeColor="#ff6b6b"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
iconType="hearts"
size="md"
activeColor="#ff6b6b"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 4: Calificación con pulgares arriba */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Thumbs-Up Rating
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          iconType="thumbs"
          size="sm"
          activeColor="#4caf50"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
iconType="thumbs"
size="sm"
activeColor="#4caf50"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 5: Calificación reseteable */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Resettable Star Rating
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          size="lg"
          resettable={true}
          activeColor="#ffeb3b"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
size="lg"
resettable={true}
activeColor="#ffeb3b"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 6: Calificación de solo lectura (sin media estrella) */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Read-Only Star Rating
        </h3>
        <Rating
          maxRating={5}
          value={3}
          readOnly={true}
          size="lg"
          activeColor="#fbc02d"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
value={3}
readOnly={true}
size="lg"
activeColor="#fbc02d"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 7: Calificación con el valor mostrado */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Star Rating with Displayed Value
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          size="lg"
          showValue={true}
          activeColor="#ff9800"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
size="lg"
showValue={true}
activeColor="#ff9800"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 8: Calificación deshabilitada */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Disabled Star Rating
        </h3>
        <Rating
          maxRating={5}
          value={4}
          disabled={true}
          size="lg"
          activeColor="#ff9800"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
value={4}
disabled={true}
size="lg"
activeColor="#ff9800"
defaultColor="#ddd"
/>`}
        />
      </div>

      {/* Ejemplo 9: Calificación con tooltips */}
      <div className="mb-8 lg:mb-10">
        <h3 className="text-base lg:text-lg font-medium text-gray-800 mb-3 lg:mb-4">
          Star Rating with Tooltips
        </h3>
        <Rating
          maxRating={5}
          onRate={handleRate}
          size="lg"
          tooltip={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          activeColor="#ff9800"
          defaultColor="#ddd"
        />
        <CodeBlock
          codeString={`<Rating
maxRating={5}
onRate={handleRate}
size="lg"
tooltip={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
activeColor="#ff9800"
defaultColor="#ddd"
/>`}
        />
      </div>
    </section>
  );
};

export default Examples;
