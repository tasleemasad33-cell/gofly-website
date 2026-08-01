import { createFileRoute } from "@tanstack/react-router";
import { TravelPackagesPage } from "@/components/gofly/TravelPackagesPage";

export const Route = createFileRoute("/packages/")({
  component: PackagesIndex,
});

function PackagesIndex() {
  return <TravelPackagesPage />;
}
