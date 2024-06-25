// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('#search-button');
    const searchBar = document.querySelector('#search-bar');
  
    searchButton.addEventListener('click', handleSearch);
    searchBar.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
  
    function handleSearch() {
      const query = searchBar.value.toLowerCase().trim();
      if (query === 'travel') {
        window.location.href = 'travel.html';
      } else if (query === 'resort') {
        window.location.href = 'resort.html';
      } else if (query === 'restaurant') {
        window.location.href = 'restaurant.html';
      } else {
        alert('No page found for: ' + query);
      }
    }
  });
  

  
