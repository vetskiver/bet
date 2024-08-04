## Bet

# Description
Bet is a web application designed to manage and track challenges and bets. Users can create, read, update, and delete challenges, as well as track the number of bets placed on each challenge and view user acceptance. This application provides a user-friendly interface for managing challenges and offers features to keep track of user engagement.

Features

Required Features
- CRUD Operations for Challenges: I implemented functionality for users to perform all four CRUD operations:
  - Create: Users can submit new challenges using a create form.
  - Read: All submitted challenges are displayed on the homepage.
  - Update: Users can update challenges after submission.
  - Delete: Users can delete challenges once they have been submitted.
- Challenge List: I ensured that all submitted challenges are readable on the homepage.
- Create Form: A form allows users to submit new challenges.
- Challenge Updates: Challenges can be updated after submission.
- Challenge Deletion: Users can delete challenges after they have been submitted.

Stretch Features
- Bet Count Tracking: I developed a feature to keep track of the bet count for each challenge. The bet count updates in real-time when users click the bet button, and this data is saved to the database.
- Acceptance Tracking: The site displays the total number of users who have accepted each challenge.

Technologies Used
- React: For building the user interface, managing state, and handling dynamic content updates.
- HTML/CSS: For structuring and styling the application.
- JavaScript: For handling user interactions, updating the UI, and making API requests.
- Supabase: For setting up and managing the database, including performing CRUD operations and tracking bet counts.

How It Works
1. Create a New Challenge: Users can submit new challenges through a dedicated form.
2. View Challenges: The homepage displays all submitted challenges, allowing users to view the details of each.
3. Update a Challenge: Users can update the details of a challenge after it has been created.
4. Delete a Challenge: Challenges can be removed from the list once they are no longer needed.
5. Track Bet Counts: The application tracks the number of bets placed on each challenge and updates this count in real-time.
6. Track Acceptance: The total number of users who have accepted each challenge is displayed on the site.

Goals
In this project, I:
- Successfully implemented the ability for users to perform all four CRUD operations on challenges.
- Displayed all submitted challenges on the homepage.
- Added functionality for users to create, update, and delete challenges.
- Developed features to track bet counts and user acceptance for each challenge.
- Set up a database using Supabase and performed CRUD operations to manage data for the application.

Demo
A demo of the enhanced version is available here:
![Video Walkthrough](https://github.com/vetskiver/bet/blob/master/bet-demo.gif)

Getting Started
1. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/bet.git

