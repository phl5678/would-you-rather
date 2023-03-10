# Employee Polls
A react web app that allows user to create Would You Rather A or B question, answer questions and compete with other users. Win by creating and answering more questions. This project uses redux to manage state, thunk to handle async actions, Auth0 for account authentication and includes only front end work. 

## Get started by `npm install` and `npm start`
1. Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
2. You can choose to log in with the credentials provided in _DATA.js or create your own one (see Auth0 connection setup below) .
3. Once logged in, you have access to /home, /add, /leaderboard, and /profile pages as well as question answering/result page through clicking any of the questions on the home page. 
4. Answer any questions in the New Questions section, and view the result once the answer is submitted.
5. View the question result by navigating to any of the Done Questions section.
6. All questions should be listed reverse-chronologically.
7. Go to New page to add a new Would You Rather question.
8. Go to Profile page to view all of your questions.
9. Log out by clicking the Log Out link.

### Auth0 setup
1. You will need to use your own Auth0 account and get Domain and Client ID by creating a new single page application. 
2. Create a .env file that includes the following
   - `REACT_APP_API_SERVER_URL=`http://localhost:6060`
   - `REACT_APP_AUTH0_DOMAIN=`[Your Domain]
   - `REACT_APP_AUTH0_CLIENT_ID=`[Your Client ID]
   - `REACT_APP_AUTH0_CALLBACK_URL=`http://localhost:3000/callback
   
   
## Unit test by `npm run test`
1. There are 18 tests. They should be all pass. 
