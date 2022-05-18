import { AuthorCreateForm } from "../../components/AuthorCreateForm";
import { AuthorsTable } from "../../components/AuthorsTable";
import { Header } from "../../components/Header";
import { Author } from "../../models/Author";

interface Props {
  states: {
    authors: Author[]
  }
  actions: {
    createAuthor: (firstName: string, lastName: string) => void
  }
}

function Presenter(props: Props) {
  const {
    states: { authors },
    actions: { createAuthor },
  } = props
  return (
    <div className="AuthorsPage">
      <Header />
      <div className="AuthorsTable">
        <AuthorsTable states={{ authors }} />
      </div>
      <div className="AuthorCreateForm">
        <AuthorCreateForm actions={{ createAuthor }} />
      </div>
    </div>
  );
}

export default Presenter;
