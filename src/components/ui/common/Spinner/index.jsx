import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";

const Spinner = () => {
  const loading = useSelector((state) => state.loading.loading);
  return (
    loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
        <FadeLoader color="#3B82F6" loading={loading} size={10} />
      </div>
    )
  );
};

export default Spinner;
