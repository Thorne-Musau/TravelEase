document.addEventListener('DOMContentLoaded', () => {
  // Sample data for featured destinations
  const featuredDestinations = [
      { name: 'Paris', image: 'paris.jpg', description: 'The City of Light' },
      { name: 'Tokyo', image: 'tokyo.jpg', description: 'A blend of the ultramodern and the traditional' },
      { name: 'New York', image: 'newyork.jpg', description: 'The city that never sleeps' },
      { name: 'Bali', image: 'bali.jpg', description: 'Island of the Gods' }
  ];

  // Sample data for testimonials
  const testimonials = [
      { name: 'John Doe', text: 'TravelEase made planning my trip a breeze!' },
      { name: 'Jane Smith', text: 'I discovered hidden gems I never knew existed.' },
      { name: 'Mike Johnson', text: 'The itinerary feature saved me so much time.' }
  ];

  // Home Page Functionality
  const carousel = document.querySelector('.carousel');
  const testimonialContainer = document.querySelector('.testimonial-container');

  if (carousel) {
      featuredDestinations.forEach(destination => {
          const destinationEl = document.createElement('div');
          destinationEl.classList.add('destination');
          destinationEl.innerHTML = `
              <img src="${destination.image}" alt="${destination.name}">
              <h3>${destination.name}</h3>
              <p>${destination.description}</p>
          `;
          carousel.appendChild(destinationEl);
      });
  }

  if (testimonialContainer) {
      testimonials.forEach(testimonial => {
          const testimonialEl = document.createElement('div');
          testimonialEl.classList.add('testimonial');
          testimonialEl.innerHTML = `
              <p>"${testimonial.text}"</p>
              <span>- ${testimonial.name}</span>
          `;
          testimonialContainer.appendChild(testimonialEl);
      });
  }

  // Simple form validation for search
  const searchForm = document.querySelector('.search-bar');
  if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const searchInput = searchForm.querySelector('input');
          if (searchInput.value.trim() === '') {
              alert('Please enter a destination');
          } else {
              alert(`Searching for: ${searchInput.value}`);
              // Here you would typically send this to a server or update the page
          }
      });
  }

  // Plan Your Trip form handling
  const tripPlannerForm = document.getElementById('trip-planner-form');
  if (tripPlannerForm) {
      tripPlannerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const formData = new FormData(tripPlannerForm);
          let tripDetails = '';
          for (let [key, value] of formData.entries()) {
              tripDetails += `${key}: ${value}\n`;
          }
          alert('Trip details submitted:\n\n' + tripDetails);
          // Here you would typically send this data to a server
      });
  }

  // Destinations page functionality
  const destinationsGrid = document.getElementById('destinations-grid');
  const continentFilter = document.getElementById('continent');
  const climateFilter = document.getElementById('climate');

  const destinations = [
      { name: 'Paris', image: 'paris.jpg', continent: 'europe', climate: 'temperate' },
      { name: 'Tokyo', image: 'tokyo.jpg', continent: 'asia', climate: 'temperate' },
      { name: 'New York', image: 'newyork.jpg', continent: 'north-america', climate: 'continental' },
      { name: 'Bali', image: 'bali.jpg', continent: 'asia', climate: 'tropical' },
      // Add more destinations as needed
  ];

  function renderDestinations(filteredDestinations) {
      if (destinationsGrid) {
          destinationsGrid.innerHTML = '';
          filteredDestinations.forEach(dest => {
              const destCard = document.createElement('div');
              destCard.classList.add('destination-card');
              destCard.innerHTML = `
                  <img src="${dest.image}" alt="${dest.name}">
                  <div class="info">
                      <h3>${dest.name}</h3>
                      <p>Continent: ${dest.continent}</p>
                      <p>Climate: ${dest.climate}</p>
                      <a href="#" class="btn">Learn More</a>
                  </div>
              `;
              destinationsGrid.appendChild(destCard);
          });
      }
  }

  function filterDestinations() {
      const selectedContinent = continentFilter.value;
      const selectedClimate = climateFilter.value;
      const filteredDestinations = destinations.filter(dest => 
          (!selectedContinent || dest.continent === selectedContinent) &&
          (!selectedClimate || dest.climate === selectedClimate)
      );
      renderDestinations(filteredDestinations);
  }

  if (destinationsGrid) {
      renderDestinations(destinations);
      continentFilter.addEventListener('change', filterDestinations);
      climateFilter.addEventListener('change', filterDestinations);
  }

  // Itinerary Page Functionality
  const itineraryList = document.getElementById('itinerary-list');
  
  // Sample itinerary data (in a real app, this would come from a server)
  let itineraryItems = [
      { id: 1, destination: 'Paris', startDate: '2024-06-15', endDate: '2024-06-22' },
      { id: 2, destination: 'Tokyo', startDate: '2024-08-01', endDate: '2024-08-10' },
  ];

  function renderItinerary() {
      if (itineraryList) {
          itineraryList.innerHTML = '';
          itineraryItems.forEach(item => {
              const itemElement = document.createElement('div');
              itemElement.classList.add('itinerary-item');
              itemElement.innerHTML = `
                  <h2>${item.destination}</h2>
                  <p class="dates">${item.startDate} to ${item.endDate}</p>
                  <div class="actions">
                      <button onclick="editItinerary(${item.id})">Edit</button>
                      <button onclick="deleteItinerary(${item.id})">Delete</button>
                  </div>
              `;
              itineraryList.appendChild(itemElement);
          });
      }
  }

  if (itineraryList) {
      renderItinerary();
  }

  // These functions would be implemented to handle editing and deleting itineraries
  window.editItinerary = (id) => {
      alert(`Edit itinerary with ID: ${id}`);
      // Implement edit functionality
  };

  window.deleteItinerary = (id) => {
      if (confirm('Are you sure you want to delete this itinerary?')) {
          // In a real app, you'd send a request to the server here
          itineraryItems = itineraryItems.filter(item => item.id !== id);
          renderItinerary();
      }
  };

  // Travel Tips Page Functionality
  const tipsAccordion = document.getElementById('tips-accordion');
  const travelQuiz = document.getElementById('travel-quiz');

  const tipCategories = [
      {
          title: 'Packing Tips',
          tips: [
              'Roll your clothes to save space',
              'Pack versatile clothing items',
              'Don\'t forget a power adapter'
          ]
      },
      {
          title: 'Safety Tips',
          tips: [
              'Keep important documents in a safe place',
              'Be aware of your surroundings',
              'Learn basic phrases in the local language'
          ]
      },
      // Add more categories as needed
  ];

  function renderTipCategories() {
      if (tipsAccordion) {
          tipsAccordion.innerHTML = '';
          tipCategories.forEach((category, index) => {
              const categoryElement = document.createElement('div');
              categoryElement.classList.add('tip-category');
              categoryElement.innerHTML = `
                  <h2 onclick="toggleCategory(${index})">${category.title}</h2>
                  <div class="tips">
                      <ul>
                          ${category.tips.map(tip => `<li>${tip}</li>`).join('')}
                      </ul>
                  </div>
              `;
              tipsAccordion.appendChild(categoryElement);
          });
      }
  }

  if (tipsAccordion) {
      renderTipCategories();
  }

  window.toggleCategory = (index) => {
      const category = document.querySelectorAll('.tip-category')[index];
      category.classList.toggle('active');
  };

  const quizQuestions = [
      {
          question: 'What is the capital of France?',
          options: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 'Paris'
      },
      {
          question: 'Which currency is used in Japan?',
          options: ['Yuan', 'Won', 'Yen', 'Ringgit'],
          correctAnswer: 'Yen'
      },
      // Add more questions as needed
  ];

  function renderQuiz() {
      if (travelQuiz) {
          travelQuiz.innerHTML = '';
          quizQuestions.forEach((q, index) => {
              const questionElement = document.createElement('div');
              questionElement.classList.add('quiz-question');
              questionElement.innerHTML = `
                  <p>${index + 1}. ${q.question}</p>
                  ${q.options.map(option => `
                      <label>
                          <input type="radio" name="q${index}" value="${option}">
                          ${option}
                      </label>
                  `).join('')}
              `;
              travelQuiz.appendChild(questionElement);
          });

          const submitButton = document.createElement('button');
          submitButton.id = 'quiz-submit';
          submitButton.textContent = 'Submit Quiz';
          submitButton.addEventListener('click', checkQuizAnswers);
          travelQuiz.appendChild(submitButton);

          const resultElement = document.createElement('div');
          resultElement.id = 'quiz-result';
          travelQuiz.appendChild(resultElement);
      }
  }

  if (travelQuiz) {
      renderQuiz();
  }

  function checkQuizAnswers() {
      let score = 0;
      quizQuestions.forEach((q, index) => {
          const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
          if (selectedAnswer && selectedAnswer.value === q.correctAnswer) {
              score++;
          }
      });

      const resultElement = document.getElementById('quiz-result');
      resultElement.textContent = `You scored ${score} out of ${quizQuestions.length}!`;
  }
});