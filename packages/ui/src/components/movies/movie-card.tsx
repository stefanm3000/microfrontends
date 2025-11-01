export type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  imdbRating: string;
  imdbVotes: string;
};

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="group bg-white/5 backdrop-blur-md rounded-lg overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform border border-white/10">
      <div className="relative aspect-[2/3]">
        {movie.Poster && movie.Poster !== "N/A" ? (
          <img
            loading="eager"
            src={movie.Poster}
            alt={movie.Title}
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-gray-500 text-center p-4">
              <p className="text-sm ">no image</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-4">
        <p className="font-semibold text-white text-sm line-clamp-2 mb-2 group-hover:text-gray-300 transition-colors ">
          {movie.Title}
        </p>

        {movie.imdbRating && (
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-yellow-400 font-bold text-xs">★</span>
            <span className="text-white font-semibold text-xs">
              {movie.imdbRating}
            </span>
            <span className="text-gray-400 text-xs">/10</span>
            {movie.imdbVotes && (
              <span className="text-gray-500 text-xs">({movie.imdbVotes})</span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-gray-400 ">
          <span>{movie.Year}</span>
          <span className="capitalize bg-white/10 text-white px-2 py-1 rounded">
            {movie.Type}
          </span>
        </div>
      </div>
    </div>
  );
}
