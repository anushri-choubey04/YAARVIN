export default function UploadFooter({ onBack, onNext, isLast }) {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onBack}
        className="px-4 py-2 border rounded-lg"
      >
        Back
      </button>

      <button
        onClick={onNext}
        className="px-6 py-2 bg-black text-white rounded-lg"
      >
        {isLast ? "Submit" : "Next"}
      </button>
    </div>
  );
}
