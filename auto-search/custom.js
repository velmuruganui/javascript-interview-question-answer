const searchBox = document.getElementById('search-box');
const suggestionsList = document.getElementById('suggestions');

let suggestions = []; // Array to store search suggestions
let currentSuggestionIndex = -1; // Index of the currently highlighted suggestion

// Function to fetch search suggestions from a data source (replace with your actual logic)
function fetchSuggestions(query) {
  // Simulate an API call or other data retrieval method
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(query.toLowerCase())
      );
      resolve(filteredSuggestions.slice(0, 5)); // Limit to top 5 suggestions
    }, 200); // Simulate a delay
  });
}

// Function to handle user input and display suggestions
function handleSearchInput(event) {
  const query = event.target.value.trim();

  if (query.length > 2) {
    fetchSuggestions(query)
      .then((filteredSuggestions) => {
        suggestionsList.innerHTML = ''; // Clear previous suggestions
        if (filteredSuggestions.length > 0) {
          currentSuggestionIndex = -1; // Reset highlighted suggestion
          filteredSuggestions.forEach((suggestion) => {
            const suggestionItem = document.createElement('li');
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', () => {
              searchBox.value = suggestion; // Select the suggestion
              suggestionsList.style.display = 'none';
            });
            suggestionsList.appendChild(suggestionItem);
          });
          suggestionsList.style.display = 'block';
        } else {
        suggestionsList.innerHTML = '<li class="not-available">No suggestions available.</li>';
          suggestionsList.style.display = 'block';
        }
      })
      .catch((error) => {
        console.error('Error fetching suggestions:', error);
      });
  } else {
    suggestionsList.style.display = 'none';
  }
}

// Function to handle keyboard navigation within suggestions
function handleKeyDown(event) {
  if (suggestionsList.style.display === 'block') {
    const suggestions = suggestionsList.querySelectorAll('li');
    if (event.key === 'ArrowDown') {
      currentSuggestionIndex = Math.min(currentSuggestionIndex + 1, suggestions.length - 1);
      suggestions.forEach((suggestion, index) => {
        suggestion.classList.remove('active');
        if (index === currentSuggestionIndex) {
          suggestion.classList.add('active');
        }
      });
    } else if (event.key === 'ArrowUp') {
      currentSuggestionIndex = Math.max(currentSuggestionIndex - 1, -1);
      suggestions.forEach((suggestion, index) => {
        suggestion.classList.remove('active');
        if (index === currentSuggestionIndex) {
          suggestion.classList.add('active');
        }
      });
    } else if (event.key === 'Enter') {
      if (currentSuggestionIndex >= 0) {
        searchBox.value = suggestions[currentSuggestionIndex].textContent;
        suggestionsList.style.display = 'none';
      }
    }
  }
}

// Event listeners
searchBox.addEventListener('input', handleSearchInput);
searchBox.addEventListener('keydown', handleKeyDown);
document.addEventListener('click', (event) => {
  if (!event.target.matches('.search-container *')) {
    suggestionsList.style.display = 'none';
  }
});

// Pre-populate suggestions if needed (replace with your data source)
suggestions = ['apple', 'banana', 'orange', 'grapefruit', 'mango', 'strawberry', 'blueberry', 'raspberry', 'kiwi', 'pineapple'];
