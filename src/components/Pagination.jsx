export function Pagination({ currentPage, onPageChange }) {
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Précédent
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)}>Suivant</button>
    </div>
  );
}

export default Pagination;
