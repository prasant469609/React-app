# Product List Application

This is a React-based application that displays a list of products and allows users to add them to a cart. The application fetches product data from a Django API and manages the cart state with API.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm (Node Package Manager).
- You have installed Python and Django.
- You have a running instance of the backend API that provides product data and handles cart operations.

## Installation

To install and set up the project, follow these steps:

### Frontend (React)

1. Clone the repository:
    ```bash
    git clone https://github.com/Prashanth-s/product-list-app.git
    cd product-list-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Backend (Django)

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create a virtual environment:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4. Apply migrations:
    ```bash
    python manage.py migrate
    ```

5. Create a superuser to access the Django admin:
    ```bash
    python manage.py createsuperuser
    ```

6. Start the Django development server:
    ```bash
    python manage.py runserver
    ```

## Running the Application

### Frontend

To run the React application, use the following command:
```bash
npm start

Backend
Ensure the Django server is running at http://localhost:8000.

Dependencies
Frontend
The project uses the following dependencies:
    react: ^17.0.2
    axios: ^0.21.1
    react-dom: ^17.0.2
    react-scripts: 4.0.3
    Backend
The project uses the following dependencies:

    Django: ^3.2
    djangorestframework: ^3.12.4
    API Endpoints
The React application interacts with the following API endpoints provided by the Django backend:

    GET /products/: Fetch the list of products.
    POST /cart/: Add a product to the cart.
    DELETE /cart/<id>/: Remove a product from the cart.
Usage
Once the application is running, you can:

    View the list of products fetched from the API.
    Add products to the cart by clicking the "Add to Cart" button.
    View the cart and manage the items within it.
