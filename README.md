# 🌐Gif Searcher App

Welcome to the gif searcher, a web application designed for retrieving gif using Giphy API.

## 🔍Project Overview

This project is inspired by the work of garu2, available at [Gif-Expert-App](https://github.com/garu2/Gif-Expert-App). It was develop following the tutorial, with few changes in style and dotenv usage.

## 💻Tutorial

Garu2 has prepared the project guide, which serves has template. This is available in a video format. Check out the tutorial [here](https://youtu.be/_z70JUP0mIQ).
[![tutorial](https://img.youtube.com/vi/_z70JUP0mIQ/mqdefault.jpg)](https://youtu.be/_z70JUP0mIQ)

## 🦾Project Enhancements

I have made some enhancements to the original project, including:

* **Style:** add a header and footer, buttons, different colors and showing order.

* **Dotenv:** use dotenv to store the api key and use it on react api request.

## 📦Getting Started

To run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/NickEsColR/AppClima-API-JavaScript.git
    ```

2. Change into the project directory:

    ```bash
    cd AppClima-API-JavaScript
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Install dotenv:

   ```bash
   npm install dotenv
   ```

5. create .env file in root directory and write

   ```
    VITE_GIPHY_KEY = "your giphy api key"
    VITE_GIPHY_URL = "https://api.giphy.com/v1/gifs/search"
   ```

6. Start the development server:

    ```bash
    npm start
    ```

7. Open your preferred web browser and navigate to `http://localhost:3000` to view the application.

## ⚙Technologies

* [Vitejs](https://vitejs.dev/)
* [React 18](https://reactjs.org/)

## 🧩API

* [Giphy](https://developers.giphy.com/)

## 🗃Acknowledgements

I extend my gratitude to garu2 for the tutorial, which follow up allows the development of this project.
