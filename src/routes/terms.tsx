import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — bookyourshow" }] }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-muted-foreground">
          By using bookyourshow, you agree to our terms of service.
        </p>
      </div>
    </Layout>
  ),
});
