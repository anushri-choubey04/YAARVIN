export default function UploadStepImage({ image, setImage }) {
  return (
    <div className="space-y-4">
      <label className="font-medium">Upload Outfit Image</label>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          className="h-60 rounded-xl object-cover"
        />
      )}
    </div>
  );
}
