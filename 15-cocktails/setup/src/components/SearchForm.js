import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const typed = React.useRef("");

  const searchFunction = () => {
    setSearchTerm(typed.current.value);
  };

  React.useEffect(() => {
    typed.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label id="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={typed}
            onChange={searchFunction}
          />
        </div>
      </form>
    </section>
  );
};
// const SearchForm = () => {

//   const {setSearchTerm } = useGlobalContext()
//   return (
//     <section className="section search">
//       <form className="search-form">
//         <div className="form-control">
//           <label id="name">search your favorite cocktail</label>
//           <input type="text" name="name" id="name"  onChange={setSearchTerm} />
//         </div>
//       </form>
//     </section>
//   );
// };

export default SearchForm;
