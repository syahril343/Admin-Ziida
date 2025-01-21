
const TablePagination = ({ totalRows, rowsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: currentPage === page ? "blue" : "white",
            color: currentPage === page ? "white" : "black",
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default TablePagination;
