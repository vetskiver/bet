import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'

const App = () => {
  
  const posts = [
    {
        'id': '1',
        'title': 'Campus Basketball Tournament 🏀',
        'author': 'John Smith',
        'description': 'Organize or participate in a campus basketball tournament. Show off your skills, form a team, and compete for the top spot. Share highlights and memorable moments from the games!'
    },
    {
        'id': '2',
        'title': 'College Coding Hackathon 💻',
        'author': 'Robert Johnson',
        'description': 'Join a coding hackathon to develop innovative tech solutions. Collaborate with peers, tackle coding challenges, and present your projects. Gain practical experience and network with industry professionals!'
    },
    {
        'id': '3',
        'title': 'Ultimate Frisbee Weekend 🌟',
        'author': 'Michael Brown',
        'description': 'Participate in or organize an ultimate frisbee weekend event. Gather friends, set up games, and enjoy a day of competitive fun and exercise. Document the action and celebrate your team’s achievements!'
    },
    {
        'id': '4',
        'title': 'Campus Fitness Challenge 💪',
        'author': 'James Williams',
        'description': 'Take on the campus fitness challenge! Track your workouts, set personal goals, and compete with peers in various fitness activities. Share progress, tips, and motivate others to join the challenge!'
    },
];

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>👍 Bet 1.0</h1>
        <Link to="/"><button className="headerBtn"> Explore Challenges 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Submit Challenge 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
