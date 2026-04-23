import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — bookyourshow" },
      { name: "description", content: "Get in touch with bookyourshow support." },
    ],
  }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-muted-foreground">Email: support@bookyourshow.net</p>
        <p className="text-muted-foreground">Phone: +91 1800-123-4567</p>
      </div>
    </Layout>
  ),
});
