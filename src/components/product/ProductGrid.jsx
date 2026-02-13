import { useState, useMemo,useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductGrid({
  products = [],
  heading = "New In", // Trendy heading style
  enableFilters = true,
}) {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState("new");

  const [filters, setFilters] = useState({
    gender: [],
    size: [],
    maxPrice: 10000,
  });

  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (filters.gender.length)
      list = list.filter((p) => filters.gender.includes(p.gender));
    if (filters.size.length)
      list = list.filter((p) => filters.size.includes(p.size));
    list = list.filter((p) => p.price <= filters.maxPrice);
    if (sort === "hl") list.sort((a, b) => b.price - a.price);
    if (sort === "lh") list.sort((a, b) => a.price - b.price);
    return list;
  }, [filters, sort, products]);

  useEffect(() => {
  window.scrollTo(0, 0); // instant, no animation
}, []);


  return (
    <div className="bg-black text-white min-h-screen font-jakarta">
      {/* ===== HEADER: Minimal & Clean ===== */}
      <header className="sticky h-[46px] top-0 z-50 bg-black/90 backdrop-blur-md px-2 py-4 md:px-8 flex items-center justify-between border-b border-t">
        <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">
          {heading}
        </h2>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/search">
            <Search size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
          </Link>
          <Link to="/wishlist">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </header>

      {/* ===== MOBILE UTILITY BAR: Style (Sticky Bottom or Top) ===== */}
      <div className="sticky top-[57px] z-40 bg-black flex border-b border-t lg:hidden">
        <button
          onClick={() => setShowFilters(true)}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold uppercase tracking-widest border-r "
        >
          <SlidersHorizontal size={14} /> Filter
        </button>
        <div className="flex-1 relative">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="w-full bg-black text-center py-3 text-[11px] font-bold uppercase tracking-widest  appearance-none"
          >
            <option value="new">Sort By</option>
            <option value="lh">Price: Low to High</option>
            <option value="hl">Price: High to Low</option>
          </select>
          <ChevronDown
            size={12}
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
      </div>

      <div className="w-full mx-auto px-2 md:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-8">
          {/* ===== DESKTOP SIDEBAR ===== */}
          {enableFilters && (
            <aside className="hidden lg:block lg:col-span-3 sticky top-[90px] h-[calc(100vh-110px)] overflow-y-auto pr-8 space-y-10 border px-4 py-6 rounded-xl">
              <FilterBlock title="Gender">
                <div className="flex flex-col gap-4">
                  {["Women", "Men"].map((g) => (
                    <FilterCheckbox
                      key={g}
                      label={g}
                      checked={filters.gender.includes(g)}
                      onChange={() => toggleFilter("gender", g)}
                    />
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title="Size">
                <div className="grid grid-cols-3 gap-2">
                  {["XS", "S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => toggleFilter("size", s)}
                      className={`py-2 text-[10px] font-bold border transition-all ${
                        filters.size.includes(s)
                          ? "bg-white text-black border-white"
                          : "border-zinc-400 text-zinc-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </FilterBlock>

              <FilterBlock title="Price Range">
                <input
                  type="range"
                  min={0}
                  max={10000}
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: +e.target.value })
                  }
                  className="w-full h-[2px] bg-zinc-400 appearance-none accent-white cursor-pointer"
                />
                <p className="text-[10px] font-bold mt-2 text-zinc-100">
                  UP TO ₹{filters.maxPrice}
                </p>
              </FilterBlock>
            </aside>
          )}

          {/* ===== PRODUCT GRID:  2-COLUMN MOBILE ===== */}
          <main
            className={`${enableFilters ? "lg:col-span-9" : "col-span-12"} col-span-12 min-h-screen`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>

            {!filteredProducts.length && (
              <div className="py-40 text-center uppercase tracking-widest text-zinc-500 text-xs">
                No matching products found
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ===== MOBILE FILTER DRAWER: Full Screen Fashion Style ===== */}
      {showFilters && (
        <div className="fixed inset-0 bg-black z-[100] flex flex-col animate-in slide-in-from-bottom duration-300">
          <header className="px-4 py-2 flex items-center justify-between border-b ">
            <span className="font-medium text-lg uppercase tracking-[0.2em] ">
              Filters
            </span>
            <button onClick={() => setShowFilters(false)} className="p-2">
              <X size={24} />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-8 text-white">
            <FilterBlock title="Category">
              <div className="grid grid-cols-2 gap-2">
                {["Women", "Men"].map((g) => (
                  <button
                    key={g}
                    onClick={() => toggleFilter("gender", g)}
                    className={` py-2  text-[16px]  border transition-all ${
                      filters.gender.includes(g)
                        ? "bg-white text-black border-white"
                        : "border-zinc-400 text-white"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </FilterBlock>

            <FilterBlock title="Size">
              <div className="grid grid-cols-4 gap-2">
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleFilter("size", s)}
                    className={`py-2 text-[12px] font-bold border ${
                      filters.size.includes(s)
                        ? "bg-white text-black border-white"
                        : "border-zinc-400 text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </FilterBlock>
          </div>

          <div className="p-4 border-t mb-20 border-zinc-900 grid grid-cols-2 gap-4">
            <button
              onClick={() =>
                setFilters({ gender: [], size: [], maxPrice: 10000 })
              }
              className="py-4 text-[15px] font-medium border border-zinc-500"
            >
              Clear All
            </button>
            <button
              onClick={() => setShowFilters(false)}
              className="py-2 text-[15px] font-medium   bg-[#00A143] text-white"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== LUXURY UI COMPONENTS ===== */

function FilterBlock({ title, children }) {
  return (
    <div className="space-y-5">
      <h3 className="text-[15px] font-medium uppercase tracking-[0.1em] text-zinc-100">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <span
        className={`text-xs font-bold transition-colors ${checked ? "text-white" : "text-zinc-100 group-hover:text-zinc-300"}`}
      >
        {label}
      </span>
      <div
        className={`w-4 h-4 border transition-all flex items-center justify-center ${checked ? "bg-white border-white" : "border-zinc-400"}`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        {checked && <div className="w-2 h-2 bg-black" />}
      </div>
    </label>
  );
}
