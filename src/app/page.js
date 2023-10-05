import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function WorkBox() {
  return (
    <div className="w-64 h-64 bg-swirl-green rounded-lg shadow-lg p-4">
      <p className="text-white text-2xl">Workin'</p>
      <p className="text-white text-6xl text-center leading-loose">
        3
      </p>
    </div>
  );
}

function StriveBox() {
  return (
    <div className="w-64 h-64 bg-swirl-orange rounded-lg shadow-lg p-4">
      <p className="text-white text-2xl">Strivin'</p>
      <p className="text-white text-6xl text-center leading-loose">
        9
      </p>
    </div>
  );
}

function ThriveBox() {
  return (
    <div className="w-64 h-64 bg-swirl-red rounded-lg shadow-lg p-4">
      <p className="text-white text-2xl">Thrivin'</p>
      <p className="text-white text-6xl text-center leading-loose">
        12
      </p>
    </div>
  );
}

function BalanceBoard() {
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
            Length
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="h-24 border-gray-300 border-b">
          <td className="pl-8 pr-6 text-left text-sm">
            Swimming
          </td>
          <td className="pr-6 text-left text-sm">
            Recreation
          </td>
          <td className="pr-6 text-left text-sm">
            30 mins
          </td>
        </tr>
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
            <div className="flex space-x-4">
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
