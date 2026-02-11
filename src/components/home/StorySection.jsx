import { useNavigate } from "react-router-dom";
import { stories } from "../../data/storyData";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function StorySection() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto px-4 py-4  bg-black text-center">
      
      
      <div className="flex gap-4 overflow-x-auto max-w-7xl md:px-8">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() =>
              navigate("/products", {
                state: { storyFilters: story.filters, heading: story.title },
              })
            }
            className="min-w-[120px] cursor-pointer scroll-hidden scrollbar-hide rounded-lg border-2 hover:border-blue-600 transition overflow-hidden"
          >
            <div className="h-[120px] rounded-b-xl  overflow-hidden ">
              <img
                src={story.image}
                alt={story.title}
                className="h-full w-full object-cover hover:scale-105 transition"
              />
            </div>

            <p className="mt-2 text-center font-medium text-white">
              {story.title}
            </p>
    
          </div>
        ))}
      </div>
    </section>
  );
}
