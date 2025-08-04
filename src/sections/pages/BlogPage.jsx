import Header from "../../components/Header";
import { useState } from "react";
import BlogList from "./blog/BlogList";
import BlogDetail from "./blog/BlogDetail";

const samplePosts = [
  {
    id: 1,
    title: "Getting Started with Our App",
    summary:
      "Learn how to quickly set up and use our application. We cover the basics so you can get productive fast.",
    date: "2024-06-01",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2">
          Getting Started with Our App
        </h2>
        <p className="mb-4">
          Welcome! This guide will help you set up our app in just a few steps:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li>Download and install the app from our website.</li>
          <li>Create your account and log in.</li>
          <li>Explore the dashboard and start your first project.</li>
        </ol>
        <p>
          If you need help, check our documentation or reach out to support!
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Top 5 Coding Tips",
    summary:
      "Improve your workflow with these simple coding tips. Whether you're a beginner or experienced, these can help!",
    date: "2024-06-02",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2">Top 5 Coding Tips</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Write clear and concise code comments.</li>
          <li>Use version control for all your projects.</li>
          <li>Test your code frequently.</li>
          <li>Keep learning new technologies.</li>
          <li>Refactor code for readability and performance.</li>
        </ul>
        <p>
          These tips will help you become a better developer and work more
          efficiently!
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Project Updates",
    summary:
      "Stay informed about the latest changes and features added to our project. We keep things transparent and easy to follow.",
    date: "2024-06-03",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-2">Project Updates</h2>
        <p className="mb-4">Here are the latest updates:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>New user dashboard released.</li>
          <li>Performance improvements in the backend.</li>
          <li>Bug fixes and UI enhancements.</li>
        </ul>
        <p>Thank you for your feedback and support!</p>
      </>
    ),
  },
];

const BlogPage = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const selectedPost = samplePosts.find((post) => post.id === selectedPostId);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen z-10 flex flex-col items-center justify-start">
        {selectedPostId === null ? (
          <BlogList posts={samplePosts} onSelectPost={setSelectedPostId} />
        ) : (
          <BlogDetail
            title={selectedPost.title}
            date={selectedPost.date}
            content={selectedPost.content}
            onBack={() => setSelectedPostId(null)}
          />
        )}
      </div>
    </>
  );
};

export default BlogPage;
