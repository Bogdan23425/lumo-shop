import { CatalogClient } from "./CatalogClient";

export default function Page() {
  return (
    <section className="py-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <CatalogClient />
      </div>
    </section>
  );
}
