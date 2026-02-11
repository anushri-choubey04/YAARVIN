export default function UploadStepDetails({ data, setData }) {
  return (
    <div className="space-y-4">
      <input
        className="w-full border p-3 rounded-lg"
        placeholder="Outfit Name"
        value={data.title}
        onChange={(e) =>
          setData({ ...data, title: e.target.value })
        }
      />

      <textarea
        className="w-full border p-3 rounded-lg"
        placeholder="Description"
        rows={4}
        value={data.description}
        onChange={(e) =>
          setData({ ...data, description: e.target.value })
        }
      />
    </div>
  );
}
