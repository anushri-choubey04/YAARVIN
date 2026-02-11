export default function UploadStepPricing({ data, setData }) {
  return (
    <div className="space-y-4">
      <input
        type="number"
        className="w-full border p-3 rounded-lg"
        placeholder="Price per day (₹)"
        value={data.price}
        onChange={(e) =>
          setData({ ...data, price: e.target.value })
        }
      />

      <p className="text-xs text-gray-500">
        Security deposit will be auto-calculated (2× rent)
      </p>
    </div>
  );
}
