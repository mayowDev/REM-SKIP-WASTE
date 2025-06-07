# REMSkip-Waste

REMSkip-Waste - This project is built with React, TypeScript, and Vite, utilizing SASS for styling.

## Key Features

*   **Step-by-Step Process:** A `ProgressIndicator` component guides users through the stages of booking a skip (currently focused on the "Select Skip" stage).
*   **Interactive Skip Selection:** Users can view and select from a variety of skip sizes presented in `SkipCard` components.
*   **Detailed Skip Information:** Each skip card displays size, price (including VAT breakdown), hire period, and specific features (e.g., road placement allowance, heavy waste suitability).
*   **Dynamic Pricing Display:** Total price including VAT is calculated and shown.
*   **Visual Feedback:** Selected skips are highlighted, and unavailable skips are clearly marked.
*   **Responsive Design Elements:** The application incorporates styles and logic for adapting to different screen sizes.

## Technologies Used

*   **Frontend Framework:** React 19
*   **Language:** TypeScript
*   **Build Tool:** Vite
*   **Styling:** SASS
*   **Icons:** Lucide React
*   **Routing:** React Router DOM (dependency, structure for future use)
*   **HTTP Client:** Axios (dependency, structure for future use)
*   **Linting:** ESLint with TypeScript ESLint plugin

## Project Structure

The project is organized as follows:

```
mayowdev-rem-skip-waste/
├── public/                   # Static assets (e.g., images like transhcan_image.png)
├── src/
│   ├── App.tsx                 # Main React application component
│   ├── main.tsx                # Application entry point
│   ├── assets/                 # (Currently empty, but intended for local assets)
│   ├── components/             # Reusable UI components
│   │   ├── ProgressIndicator.tsx # Displays booking progress steps
│   │   └── SkipCard.tsx        # Renders individual skip information cards
│   ├── data/
│   │   └── skipData.ts         # Static data for available skip options
│   ├── hooks/
│   │   └── use-mobile.tsx      # Custom hook for detecting mobile viewports
│   ├── pages/
│   │   └── home.tsx            # Main page for skip selection and display
│   ├── styles/                 # SASS stylesheets
│   │   ├── home.scss           # Styles for the home page
│   │   ├── index.scss          # Global styles and CSS variables
│   │   ├── progress-indicator.scss # Styles for the ProgressIndicator component
│   │   └── skip-card.scss      # Styles for the SkipCard component
│   ├── types/
│   │   └── skip.ts             # TypeScript type definition for Skip objects
│   └── utils/
│       └── index.ts            # Utility functions (e.g., price calculation)
├── index.html                # Main HTML template
├── package.json              # Project metadata, dependencies, and scripts
├── vite.config.ts            # Vite build tool configuration
├── tsconfig.json             # Main TypeScript configuration
├── tsconfig.app.json         # TypeScript configuration for the application code
├── tsconfig.node.json        # TypeScript configuration for Node.js specific files (e.g., vite.config.ts)
└── eslint.config.js          # ESLint configuration
```

## Core Components

*   **`App.tsx`**: The root component that currently renders the `Home` page.
*   **`src/pages/home.tsx`**: This is the primary view of the application. It orchestrates the display of:
    *   A `ProgressIndicator` showing the current step in the skip booking process (hardcoded to step 3: "Select Skip").
    *   A grid of `SkipCard` components, populated from `skipData.ts`, allowing users to browse and select skips.
    *   An "Important Information" section providing disclaimers.
    *   A dynamic navigation footer that appears when a skip is selected, showing selected skip details and "Back" / "Continue" buttons.
*   **`src/components/ProgressIndicator.tsx`**: A visual component representing the stages of the skip booking process: Postcode, Waste Type, Select Skip, Permit Check, Choose Date, Payment. It highlights the current step.
*   **`src/components/SkipCard.tsx`**: A detailed card for each skip option. It displays:
    *   Skip size (e.g., 4 Yards).
    *   Total price (calculated with VAT) and price breakdown.
    *   Hire period (e.g., 14 day hire).
    *   Visual cues for features such as "Road placement allowed," "Heavy waste allowed," or "Private land only," using icons from Lucide React.
    *   An image of the skip.
    *   A "Select This Skip" button, which changes to "Selected" with a checkmark upon selection.
    *   Indication if a skip is "Unavailable" and disables selection.
*   **`src/data/skipData.ts`**: Contains an array of `Skip` objects that serve as the mock data for available skips. Each object includes properties like `id`, `size`, `priceBeforeVat`, `vat`, `allowedOnRoad`, `allowsHeavyWaste`, `imageUrl`, etc.
*   **`src/hooks/use-mobile.tsx`**: A custom React hook that detects if the current viewport width is below a defined mobile breakpoint (768px).
*   **`src/utils/index.ts`**: Includes utility functions. Currently, it has `getPriceWithVat` to calculate the final price of a skip including VAT.

## Available Scripts

In the project directory, you can run the following commands:

*   **`npm run dev`**
    Runs the app in development mode with Vite.
    Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`) to view it. The page will automatically reload if you make edits.

*   **`npm run build`**
    Builds the app for production to the `dist` folder.
    It bundles React in production mode and optimizes the build for the best performance.

*   **`npm run lint`**
    Lints the project's TypeScript and JavaScript files using ESLint according to the rules defined in `eslint.config.js`.

*   **`npm run preview`**
    Serves the production build from the `dist` folder locally. This is useful for checking the final build before deployment.

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mayowdev/rem-skip-waste.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd rem-skip-waste
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will then be accessible in your web browser at the address outputted to the console.
