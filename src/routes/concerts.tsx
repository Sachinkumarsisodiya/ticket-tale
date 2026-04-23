import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "./movies";

export const Route = createFileRoute("/concerts")({
  head: () => ({
    meta: [
      { title: "Concerts — bookyourshow" },
      { name: "description", content: "Live music concerts tickets." },
      { property: "og:title", content: "Concerts — bookyourshow" },
      { property: "og:description", content: "Book your favorite concerts." },
    ],
  }),
  component: () => <ListPage category="concerts" title="Live Concerts" />,
});
