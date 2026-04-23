import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — bookyourshow" }] }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          We respect your privacy. This page describes what data we collect and how we use it.
        </p>
      </div>
    </Layout>
  ),
});
