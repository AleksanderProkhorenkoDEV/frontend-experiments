import Table from "@/components/Table";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Home() {
  return (
    <>
      <h1>In this page will be load a table with data</h1>
      <Suspense  fallback={<Loading />}>
        <Table />
      </Suspense>
    </>
  );
}
