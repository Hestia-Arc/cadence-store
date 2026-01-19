import { DOTS, usePagination } from "../hooks/usePagination";

interface PaginationProps {
  pageSize: number;
  totalLength: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination({ pageSize, totalLength, currentPage, onPageChange }: PaginationProps) {
  const siblingCount: number = 1;

  const paginationRange: (number | typeof DOTS)[] = usePagination({
    currentPage,
    totalLength,
    siblingCount,
    pageSize,
  });

  // console.log(paginationRange)

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage: number | typeof DOTS = paginationRange[paginationRange?.length - 1];

  return (
    <div className="flex gap-6">
      <button
        disabled={currentPage === 1}
        onClick={onPrevious}
        className={`${currentPage === 1 && "text-gray-400 text-opacity-50"} flex items-center justify-center bg-gray-300 rounded-xs shadow-sm px-4 text-[16px] font-semibold`}
      >
        Prev
      </button>
      <div className="flex items-center gap-2">
        {paginationRange?.map((item: number | typeof DOTS, index: number) => {
          if (item === DOTS) {
            return <div className="pagination-item dots">&#8230;</div>;
          }

          return (
            <button
              key={index}
              onClick={() => {
                if( item > currentPage) {
                  onPageChange(currentPage + 1)
                } else if( item < currentPage) {
                  onPageChange(currentPage - 1)
                }
              }}
              className={`h-full w-10 text-[18px] rounded-full p-1
                  ${(index + 1) === currentPage && "bg-gray-400 text-white"}  
                `}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        disabled={currentPage === lastPage}
        onClick={onNext}
        className={`${currentPage === lastPage && "text-gray-400 text-opacity-50"} flex items-center justify-center bg-gray-300 rounded-xs shadow-sm px-4 text-[16px] font-semibold`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
