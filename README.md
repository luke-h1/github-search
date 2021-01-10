## Github searcher 

React application which utilises React Hooks, Context, Express & node to fetch and display results about github users

## architecture
<br />

### frontend:
Utilizes React hooks + Context API to manage state. Makes calls to backend Node + express API to make calls to the github API. Hosted on vercel (gh-search.xyz)

<br />

### Backend: 
Utilizes Node JS, Express, Babel & jest to run an express server in order to hide sensitive github API keys + secrets. This server makes calls to the github API and returns that to the React frontend to consume