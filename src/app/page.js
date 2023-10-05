import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { StriveBox } from "./components/StriveBox";
import { ThriveBox } from "./components/ThriveBox";
import { WorkBox } from "./components/WorkBox";
import { cookies } from "next/headers";
import NewActivity from "./components/NewActivity";

async function BalanceBoard() {
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

export default function Home() {
  return (
    <>
      <main className="bg-image min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignedOut>
            <div>
              <div></div>
              <h1 className="text-3xl font-bold mb-4">
                Find More Balance
              </h1>
              <p>
                Already a balanced citizen?{" "}
                <Link
                  href="/sign-in"
                  className="text-blue-600 font-bold"
                >
                  Sign In
                </Link>
              </p>
              <p>
                Want to be a balanced citizen?{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-600 font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </SignedOut>
          <SignedIn>
            <div>
              <h2>Add a new activity</h2>
              <NewActivity />
            </div>
            <div>
              <h2 className="leading-loose">Summary</h2>
            </div>
            <div className="flex space-x-6">
              <WorkBox className="flex-1" />
              <StriveBox className="flex-1" />
              <ThriveBox className="flex-1" />
            </div>
            <BalanceBoard />
          </SignedIn>
        </div>
      </main>
    </>
  );
}
