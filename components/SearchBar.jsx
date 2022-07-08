import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the required icons
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "/styles/SearchBar.module.scss";

export default function SearchBar() {
  const [type, setType] = useState("vector");
  const [search, setSearch] = useState([]);
  const router = useRouter();

  function handleSearchEvent(e, search, type) {
    if (e.code == "Enter") {
      router.push({
        pathname: "/search",
        query: { q: search, type: type },
      });
    }
  }

  return (
    <Container className={styles.container}>
      <Row>
        {/* search type dropdown selector */}
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            title={type}
            autoClose="true"
          >
            <Dropdown.Item as="button" onClick={() => setType("vector")}>
              Vector
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setType("photo")}>
              Photo
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setType("psd")}>
              PSD
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => setType("video")}>
              Video
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        {/* search input */}
        <Col xs={7}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={(e) => handleSearchEvent(e, search, type)}
          />
        </Col>
        {/* search icon */}
        <Col>// FIX FONTAWESOME SEARCH ICON</Col>
      </Row>
    </Container>
  );
}
