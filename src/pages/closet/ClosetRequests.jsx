import PageHeader from "../../components/common/PageHeader";

export default function ClosetRequests() {
  return (
    <>
      <PageHeader title="Rental Requests" />

      <div className="p-4 space-y-4 bg-black">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold">Designer Gown</h3>
          <p className="text-sm text-gray-500">
            Requested by Riya • 3 days
          </p>

          <div className="flex gap-3 mt-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Approve
            </button>
            <button className="border px-4 py-2 rounded-lg">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
