import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { StriveBox } from "./components/StriveBox";
import { ThriveBox } from "./components/ThriveBox";
import { WorkBox } from "./components/WorkBox";
import Form from "./components/Form";
import { BalanceBoard } from "./components/BalanceBoard";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: activities } = await supabase
    .from("activities")
    .select();

  const strive = activities
    .filter((activity) => activity.category === "strivin")
    .reduce((a, c) => a + c.length, 0);
  const work = activities
    .filter((activity) => activity.category === "workin")
    .reduce((a, c) => a + c.length, 0);
  const thrive = activities
    .filter((activity) => activity.category === "thrivin")
    .reduce((a, c) => a + c.length, 0);
  const total = strive + work + thrive;
  const hoursLeft = 24 - total;

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
              <h2 className="text-xl">
                Add a new activity
              </h2>
              <Form />
            </div>
            <div>
              <h2 className="leading-loose text-xl">
                {total} hours used, {hoursLeft} hours left
              </h2>
            </div>
            <div className="flex space-x-6">
              <WorkBox className="flex-1" total={work} />
              <StriveBox
                className="flex-1"
                total={strive}
              />
              <ThriveBox
                className="flex-1"
                total={thrive}
              />
            </div>
            <BalanceBoard />
          </SignedIn>
        </div>
      </main>
    </>
  );
}
