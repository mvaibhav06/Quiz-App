import React from "react";

const Spinner = () => {
  return (
    <div className="container my-2">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
        <span role="status">Loading...</span>
      </button>
    </div>
  );
};

export default Spinner;
