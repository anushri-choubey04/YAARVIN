import PageHeader from "../../components/common/PageHeader";

export default function Returns() {
  return (
    <section className="min-h-screen bg-slate-100  pb-24">
      <PageHeader title="Returns" />

      <div className="bg-white rounded-xl gap-4  p-4 md:m-6 m-4 md:mx-12 shadow ">
        <p className="font-medium">Party Gown</p>
        <p className="text-sm text-gray-500">
          Pickup scheduled for 18 Jan
        </p>

        <span className="inline-block mt-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
          Pickup Pending
        </span>
      </div>
    </section>
  );
}
