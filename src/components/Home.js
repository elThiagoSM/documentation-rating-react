import React, { useState, useEffect } from "react";
import Rating from "rating-react";
import { FaGithub, FaStar, FaNpm } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const [githubStars, setGithubStars] = useState(null);

  useEffect(() => {
    // Fetch the GitHub repository stars count
    fetch("https://api.github.com/repos/elThiagoSM/rating-react")
      .then((response) => response.json())
      .then((data) => {
        setGithubStars(data.stargazers_count);
      })
      .catch((error) => {
        console.error("Error fetching GitHub stars:", error);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col justify-center w-full">
          <Rating size="lg" value={3} />
        </div>

        <div className="w-full">
          <div className="text-center lg:text-left mb-4">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-4 text-gray-400">
              Rating React ⭐
            </h1>
            <p className="text-base lg:text-lg text-gray-600">
              An easy-to-use rating component for user reviews.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 text-gray-400">
            <a
              href="https://github.com/elThiagoSM/rating-react"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 border border-gray-400 rounded-full shadow hover:bg-gray-400 hover:text-gray-900 transition"
            >
              <FaGithub className="mr-2" />
              GitHub{" "}
              {githubStars !== null && (
                <span className="ml-2 flex items-center">
                  <FaStar className="mr-1" /> {githubStars}
                </span>
              )}
            </a>
            <Link
              to="/documentation/getting-started"
              className="flex items-center px-6 py-2 border border-gray-400 rounded-full shadow hover:bg-gray-400 hover:text-gray-900 transition"
            >
              Documentation
            </Link>
            <a
              href="https://www.npmjs.com/package/rating-react"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-2 border border-gray-400 rounded-full shadow hover:bg-gray-400 hover:text-gray-900 transition"
            >
              <FaNpm className="mr-2" />
              NPM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
