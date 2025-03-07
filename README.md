# Movie App

A movie application built using Vite, React, TypeScript, and Material UI. The app allows users to explore TV shows, view details, and add favorites using local storage. It also provides features like sorting, filtering, and pagination to enhance the user experience.

## Features

- **Home Page**: Display a paginated list of TV shows with title, poster, rating, and genre. Includes filters by genre and status.
- **Favorites Page**: List all favorited TV shows stored in Local Storage.
- **Overview Page**: Show detailed information about a selected TV show including poster, full description, rating, genres, and more.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Dark/Light Mode**: Users can toggle between light and dark themes.
- **Pagination**: Supports pagination with numbered pages and ellipsis for large data sets.
- **Sorting**: Sort TV shows by name or premiere date.
- **Filtering**: Filter TV shows by genre and status.

## Tech Stack

- **Frontend**: 
  - React
  - TypeScript
  - SCSS for additional styling
  - Material UI for UI components
  - Vite for bundling and fast development
- **API**: TVMaze API for fetching TV show data
- **State Management**: React Context for theme and favorites management
- **Styling**: Global and component-level SCSS

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/moharso/movie-app.git
cd movie-app
npm install
