import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function BalanceBoard() {
  return (
    <div>
      <ColorBox />
    </div>
  );
}
function ColorBox() {
  return (
    <div className="w-64 h-64 bg-blue-500 rounded-lg shadow-lg p-4">
      <p className="text-white">ok</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <main className="bg-image min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignedOut>
            <div>
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
            <BalanceBoard />
          </SignedIn>
        </div>
      </main>
    </>
  );
}
