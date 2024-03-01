React Assessment
================

This is a React application created as part of an assessment for a React developer role. The application fetches employee data from a Firebase Realtime Database, displays it in a table format, and includes additional features such as search functionality and a dropdown menu to select the number of rows to display.

Live Demo
------------

Checkout here : [App](https://react-task-1-bf861.web.app)

Installation
------------

To run this application locally, follow these steps:

1.  Clone this repository:

    bashCopy code

    `git clone https://github.com/Faizan711/react-task-29-2-24.git`

2.  Navigate to the project directory:

    bashCopy code

    `cd react-assessment`

3.  Install dependencies:

    bashCopy code

    `npm install`

4.  Start the development server:

    bashCopy code

    `npm run dev`

5.  Open your browser and visit `http://localhost:5173` to view the application.

Usage
-----

Once the application is running, you will see the list of employees displayed in a table format. You can use the search bar to filter employees by name, position, or department. Additionally, you can use the dropdown menu to select the number of rows to display at once.

Features
--------

-   Fetch employee data from Firebase Realtime Database.
-   Display employee data in a table format.
-   Search functionality to filter employees by name, position, or department.
-   Dropdown menu to select the number of rows to display.

Additional Challenge
--------------------

For the additional challenge, the following features was implemented:

-   Search Functionality: Added a search bar that allows users to filter employees by name, position, or department.
-   Loader: Added a spinning loader on page load which is shown till data is fetched and displayed.

Problem-Solving
---------------

During the development of this application, one of the challenges I faced was that I was following the PDF and initialized a firebase app , but added the databaseURL after that, so two initialization were conflicting.

*To overcome this issue, I modified the initializeApp() function and put a check on it if there were more than one, to 
take the first one of them, you can see it on firebase.js.*

Credits
-------

This application was created by Md Faizan Alam.
