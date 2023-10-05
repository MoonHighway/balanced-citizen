"use client";

import addActivity from "../actions/addActivity.js";

export default function Form() {
  return (
    <form
      action={addActivity}
      className="bg-inherit flex space-x-4"
    >
      <input
        name="title"
        type="text"
        className="border rounded"
      />
      <select
        name="category"
        htmlFor="category"
        className="border rounded"
      >
        <option value="workin">Workin</option>
        <option value="strivin">Strivin</option>
        <option value="thrivin">Thrivin</option>
      </select>
      <input
        name="length"
        type="number"
        className="border rounded"
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
