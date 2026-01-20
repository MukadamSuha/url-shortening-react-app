# URL Shortener React Application

This is a simple URL shortener application built with React. It allows users to input long URLs and receive shortened versions that can be easily shared.

## Project Structure

The project is organized as follows:

```
url-shortener-react
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── index.jsx           # Entry point for the React application
│   ├── App.jsx             # Main App component
│   ├── components           # Reusable components
│   │   ├── UrlForm.jsx     # Form for inputting URLs
│   │   ├── UrlList.jsx     # Displays list of shortened URLs
│   │   └── ShortenButton.jsx # Button to trigger URL shortening
│   ├── pages
│   │   └── Home.jsx        # Home page component
│   ├── api
│   │   └── shorten.js      # API interaction for URL shortening
│   ├── hooks
│   │   └── useLocalStorage.js # Custom hook for local storage
│   ├── utils
│   │   └── validators.js    # URL validation utilities
│   └── styles
│       └── main.css        # Main CSS styles
├── package.json             # npm configuration file
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
├── README-template.md       # Template for README
├── style-guide.md           # Style guide for the project
├── design                   # Design assets
└── images                   # Image assets
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd url-shortener-react
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Input long URLs to be shortened.
- Display a list of previously shortened URLs.
- Validate URLs before submission.
- Store shortened URLs in local storage for persistence.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.