import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export default function NewActivity() {
  const addActivity = async (data) => {
    "use server";
    const title = data.get("title");
    const category = data.get("category");
    const length = data.get("length");
    const supabase = createServerActionClient({ cookies });
    await supabase
      .from("activities")
      .insert({ id: uuidv4(), title, category, length });
  };

  return (
    <form
      action={addActivity}
      className="bg-inherit block flex space-x-4 space-y-4"
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
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
