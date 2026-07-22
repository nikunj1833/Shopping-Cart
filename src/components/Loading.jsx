import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;