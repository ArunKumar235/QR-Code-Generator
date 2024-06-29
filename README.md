# QR Code Generator

This Node.js application generates a QR code from a user-provided URL. The QR code is saved as a PNG image, and the URL is also saved in a text file. The project utilizes the `inquirer` package for user input, the `qr-image` package for QR code generation, and the native `fs` module for file operations.

## Features

- Prompt user to input a URL
- Generate and save QR code as a PNG image
- Save the URL in a text file

## Technologies

- Node.js
- Inquirer
- QR-Image
- File System (fs)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/qr-code-generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd qr-code-generator
    ```
3. Install the dependencies:
    ```sh
    npm i inquirer qr-image
    ```

## Usage

1. Run the application:
    ```sh
    node index.js
    ```
2. Enter the URL when prompted.

The generated QR code will be saved as `qr_img.png` in the project directory, and the URL will be saved in `URL.txt`.
