import { DOTS, usePagination } from "../hooks/usePagination";

function Pagination({ pageSize, totalLength, currentPage, onPageChange }: any) {
  let siblingCount = 1;

  const paginationRange: any = usePagination({
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

  let lastPage: any = paginationRange[paginationRange?.length - 1];

  return (
    <div className="flex gap-6">
      <button
        disabled={currentPage === 1}
        onClick={onPrevious}
        className={`${currentPage === 1 && "text-gray-400 text-opacity-50"} flex items-center justify-center bg-gray-300 rounded-sm shadow px-4 text-[16px] font-semibold`}
      >
        Prev
      </button>
      <div className="flex items-center gap-2">
        {paginationRange?.map((item: any, index: number) => {
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
        className={`${currentPage === lastPage && "text-gray-400 text-opacity-50"} flex items-center justify-center bg-gray-300 rounded-sm shadow px-4 text-[16px] font-semibold`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
