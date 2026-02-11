export default function SwipeGallery({ images }) {
  return (
    <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className="snap-center min-w-full h-[420px] object-cover rounded-2xl"
        />
      ))}
    </div>
  );
}