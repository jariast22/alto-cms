<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>
<br />

<div align="center">

<h3 align="center">Alto-CMS</h3>

  <p align="center">
    Simple Personal CMS

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The CMS was build with desktop first in mind, it works best on 1920x1080 screens, it also works OK on iPad.

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jariast22/alto-cms.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run dev build
   ```js
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To create a blog, just visit the Blog page. To use the search function start typing a blog title and use the Right Arrow Key to select the blog to navigate.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Atomic Design

The app is organized in Pages -> Organisms -> Molecules -> Atoms

- App
  - Navbar
    - Navigate
    - Logo
      - Icon
    - NavBarMenu
      - NavBarLink
    - Search
      - Label
      - SearchInpit
      - Button
- Home
  - Hero
    -HeroImage
    -HeroText
  - MainContent
    - Column
    - FeaturedBlog
      - Thumbnail
        - ThumbnailImage
    - BlogsGallery
      - Navigate
      - Thumbnail
        - ThumbnailImage
- Contact
  - ContacInfo
  - Label
  - AboutUs
    - Label
- Blog
  - BlogPost
    - BlogHeader
    - Navigate
    - Icon
    - BlogContent
      - Float
        -ThumbNail
      - HTMLContent
- BlogEdit
  - BlogForm
    - InputWithLabel
    - Button

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Juan Camilo Arias - jcamiloat22@gmail.com

Project Link: [https://github.com/jariast22/alto-cms](https://github.com/jariast22/alto-cms)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[product-screenshot]: src/assets/screenshot.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
