import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  const initialQuery = params.get("query") || "";
  const [query, setQuery] = useState(initialQuery);

  const suggestions = [
    "Saree",
    "Lehenga",
    "Kurta",
    "Sherwani",
    "Party Wear",
    "Western Dress",
    "Wedding Outfit",
  ];

  const products = [
    { id: 1, title: "Red Saree" },
    { id: 2, title: "Royal Lehenga" },
    { id: 3, title: "Black Sherwani" },
    { id: 4, title: "Party Wear Dress" },
  ];

  const filteredSuggestions =
    query.trim() === ""
      ? []
      : suggestions.filter((s) =>
          s.toLowerCase().includes(query.toLowerCase())
        );

  const filteredProducts = useMemo(() => {
    if (!query) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const handleSearch = (value) => {
    setQuery(value);
    setParams({ query: value });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* ===== AJIO STYLE HEADER ===== */}
      <header className="sticky top-0 z-50 bg-black text-white px-4 py-4 border-b">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">
          {/* BACK */}
          <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>

          {/* SEARCH BAR */}
          <div className="relative flex-1">
            <i className="fas fa-search absolute left-0 top-1/2 -translate-y-1/2 text-gray-800" />

            <input
              autoFocus
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by product, brand or category"
              className="w-full pl-7 pr-8 py-2 text-base outline-none border text-black"
            />

            {/* CLEAR BUTTON */}
            {query && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-black"
              >
                ✕
              </button>
            )}

            {/* SUGGESTIONS */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute left-0 right-0 bg-white text-black mt-1 border shadow-lg z-40">
                {filteredSuggestions.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 text-sm cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSearch(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ===== RESULTS ===== */}
      <div className="max-w-6xl mx-auto text-white px-4 py-6">
        <p className="text-sm text-white mb-4">
          {filteredProducts.length} results found
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="border p-4 rounded hover:shadow"
            >
              {p.title}
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
