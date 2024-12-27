# Pokémon Search App

This app allows users to search for Pokémon by name and displays their details, including stats, types, and sprite images, using the PokéAPI freeCodeCamp Proxy.


## Live Demo

[View the live project here.](https://ahmednadeemgondal.github.io/freeCodeCamp_project_5_pokemon_search_app/)

## Features

- Fetches Pokémon data from the [PokéAPIfCCProxy](https://pokeapi-proxy.freecodecamp.rocks/api/pokemon).
- Displays:
  - Name and ID
  - Height and weight
  - Types
  - Base stats: HP, Attack, Defense, Special Attack, Special Defense, Speed
  - Sprite image

## How It Works

1. Enter the Pokémon name in the search input.
2. Click the **Search** button to fetch details from the API.
3. If the Pokémon is found:
   - Name is capitalized for readability.
   - Types are displayed as badges.
   - Stats are dynamically retrieved and shown.
   - A sprite image is displayed.
4. If the Pokémon is not found, an alert notifies the user.

## Technologies Used

- **HTML5** for layout.
- **CSS3** for styling.
- **JavaScript (ES6)** for API integration and dynamic content updates.
- **PokéAPIfCCProxy** for Pokémon data.

## Project Highlights

- Uses modern JavaScript features like `fetch`, `Promise`, and `Array.map`.
- Simplified API request and error handling.
- Dynamically updates the DOM to display Pokémon data.

## How to Use

1. Input the Pokémon name (e.g., "Pikachu").
2. Click the **Search** button.
3. View the Pokémon details below the input box.
