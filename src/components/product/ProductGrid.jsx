import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function ProductGrid({
  products = [],
  heading = "Products",
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

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 bg-black text-white border-b border-t px-4 md:px-8 py-3 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-xl">
          <i className="fas fa-arrow-left" />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg md:text-2xl text-center">
          {heading}
        </h1>

        <div className="md:hidden flex gap-2 text-lg opacity-80">
          {/* SEARCH PAGE LINK */}
          <Link to="/search" className="hover:text-blue-400 transition">
            <i className="fas fa-search" />
          </Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="hover:text-pink-400 transition">
            <i className="fas fa-heart" />
          </Link>

          {/* BAG / CART PAGE LINK */}
          <Link to="/cart" className="hover:text-blue-400 transition">
            <i className="fas fa-shopping-bag" />
          </Link>
        </div>
      </header>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* TOP BAR */}
        <div className="flex flex-wrap justify-between items-center gap-4 py-4">
          <p className="text-white text-sm">
            Showing <b>{filteredProducts.length}</b> results
          </p>

          <div className="flex items-center gap-3">
            <select
              onChange={(e) => setSort(e.target.value)}
              className="bg-black text-white border border-gray-600 px-3 py-2 rounded-lg text-sm"
            >
              <option value="new">New to Old</option>
              <option value="lh">Price Low to High</option>
              <option value="hl">Price High to Low</option>
            </select>

            {enableFilters && (
              <button
                className="bg-black text-white lg:hidden border border-gray-600 px-4 py-2 rounded-lg text-sm w-[140px]"
                onClick={() => setShowFilters(true)}
              >
                Filters
              </button>
            )}
          </div>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-12 gap-4 pb-10">
          {/* ===== DESKTOP FILTERS ===== */}
          {enableFilters && (
            <aside className="hidden lg:block col-span-3 space-y-6">
              <FilterBlock title="Gender">
                {["Women", "Men"].map((g) => (
                  <FilterCheckbox
                    key={g}
                    label={g}
                    onChange={() => toggleFilter("gender", g)}
                  />
                ))}
              </FilterBlock>

              <FilterBlock title="Size">
                {["XS", "S", "M", "L", "XL"].map((s) => (
                  <FilterCheckbox
                    key={s}
                    label={s}
                    onChange={() => toggleFilter("size", s)}
                  />
                ))}
              </FilterBlock>

              <FilterBlock title="Price">
                <input
                  type="range"
                  min={0}
                  max={10000}
                  value={filters.maxPrice}
                  onChange={(e) =>
                    setFilters({ ...filters, maxPrice: +e.target.value })
                  }
                  className="w-full"
                />
                <p className="text-sm mt-2">Up to ₹{filters.maxPrice}</p>
              </FilterBlock>
            </aside>
          )}

          {/* ===== PRODUCT GRID ===== */}
          <main className="col-span-12 lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}

            {!filteredProducts.length && (
              <p className="col-span-full text-center text-gray-400 py-16">
                No products found
              </p>
            )}
          </main>
        </div>
      </div>

      {/* ===== MOBILE FILTER DRAWER ===== */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 text-white z-50 lg:hidden">
          <div className="absolute left-0 top-0 w-72 h-full bg-gray-900 p-5 overflow-y-auto">
            <button
              className="text-xl mb-6"
              onClick={() => setShowFilters(false)}
            >
              ✕
            </button>

            <FilterBlock title="Gender">
              {["Women", "Men"].map((g) => (
                <FilterCheckbox
                  key={g}
                  label={g}
                  onChange={() => toggleFilter("gender", g)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Size">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <FilterCheckbox
                  key={s}
                  label={s}
                  onChange={() => toggleFilter("size", s)}
                />
              ))}
            </FilterBlock>

            <FilterBlock title="Price">
              <input
                type="range"
                min={0}
                max={10000}
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters({ ...filters, maxPrice: +e.target.value })
                }
                className="w-full"
              />
              <p className="text-sm mt-2">Up to ₹{filters.maxPrice}</p>
            </FilterBlock>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== REUSABLE UI ===== */

function FilterBlock({ title, children }) {
  return (
    <div className="border border-gray-700 rounded-xl p-4 space-y-2">
      <h3 className="font-semibold text-base">{title}</h3>
      {children}
    </div>
  );
}

function FilterCheckbox({ label, onChange }) {
  return (
    <label className="flex gap-2 items-center text-sm cursor-pointer">
      <input type="checkbox" onChange={onChange} />
      {label}
    </label>
  );
}
