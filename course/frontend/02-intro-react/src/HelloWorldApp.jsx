import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetail } from "./components/UserDetail";
import { Book } from "./components/Book";

export const HelloWorldApp = ({ id, title, user, book }) => {
  //console.log("PROPS: ", user, id, title); // Properties
  return (
    <>
      <div>
        ID: {id}
        <Title title={title} />
        <UserDetail user={user} />
        <Book book={book} />
      </div>
    </>
  );
};

// VALORES POR DEFECTO EN PROPIEDADES (PROPS)
HelloWorldApp.defaultProps = {
  title: "Hola mundo por defecto",
  book: { name: "Example book" },
};

// VALIDANDO PROPIEDADES (PROPS)
HelloWorldApp.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  user: PropTypes.object,
  book: PropTypes.object,
};
