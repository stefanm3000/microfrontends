interface PaginationProps {
  totalPages: number;
  currentPage: number;
  LinkComponent: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    className?: string;
  }>;
  prevHref: string;
  nextHref: string;
}

export function Pagination({
  totalPages,
  currentPage,
  LinkComponent,
  prevHref,
  nextHref,
}: PaginationProps) {
  const visiblePages = getVisiblePages({ currentPage, totalPages });

  if (totalPages <= 1) return null;

  const showPrev = currentPage > 1;
  const showNext = currentPage < totalPages;

  return (
    <div className="flex items-center justify-center space-x-2">
      {showPrev && (
        <LinkComponent
          href={prevHref}
          className="px-3 py-2 bg-black-50/50 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
        >
          prev
        </LinkComponent>
      )}

      {visiblePages.map((page, index) => (
        <div key={index}>
          {page === "..." ? (
            <span className="px-3 py-2 text-gray-500 ">...</span>
          ) : (
            <LinkComponent
              href={page as string}
              className={`px-3 py-2 rounded-lg transition-colors  ${
                currentPage === page
                  ? "bg-white text-black font-semibold"
                  : "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              {page}
            </LinkComponent>
          )}
        </div>
      ))}

      {showNext && (
        <LinkComponent
          href={nextHref}
          className="px-3 py-2 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors "
        >
          next
        </LinkComponent>
      )}
    </div>
  );
}

const getVisiblePages = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, "...");
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push("...", totalPages);
  } else {
    rangeWithDots.push(totalPages);
  }

  return rangeWithDots;
};
