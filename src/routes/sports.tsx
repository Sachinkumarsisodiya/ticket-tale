import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "./movies";

export const Route = createFileRoute("/sports")({
  head: () => ({
    meta: [
      { title: "Sports — bookyourshow" },
      { name: "description", content: "Book tickets for live sports events." },
      { property: "og:title", content: "Sports — bookyourshow" },
      { property: "og:description", content: "Live sports tickets." },
    ],
  }),
  component: () => <ListPage category="sports" title="Live Sports Events" />,
});
