# Quickstart: Local Development

This project is a static website built with HTML and CSS. No complex setup is required.

## Prerequisites

- A modern web browser (e.g., Chrome, Firefox).
- A code editor (e.g., VS Code).
- A simple local web server to preview the files.

## Running the Website Locally

The easiest way to run the website locally is to use a simple server that can serve static files.

### Using `five-server` (Recommended)

If you have Node.js and npm installed, you can use `five-server` for live reloading.

1.  **Install `five-server`**:
    ```bash
    npm install -g five-server
    ```

2.  **Start the server**:
    Navigate to the root directory of this project in your terminal and run:
    ```bash
    five-server
    ```

This will open the website in your default browser and automatically reload the page whenever you save a change to an HTML or CSS file.

### Using Python's Built-in Server

If you have Python installed, you can use its simple HTTP server.

1.  **Start the server**:
    Navigate to the root directory of this project in your terminal and run:
    ```bash
    python -m http.server
    ```

2.  **Open in browser**:
    Open your web browser and go to `http://localhost:8000`.

    *Note: This method does not provide automatic live reloading.*

## Project Structure

-   All HTML files are in the root directory.
-   All styles are in `css/style.css`.
-   All images are in `assets/images/`.
