
import "./search.css"
import {useState, useEffect} from "react"
export const SearchBar = ({apiData, setValue, value}) => {

        
      
        const onChange = (event) => {
          setValue(event.target.value);
        };
      
        const onSearch = (searchTerm) => {
          setValue(searchTerm);
          // our api to fetch the search result
          console.log("search ", searchTerm);
        };
      
        return (
          <div className="search">
            <h1>Search</h1>
      
            <div className="search-container">
              <div className="search-inner">
                <input className="search-input" type="text"  placeholder="Search for events"value={value} onChange={onChange} />
                <button onClick={() => onSearch(value)}> Search </button>
              </div>
              <div className="dropdown">
                {apiData
                  .filter((item) => {
                    const searchTerm = value.toLowerCase();
                    const fullName = item.eventname.toLowerCase();
      
                    return (
                      searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm
                    );
                  })
                  .slice(0, 10)
                  .map((item) => (
                    <div
                      onClick={() => onSearch(item.eventname)}
                      className="dropdown-row"
                      key={item.eventname}
                    >
                     <img  className="dropdown-logo" src={item.imageurl} alt="logo"  />
                     <div className="dropdown-text-flex">
                      <h1 className="dropdown-title">{item.eventname}</h1>  
                      <div className="search-date">{item.date}</div> 
                      <div className="search-venue">{item.venue.name}</div> 
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );
      }