import React from "react";

const BlogDetail = ({ title, date, content, onBack }) => {
  return (
    <div className="max-w-5xl w-full py-10 px-4">
      <button
        className="mb-6 text-blue-600 hover:underline font-medium"
        onClick={onBack}
      >
        ← Back to Blog
      </button>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700 mb-6">{date}</div>
        <div className="prose prose-lg max-w-none">{content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
