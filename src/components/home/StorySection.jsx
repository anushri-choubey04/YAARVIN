import { useNavigate } from "react-router-dom";
import { stories } from "../../data/storyData";


export default function StorySection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-2 px-2  bg-black text-center">
      <div className="flex gap-4 overflow-x-auto px-3 md:px-8 scrollbar-hide">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() =>
              navigate("/products", {
                state: { storyFilters: story.filters, heading: story.title },
              })
            }
            className="flex flex-col items-center min-w-[72px] cursor-pointer"
          >
            {/* STORY CIRCLE */}
            <div className="w-[72px] h-[72px] md:w-[120px] md:h-[120px] rounded-full p-[2px] bg-gradient-to-tr from-blue-900  to-white/50">
              
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover hover:scale-110 transition"
                />
              </div>

            </div>

            {/* TITLE */}
            <p className="text-white text-[14px] md:text-sm mt-1 truncate w-[70px]">
              {story.title}
            </p>
          </div>
        ))}
      </div>
      
      
    </section>
  );
}
