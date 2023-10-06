export const dynamic = "force-dynamic";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function BalanceBoard() {
  const supabase = createServerComponentClient({ cookies });
  const { data: activities } = await supabase
    .from("activities")
    .select();
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr className="w-full h-16 border-gray-300 border-b py-8">
          <th className="pl-8 text-gray-600 font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Activity
          </th>
          <th className="text-gray-600 font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Category
          </th>
          <th className="text-gray-600 font-bold pr-6 text-left text-sm uppercase tracking-wider">
            Hours
          </th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity) => (
          <tr
            key={activity.id}
            className="h-24 border-gray-300 border-b"
          >
            <td className="pl-8 pr-6 text-left text-sm">
              {activity.title}
            </td>
            <td className="pr-6 text-left text-sm">
              {activity.category}
            </td>
            <td className="pr-6 text-left text-sm">
              {activity.length}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
