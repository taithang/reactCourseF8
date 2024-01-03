import React from "react";

function Input({ richText, ...props }) {
  return <div>{richText ? <textarea {...props} /> : <input {...props} />}</div>;
}

export default Input;
