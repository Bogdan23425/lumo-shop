import { CatalogClient } from "@/app/(public)/catalog/CatalogClient";

type CategoryPageProps = {
  params: { category: string };
};

export default function Page({ params }: CategoryPageProps) {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <CatalogClient initialCategory={params.category} />
      </div>
    </section>
  );
}
