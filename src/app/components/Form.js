"use client";

import addActivity from "../actions/addActivity.js";
import { useRef } from "react";
export default function Form() {
  const ref = useRef(null);
  return (
    <form
      action={async (formData) => {
        await addActivity(formData);
        ref.current.reset();
      }}
      className="bg-inherit"
      ref={ref}
    >
      <input
        name="title"
        type="text"
        className="border rounded"
        placeholder="title"
      />
      <select
        name="category"
        htmlFor="category"
        className="border rounded"
      >
        <option value="" disabled defaultValue>
          Select Category
        </option>
        <option value="workin">Workin</option>
        <option value="strivin">Strivin</option>
        <option value="thrivin">Thrivin</option>
      </select>
      <input
        name="length"
        type="number"
        className="border rounded"
        placeholder="1"
      />
      <button
        type="submit"
        className="bg-header-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
