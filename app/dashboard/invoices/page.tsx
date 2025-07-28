import { fetchRevenue } from "@/app/lib/data";

export default async function Page() {
  const aa = await fetchRevenue();
  return (
    <div>
      <p>Invoices Page</p>
    </div>
  );
}
