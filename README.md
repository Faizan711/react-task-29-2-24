React Assessment
================

This is a React application created as part of an assessment for a React developer role. The application fetches employee data from a Firebase Realtime Database, displays it in a table format, and includes additional features such as search functionality and a dropdown menu to select the number of rows to display.

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

For the additional challenge, the following feature was implemented:

-   Search Functionality: Added a search bar that allows users to filter employees by name, position, or department.

Problem-Solving
---------------

During the development of this application, one of the challenges faced was related to filtering the employee data based on the search term. Initially, the search functionality was not working as expected, as it was case-sensitive and did not filter the data correctly.

To overcome this issue, I modified the filtering logic to convert both the search term and the employee data to lowercase before performing the comparison. This ensured that the search functionality is case-insensitive and filters the data accurately.

Credits
-------

This application was created by Md Faizan Alam.
