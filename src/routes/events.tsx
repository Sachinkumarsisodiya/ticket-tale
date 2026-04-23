import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "./movies";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — bookyourshow" },
      { name: "description", content: "Tickets for events, comedy shows, festivals and more." },
      { property: "og:title", content: "Events — bookyourshow" },
      { property: "og:description", content: "Discover events near you." },
    ],
  }),
  component: () => <ListPage category="events" title="All Events" />,
});
