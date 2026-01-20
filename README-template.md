# URL Shortener React Application

## Overview
This project is a URL shortener application built with React. It allows users to input long URLs and receive shortened versions, which can be easily shared.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API](#api)
- [Hooks](#hooks)
- [Utilities](#utilities)
- [Styles](#styles)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd url-shortener-react
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the app in your default web browser at `http://localhost:3000`.

## Components
- **UrlForm**: A form for users to input URLs they want to shorten.
- **UrlList**: Displays a list of shortened URLs.
- **ShortenButton**: A button to trigger the URL shortening process.

## API
The application interacts with a URL shortening API to convert long URLs into shortened versions. The API functions are defined in `src/api/shorten.js`.

## Hooks
- **useLocalStorage**: A custom hook for managing local storage, allowing the app to persist shortened URLs.

## Utilities
- **validators**: Contains utility functions for validating URLs before submission.

## Styles
The main styles for the application are defined in `src/styles/main.css`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.