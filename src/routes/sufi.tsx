import { createFileRoute } from "@tanstack/react-router";
import { ListPage } from "./movies";

export const Route = createFileRoute("/sufi")({
  head: () => ({
    meta: [
      { title: "Sufi Nights — bookyourshow" },
      { name: "description", content: "Soulful sufi night performances and tickets." },
      { property: "og:title", content: "Sufi Nights — bookyourshow" },
      { property: "og:description", content: "Experience soulful sufi nights." },
    ],
  }),
  component: () => <ListPage category="sufi" title="Sufi Nights" />,
});
