// AUTO LOAD ALL IMAGES FROM assets FOLDER
const modules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
});

// Create map:  "Hero/lehnga1.png" → actual bundled path
const images = {};

for (const path in modules) {
  const key = path
    .replace("../assets/", "")
    .replace(/\.(png|jpg|jpeg|webp|avif)$/i, (ext) => ext);

  images[key] = modules[path].default;
}

export default images;
