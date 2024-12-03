"use client"

import { signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <h1>This is the main page</h1>
      <button onClick={() => signIn()} className="border-2 border-red-500 p-4">Sign In</button>
      <button onClick={() => signOut()} className="border-2 border-red-500 p-4">Sign Out</button>
    </div>
  );
}
