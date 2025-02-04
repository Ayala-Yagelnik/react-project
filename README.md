# Recipe Haven

Welcome to Recipe Haven, a web application for discovering and sharing recipes. This project allows users to browse, add, edit, and delete recipes. Users can also view detailed information about each recipe.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/recipe-haven.git
    cd recipe-haven
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Browse recipes on the home page.
- View detailed information about a recipe by clicking on it.
- Add a new recipe by clicking the "Add Recipe" button (available only for logged-in users).

## Project Structure

The project structure is as follows:

## Components

| Component        | Description                                                           | File Path                          | Dependencies               |
|------------------|----------------------------------------------------------------------|-----------------------------------|----------------------------|
| `Home`           | The home page of the site, displaying general information             | `src/components/Home.tsx`         | None                       |
| `About`          | The about page, displaying information about the site and the team    | `src/components/About.tsx`        | None                       |
| `RecipeList`     | Displays a list of all available recipes                              | `src/components/RecipeList.tsx`   | `RecipeCard`, `AddRecipe`, `WelcomeRecipe` |
| `RecipeCard`     | Displays details of a single recipe                                   | `src/components/RecipeCard.tsx`   | None                       |
| `AddRecipe`      | Form for adding a new recipe or editing an existing recipe            | `src/components/AddRecipe.tsx`    | `IngredientsList`          |
| `EditRecipe`     | Form for editing an existing recipe (integrated within `AddRecipe`)   | `src/components/EditRecipe.tsx`   | None                       |
| `IngredientsList`| Displays a list of ingredients in the add/edit recipe form            | `src/components/IngredientsList.tsx` | None                    |
| `WelcomeRecipe`  | Displays a welcome message when no recipe is selected                 | `src/components/WelcomeRecipe.tsx` | None                    |
| `UserContext`    | Provides context for the logged-in user information                   | `src/components/userReducer.tsx`  | None                       |
| `store`          | Manages the application state using Redux                             | `src/store/store.ts`              | None                       |
| `recipeSlice`    | Manages the state of recipes using Redux                              | `src/store/recipeSlice.ts`        | None                       |

## API Endpoints

The backend server provides the following API endpoints:

- `GET /api/recipes`: Retrieve all recipes.
- `POST /api/recipes`: Add a new recipe (authenticated users only).

## Contributing

We welcome contributions to the project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them:
    ```sh
    git commit -m "Add your commit message"
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
