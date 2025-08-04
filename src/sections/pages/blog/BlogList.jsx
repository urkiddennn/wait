import React from "react";

const BlogList = ({ posts, onSelectPost }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Blog
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Welcome to our blog! Find simple, useful articles and updates about our
        project.
      </p>
      <div className="space-y-6">
        {posts.map((post) => (
          <button
            key={post.id}
            className="w-full p-4 rounded-md text-lefts hover:shadow-lg hover:bg-blue-50 transition flex flex-col items-start"
            onClick={() => onSelectPost(post.id)}
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.summary}</p>
            <span className="mt-3 text-blue-600 text-sm font-medium hover:underline">
              Read more →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
