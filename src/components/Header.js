import React, { useState } from "react";
import { Container, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import { fetchRecipeData } from "../services/RecipeService";

function Header() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetchRecipeData(query);
      setRecipes(response.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand className="custom-brand">Recipe Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
