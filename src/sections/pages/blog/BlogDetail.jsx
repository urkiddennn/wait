import React from "react";

const BlogDetail = ({ title, date, content, onBack }) => {
  return (
    <div className="max-w-5xl w-full flex flex-col py-8 mx-auto">
      <button
        className="mb-6 text-blue-600 hover:underline font-medium self-start"
        onClick={onBack}
      >
        ← Back to Blog
      </button>
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <div className="text-gray-700 mb-6 text-left w-full">{date}</div>
        <div className="prose prose-lg max-w-none w-full">{content}</div>
      </div>
    </div>
  );
};

export default BlogDetail;
