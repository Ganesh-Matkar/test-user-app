# User Details Application

A user details application built with Next.js, TypeScript, and Material-UI. This application displays a list of users and their details, allowing users to switch between profile and contact information, with error handling and toast notifications for feedback.

## Features

- **User List**: Displays a list of users fetched from a dummy API.
- **User Details View**: Shows detailed user information including profile and contact tabs.
- **Error Handling**: Toast notifications inform users of errors during actions.
- **Read-Only Fields**: All user details are displayed in a read-only format.
- **Actions Menu**: Dropdown menu for actions related to user details.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Adds type safety to JavaScript.
- **Material-UI**: A popular React UI framework for building beautiful interfaces.
- **DummyJSON API**: Provides mock data for user listings.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   git clone https://github.com/Ganesh-Matkar/test-user-app.git

2. Navigate to the project directory:

    cd test-user-app

3. Install dependencies:

    npm install


### Running the Application
    
- To start the development server, run: 
    npm run dev

## Folder Structure

/src
  /components          # Contains reusable components like UserList and UserDetails
  /pages               # Next.js pages
  /types               # TypeScript interfaces and types
