import { createPages } from '../utils/PagesCreator';
import s from './Pagination.module.css';

export const Pagination = ({ currentPage, onClickPage, totalCount, perPage }) => {
  const pages = [1,2,3];
  const pagesCount = Math.ceil(totalCount / perPage);
  createPages(pages, pagesCount, currentPage);
  const lastPage = pages[pages.length - 1];

  return (
    <>
      <ul className="pages">
        {pages.map((page, index) => (
          <li
            key={index}
            className={currentPage === page ? 'currentPage' : 'page'}
            onClick={() => onClickPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      {currentPage === 1 ? null : (
        <button onClick={() => onClickPage(currentPage - 1)} className={s.btn}>
          Prev Page
        </button>
      )}
      {currentPage !== lastPage ? (
        <button onClick={() => onClickPage(currentPage + 1)} className={s.btn}>
          Next Page
        </button>
      ) : null}
    </>
  );
};
