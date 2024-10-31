# To-Do List Code Challenge

This challenge involves building a simple **To-Do List application** using **React**, **TypeScript**, **Ant Design** (or Material UI), and **Next.js** as a bonus. The application should demonstrate knowledge of component composition, state management, asynchronous data handling, and API integration.

---

## Overview

In this challenge, you will:
- Create a **Login page** that authenticates users.
- Build a **To-Do List page** where users can **view**, **add**, **update**, and **delete** to-do items.
- Use **Ant Design** (or **Material UI**) components to style the interface.
- Optionally implement **token refreshing** for improved session management.
- At the end, create a merge request to the master branch and send the merge request link via Telegram.



## Getting Started

### Prerequisites

To complete this challenge, you'll need:
- **Node.js** (version 14+)
- Familiarity with **React**, **TypeScript**, and **Next.js**
- Basic understanding of **Ant Design** or **Material UI**

### API Endpoints

The app will use the following API endpoints from attached postman collection:

1. **Authentication**
   - **Login**: `https://dummyjson.com/auth/login`
   - **Token Refresh** (optional): `https://dummyjson.com/auth/refresh`

2. **To-Do List Operations**
   - **Get To-Do List**: `https://dummyjson.com/todos?limit=10&skip=0`
   - **Add To-Do**: `https://dummyjson.com/todos/add`
   - **Update To-Do**: `https://dummyjson.com/todos/{id}`
   - **Delete To-Do**: `https://dummyjson.com/todos/{id}`

---

## Project Structure

1. **Login Page**
   - Users will enter a **username** and **password**.
   - Authenticate users by sending a POST request to the `/auth/login` endpoint.
   - Store the `accessToken` on successful login.
   - Handle login errors (e.g., incorrect credentials) gracefully.
   - Redirect to the **To-Do List page** after a successful login.

2. **To-Do List Page**
   - Fetch the to-do items from `/todos?limit=10&skip=0`.
   - Display each to-do item with options to **mark as complete**, **edit**, or **delete**.
   - Provide an **Add To-Do** form to create a new item via `/todos/add`.
   - Update existing to-dos via `/todos/{id}`.
   - Delete to-dos via `/todos/{id}`.
   - Use Ant Design (or Material UI) components to style the list and forms.

3. **Token Refresh (Bonus)**
   - Implement a background refresh mechanism to update the `accessToken` using `/auth/refresh`.
   - Handle token expiry and auto-refresh to maintain session continuity.


