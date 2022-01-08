import { Button } from "components/buttons";
import { Input } from "components/forms";
import { useState } from "react";
import "./SearchForm.scss";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  // TODO: use search params

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="SearchForm" onSubmit={handleSearchSubmit}>
      <Input
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        autoFocus
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
