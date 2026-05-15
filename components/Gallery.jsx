import Image from "next/image";

const galleryImages = [
  "/images/gallery-1.webp",
  "/images/gallery-2.webp",
  "/images/gallery-3.webp",
  "/images/gallery-4.webp",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#111111]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-[#ff4d6d] uppercase tracking-[3px] font-semibold mb-4">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A Glimpse Of The Experience
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl"
            >
              <Image
  src={image}
  alt="Gallery"
  width={500}
  height={500}
  className="w-full h-72 object-cover hover:scale-110 transition duration-500"
/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
