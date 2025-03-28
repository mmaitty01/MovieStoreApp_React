# Movie Store App

This project is a movie store application where users can browse popular movies, search for specific titles, and add them to a shopping cart. Users can also view the cart, see the total price (with discounts for bulk purchases), and simulate a checkout process with a QR code payment method.

<p align="center"><img width="800" src = "https://github.com/user-attachments/assets/d3315b2c-fde3-4190-98c9-8953724780ab"></p>

<p align="center" >
  <a href="#Features">Features</a> •
  <a href="#Tech-Stack">Tech Stack</a> •
  <a href="#Setup-Instructions">Setup Instructions</a> •
  <a href="#Folder-Structure">Folder Structure</a> •
  <a href="#API-Details">API Details</a> •
  <a href="#How-It-Works">How It Works</a> •
  <a href="#Screenshots">Screenshots</a>
</p>

## Features

1. **Browse Popular Movies**
   - Displays a list of popular movies fetched from [The Movie Database (TMDb) API](https://www.themoviedb.org/).
   - Each movie includes its poster, title, and price.

2. **Search for Movies**
   - Users can search for movies by entering a query in the search bar.
   - Results are fetched in real-time from the TMDb API.

3. **Shopping Cart**
   - Add movies to the shopping cart.
   - View the cart with a summary of selected movies and total price.
   - Apply discounts based on the number of movies in the cart.
   - Remove movies from the cart or clear the entire cart.

4. **Checkout Process**
   - Display a QR code for payment during the checkout process.
   - Include a countdown timer to simulate a limited payment window.

5. **Responsive Design**
   - Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js, React Router
- **UI**: Tailwind CSS, custom components (`Button`, `Card`, `CardContent`)
- **Backend API**: TMDb API
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Storage**: LocalStorage for cart persistence

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mmaitty01/MovieStoreApp_React.git
   cd MovieStoreApp_React
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set your TMDb API key in MovieStore.jsx :
   ```jsx
   const API_KEY = "your_tmdb_api_key";
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

## Folder Structure

```
movie-store-app/
├── src/
│   ├── assets/        # Static assets (e.g., QR code image)
│   ├── components/    # UI components (e.g., Button, Card)
│   ├── App.css        # Styling
│   ├── App.js         # Main application
│   ├── index.js       # Entry point
│   ├── pages/         # Page components (e.g., MovieStore, CartPage)
├── public/            # Public files
├── package.json       # Project dependencies and scripts
```

### Key Files

- `App.js`: The main component that sets up routing between the `MovieStore` and `CartPage` components.
- `MovieStore.js`: Displays popular movies and search results, allowing users to add movies to the cart.
- `CartPage.js`: Displays the shopping cart with total price and discounts.
- `components/`: Contains reusable UI components like `Button` and `Card`.

## API Details

- **TMDb API**:
  - **Base URL**: `https://api.themoviedb.org/3`
  - **Endpoints Used**:
    - `GET /movie/popular`: Fetch popular movies.
    - `GET /search/movie`: Search for movies by query.
  - **API Key**: Replace the `API_KEY` constant with your own TMDb API key.

## How It Works

1. **Fetching Movies**
   - Popular movies are fetched from the TMDb API when the app loads.
   - A search query triggers a new API request to fetch relevant movie results.

2. **Adding to Cart**
   - Movies can be added to the cart, and the cart state is stored in LocalStorage to persist across sessions.

3. **Discount Calculation**
   - Discounts are applied based on the number of items in the cart:
     - 10% off for 4-5 items.
     - 20% off for more than 5 items.

4. **Checkout**
   - The checkout process simulates payment with a QR code and a 60-second timer.

## Screenshots
<p align="center"><img width="800" src = "https://github.com/user-attachments/assets/5da74f1d-ae4a-46eb-95d5-8b38a68d2e74"></p>
<p align="center"><img width="800" src = "https://github.com/user-attachments/assets/f02b5c14-d39b-498a-ac50-84c5477eaec3"></p>



