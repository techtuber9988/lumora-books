# LUMORA BOOKS

### Premium Bookstore E-Commerce Landing Page

LUMORA BOOKS is a modern, responsive bookstore e-commerce landing page designed with a premium visual identity. The project focuses on clean UI architecture, responsive layouts, design tokens, elegant typography, glassmorphism effects, smooth CSS animations, and mobile-first development.

The website is built using **only HTML and CSS**, without JavaScript or external frameworks.

---

## Live Demo



---

## Repository



---

## Project Preview

LUMORA BOOKS presents a premium digital bookstore experience where users can explore featured books, browse categories, view book details, and discover curated collections through a visually engaging interface.

## Screenshots

### Desktop View

| Screenshot | Viewport | Description |
|:----------:|:--------:|:------------|
|![alt text](<Screenshot 2026-09-18 041642-1.png>) | **1440 × 900** — Desktop | Full-width homepage with hero section, featured books grid, and complete navigation |
|![alt text](<Screenshot 2026-09-18 041736-1.png>) | **1440 × 900** — Desktop | Shop page with multi-column product grid and category sidebar |
| ![alt text](<Screenshot 2026-09-18 041759-1.png>) | **1440 × 900** — Desktop | Product detail view with side-by-side layout and editorial composition |



---

### Mobile View

| Screenshot | Viewport | Description |
|:----------:|:--------:|:------------|
|![alt text](<Screenshot 2026-09-18 041828-1.png>) | **375 × 812** — iPhone | Mobile home screen with stacked layout, bottom navigation bar, and hamburger menu |
| ![alt text](<Screenshot 2026-09-18 041849-1.png>) | **375 × 812** — iPhone | Mobile shop view with single-column product cards and touch-friendly buttons |
| ![alt text](<Screenshot 2026-09-18 041907-1.png>) | **375 × 812** — iPhone | Mobile cart / detail view with compact UI and full-width call-to-action |

> **Note:** Replace `image-3.png`, `image-4.png`, and `image-5.png` with your actual screenshot file paths after capturing them from the browser.



The design combines:

* Premium bookstore aesthetics
* Responsive e-commerce layouts
* Modern typography
* Glassmorphism elements
* CSS-only interactions
* Smooth hover and entrance effects
* Mobile-first responsive architecture

---

## Features

### Premium Landing Page

* Modern hero section with a strong headline
* Featured book showcase
* Primary and secondary call-to-action buttons
* Editorial-style visual composition
* Premium background gradients and decorative elements

### Book Collection

* Featured books displayed in responsive cards
* Book cover, title, author, category, and price
* Bestseller and new-arrival labels
* Hover effects on book cards
* Responsive multi-column product grid

### Category Navigation

* Fiction
* Non-Fiction
* Self-Help
* Business
* Science
* Romance
* Mystery
* Biographies

### Responsive Layout

* Mobile-first CSS architecture
* Flexible container system
* Responsive navigation
* Adaptive typography
* Responsive product grid
* Tablet and desktop breakpoints
* No horizontal scrolling on mobile devices

### Premium Visual Design

* Custom design tokens using CSS variables
* Carefully selected font combinations
* Soft shadows and layered surfaces
* Glassmorphism cards
* Backdrop blur effects
* Gradient accents
* Rounded corners
* Smooth transitions
* Subtle hover animations

### CSS-Only Interactions

* Hover-based card animations
* Button transitions
* Navigation link effects
* Image scaling on hover
* CSS-only responsive navigation treatment
* No JavaScript dependency

---

## Design System

The project uses a centralized design-token system through the `:root` selector.

### Color Tokens

```css
:root {
  --color-background: #f7f4ee;
  --color-surface: #fffdf9;
  --color-surface-soft: #eee9df;
  --color-text-primary: #1f2521;
  --color-text-secondary: #687068;
  --color-accent: #b56b45;
  --color-accent-dark: #87472d;
  --color-border: rgba(31, 37, 33, 0.12);
}
```

### Typography Tokens

```css
:root {
  --font-heading: "DM Serif Display", serif;
  --font-body: "Manrope", sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.5rem;
  --text-2xl: 2.25rem;
  --text-3xl: 3.5rem;
}
```

### Spacing Tokens

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

### Layout Tokens

```css
:root {
  --container-width: 1200px;
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;

  --shadow-soft: 0 10px 30px rgba(31, 37, 33, 0.08);
  --shadow-card: 0 20px 50px rgba(31, 37, 33, 0.12);

  --transition-fast: 180ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 600ms ease;
}
```

---

## Font Combination

The project uses a premium editorial font combination:

### Heading Font

**DM Serif Display**

Used for:

* Hero headings
* Section titles
* Book-related editorial content
* Large promotional text

### Body Font

**Manrope**

Used for:

* Navigation
* Paragraphs
* Buttons
* Product information
* Labels
* Supporting content

This combination creates a balance between an elegant editorial bookstore style and a clean modern e-commerce interface.

---

## Tech Stack

| Technology          | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| HTML5               | Semantic page structure                         |
| CSS3                | Styling, layout, animations, and responsiveness |
| CSS Variables       | Design tokens and theme management              |
| CSS Grid            | Product and content layouts                     |
| Flexbox             | Navigation and component alignment              |
| Google Fonts        | Premium typography                              |
| CSS Backdrop Filter | Glassmorphism effects                           |

---

## Project Structure

```text
lumora-books/
│
├── index.html
│
├── css/
│   └── style.css
│
├── assets/
│   ├── images/
│   │   ├── hero-book.jpg
│   │   ├── book-01.jpg
│   │   ├── book-02.jpg
│   │   ├── book-03.jpg
│   │   ├── book-04.jpg
│   │   └── book-05.jpg
│   │
│   └── icons/
│
├── screenshots/
│   ├── desktop-home.png
│   ├── tablet-home.png
│   └── mobile-home.png
│
└── README.md
```

---

## Page Sections

### 1. Navigation Bar

The navigation bar contains:

* LUMORA BOOKS brand logo
* Home link
* Shop link
* Categories link
* About link
* Contact link
* Cart indicator
* Responsive mobile layout

The navigation uses a semi-transparent surface with a subtle blur effect and border treatment.

---

### 2. Hero Section

The hero section introduces the bookstore through:

* Editorial headline
* Supporting description
* Shop collection button
* Explore categories button
* Featured book visual
* Decorative gradient elements
* Floating visual accents

The hero layout changes from a two-column desktop layout to a single-column mobile layout.

---

### 3. Featured Books Section

This section displays a responsive product grid containing:

* Book cover
* Book category
* Book title
* Author name
* Rating or editorial label
* Price
* View details button

The grid adapts according to viewport width:

```css
.books-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-6);
}
```

Responsive behavior:

```css
@media (max-width: 1024px) {
  .books-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .books-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 480px) {
  .books-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 4. Book Categories Section

The category section helps users explore different reading interests.

Example categories:

* Fiction
* Personal Growth
* Business
* Philosophy
* Psychology
* History
* Science
* Lifestyle

Each category uses a minimal card with:

* Category name
* Short description
* Arrow indicator
* Hover animation

---

### 5. Editorial Banner

The editorial banner highlights the bookstore's identity with:

* Large statement heading
* Short brand message
* Decorative background
* Premium contrast
* Responsive alignment

Example message:

> Stories that stay with you.

---

### 6. Newsletter Section

The newsletter section encourages visitors to subscribe for:

* New arrivals
* Curated reading lists
* Author recommendations
* Exclusive offers

The form is styled using HTML and CSS only.

> Since JavaScript and backend functionality are not included, the newsletter form is a static UI element.

---

### 7. Footer

The footer includes:

* Brand identity
* Navigation links
* Customer support links
* Social placeholders
* Copyright information
* Terms and privacy links

---

## Responsive Design Strategy

The project follows a mobile-first approach.

### Mobile

* Single-column layout
* Compact navigation
* Stacked hero content
* Full-width buttons
* One-column book cards
* Reduced decorative elements
* Optimized spacing

### Tablet

* Two-column hero layout
* Two or three-column product grid
* Flexible section spacing
* Medium-sized typography

### Desktop

* Multi-column product grid
* Spacious hero layout
* Full navigation
* Larger typography scale
* Enhanced decorative effects
* Wider content container

---

## CSS Architecture

The stylesheet is organized into logical sections:

```text
1. Font Imports
2. Design Tokens
3. CSS Reset
4. Global Styles
5. Utility Classes
6. Container System
7. Navigation
8. Hero Section
9. Book Cards
10. Category Cards
11. Editorial Banner
12. Newsletter
13. Footer
14. Animations
15. Responsive Breakpoints
16. Accessibility Preferences
```

This structure improves maintainability and makes future updates easier.

---

## Glassmorphism Implementation

Selected components use subtle glassmorphism styling.

Example:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: 0 20px 45px rgba(31, 37, 33, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}
```

The effect is intentionally subtle to maintain readability and usability.

---

## Animations and Effects

The project includes lightweight CSS animations such as:

* Fade-up entrance animation
* Floating decorative elements
* Book card hover lift
* Image scale transition
* Button hover movement
* Navigation underline animation
* Soft background movement
* Editorial text reveal

Example:

```css
.book-card {
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.book-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-card);
}
```

Animations are designed to remain smooth and avoid excessive visual distraction.

---

## Accessibility Considerations

The project follows basic accessibility practices:

* Semantic HTML5 elements
* Proper heading hierarchy
* Descriptive image `alt` attributes
* Visible focus states
* Sufficient text contrast
* Accessible button labels
* Responsive text sizing
* Reduced-motion support

Example:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Browser Compatibility

The project is intended to work on modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

Some advanced effects, such as `backdrop-filter`, may vary slightly depending on browser support.

---

## How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/lumora-books.git
```

### 2. Navigate to the project folder

```bash
cd lumora-books
```

### 3. Open the project

You can open `index.html` directly in your browser.

For a better development experience, use the VS Code Live Server extension.

### 4. Run with Live Server

1. Open the project in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click on `index.html`.
4. Select **Open with Live Server**.



---

## Future Improvements

The current project is a static HTML and CSS implementation. Future improvements may include:

* JavaScript-powered shopping cart
* Product filtering and sorting
* Search functionality
* Product detail pages
* User authentication
* Wishlist functionality
* Backend integration
* Payment gateway integration
* Newsletter subscription backend
* Dark and light theme toggle
* Book review system
* Order management

---

## Learning Outcomes

Through this project, the following concepts were practiced:

* Semantic HTML structure
* Mobile-first responsive design
* CSS Grid and Flexbox
* Design token architecture
* CSS custom properties
* Typography systems
* Responsive breakpoints
* Glassmorphism UI
* CSS transitions and animations
* Accessibility basics
* Component-based CSS organization
* E-commerce landing page design

---

## Project Status

```text
Status: Completed
Type: Frontend Static Website
Responsive: Yes
JavaScript: Not Used
Backend: Not Used
```

---

## License

This project is created for educational and portfolio purposes.

You are free to use the structure and concepts for learning, experimentation, and personal projects.
