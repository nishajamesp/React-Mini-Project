import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setFilter, resetFilters } from "../redux/recipeSlice";

function FilterBar() {
  const dispatch = useDispatch();
  const { searchTerm, filters } = useSelector((state) => state.recipes);

  const selectClass = "text-sm border border-gray-200 rounded-full px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-300";

  return (
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
      {/* Search */}
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes or ingredients..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="w-full md:w-1/2 px-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <select value={filters.cuisine} onChange={(e) => dispatch(setFilter({ key: "cuisine", value: e.target.value }))} className={selectClass}>
          {["All","Italian","American","Indian","Greek","Mexican","Chinese","Japanese"].map(c => <option key={c}>{c}</option>)}
        </select>

        <select value={filters.diet} onChange={(e) => dispatch(setFilter({ key: "diet", value: e.target.value }))} className={selectClass}>
          {["All","Vegan","Vegetarian","Non-Veg"].map(d => <option key={d}>{d}</option>)}
        </select>

        <select value={filters.difficulty} onChange={(e) => dispatch(setFilter({ key: "difficulty", value: e.target.value }))} className={selectClass}>
          {["All","Easy","Medium","Hard"].map(d => <option key={d}>{d}</option>)}
        </select>

        <select value={filters.time} onChange={(e) => dispatch(setFilter({ key: "time", value: e.target.value }))} className={selectClass}>
          <option value="all">Any Time</option>
          <option value="15">Under 15 min</option>
          <option value="30">Under 30 min</option>
          <option value="60">Under 60 min</option>
        </select>

        <button onClick={() => dispatch(resetFilters())} className="text-sm text-orange-600 font-medium hover:underline">
          Reset
        </button>
      </div>
    </div>
  );
}

export default FilterBar;