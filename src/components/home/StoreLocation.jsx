import images from "../../utils/images";


export default function StoreLocation() {
  return (
    <div className="container-location">
      {/* Mobile-only section */}
      <section
        id="store-location"
        className="block md:hidden bg-black/95   mx-auto  text-center px-4 py-4"
      >
        {/* Store Icon */}
        <div className="flex justify-center mb-4">
          <img
            src={images["StoreLocation/store.png"]}
            alt="Store Icon"
            className="w-16 h-16"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white hover:text-blue-600 transition">
          Visit our store
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-2 mb-6 text-sm leading-relaxed">
          Walk-in to our store for the services <br />
          Laundry, Give and borrow clothes in rent.
        </p>

        {/* Video */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <video
            controls
            className="w-full h-60 object-cover"
          >
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
}