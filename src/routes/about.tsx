import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — bookyourshow" },
      { name: "description", content: "Learn about bookyourshow, India's entertainment ticketing platform." },
    ],
  }),
  component: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-muted-foreground">
          bookyourshow is your one-stop destination for booking tickets to movies, sports, concerts, sufi nights and live events across India. Our mission is to make live entertainment accessible to everyone with a fast, reliable, and delightful booking experience.
        </p>
      </div>
    </Layout>
  ),
});
