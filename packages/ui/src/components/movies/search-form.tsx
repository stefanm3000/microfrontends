export function SearchForm({
  query,
  onSubmit,
}: {
  query: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="max-w-2xl">
      <div className="flex gap-2">
        <input
          key={query}
          name="search"
          type="text"
          defaultValue={query}
          placeholder="Search for movies..."
          className="flex-1 px-4 py-3 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent lg:min-w-[300px]"
        />
      </div>
    </form>
  );
}
