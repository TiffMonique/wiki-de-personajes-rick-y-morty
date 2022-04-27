import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Cards/CardDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [search, setSearch] = useState("");

  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setGender={setGender}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default App;
