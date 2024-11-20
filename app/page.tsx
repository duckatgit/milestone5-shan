import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Link from "next/link";
import { prefetchUseUserControllerGetOrganizations } from "@/src/generated/api/queries/prefetch";
import Organization from "./Components/Organization";
import Orchastrator from "./Components/Orchastrator";
import Room from "./Components/Room";


export default async function Home() {
  const queryClient = new QueryClient();

  await prefetchUseUserControllerGetOrganizations(queryClient);

  return (
    <main className="flex flex-col items-center justify-between px-24">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Organization />
        <Orchastrator />
        <Room />
      </HydrationBoundary>
      <Link href="/infinite-loader" className="underline">
        Go to Infinite Loader &rarr;
      </Link>
    </main>
  );
}
