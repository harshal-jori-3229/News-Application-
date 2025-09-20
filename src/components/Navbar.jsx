import React, { useState, useRef } from 'react';
import './Navbar.css'; // new css file

export const Navbar = ({ setCategory, setSearchQuery }) => {
  const [localQuery, setLocalQuery] = useState('');
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setSearchQuery(value.trim());
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(localQuery.trim());
  };

  return (
    <nav className="custom-navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <span className="brand-badge">News Mag</span>
        </a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links + search */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('business')}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('technology')}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory('sports')}
              >
                Sports
              </div>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex search-form" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 search-input"
              value={localQuery}
              onChange={handleChange}
              type="search"
              placeholder="Search by title..."
              aria-label="Search"
            />
            <button className="btn btn-gradient me-2" type="submit">
              Search
            </button>
            {/* <button
              className="btn btn-clear"
              onClick={() => {
                setLocalQuery('');
                setSearchQuery('');
              }}
              type="button"
            >
              Clear
            </button> */}
          </form>
        </div>
      </div>
    </nav>
  );
};
