# Landing Page Project

This is a responsive landing page designed from a Figma layout using HTML, CSS, and pure JavaScript (without any libraries or frameworks). The project follows Pixel Perfect principles and includes interactive features like a marquee, custom animations, anchor buttons, and carousels as described below.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [CSS Validation](#css-validation)
- [Lighthouse Scores](#lighthouse-scores)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)


## Overview

This project demonstrates how to build a responsive landing page with Pixel Perfect precision. It includes various interactive elements such as a scrolling text marquee, animations, anchor buttons for smooth navigation, and two types of carousels.

## Features

- Responsive design following Pixel Perfect principles.
- Custom animations including a scrolling marquee.
- Anchor buttons for smooth scroll navigation to respective sections.
- Infinite loop carousel for participant cards with automatic slide changes every 4 seconds.
- Non-looping carousel for steps with manual slide change only.

## Prerequisites

- Use HTML, CSS, and pure JavaScript without any libraries or frameworks.
- Avoid duplicating text content between mobile and desktop versions.

## CSS Validation

<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="CSS Valid!" />
    </a>
</p>


## Lighthouse Scores

| Category       | Score |
| -------------- | ----- |
| Performance    | 98    |
| Accessibility  | 96    |
| Best Practices | 100   |
| SEO            | 100   |


### Detailed Reports

- **JSON Report**: For more detailed performance metrics, check out the [Lighthouse JSON Report](./lighthouse-report.json).


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/OTH21DEV/yandex.git
    cd landing-page
    ```

2. Open the project directory:
    ```sh
    cd yandex
    ```

3. No additional dependencies required.

## Usage

1. Simply open the `index.html` file in your browser:
    ```sh
    open index.html
    ```

2. Navigate through the page and interact with its features to see the animations and carousels in action.

## Folder Structure

```plaintext
landing-page/
├── assets/                # Folder containing images and other static assets
├── data/                  # Folder containing data files (JSON )
├── scripts/               # Folder containing JavaScript files
├── styles/                # Folder containing CSS files
├── config.js              # Configuration file for the project
├── index.html             # Main HTML file containing the landing page structure
├── index.js               # Main JavaScript file for functionality, animation, and carousels
└── lighthouse-report.json # JSON file containing Lighthouse report for site performance animation, and carousels