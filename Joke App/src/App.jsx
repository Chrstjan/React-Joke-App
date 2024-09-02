import { useEffect, useState } from 'react';

import "./App.scss";
import { JokeButton } from './components/JokeButton/JokeButton';
import { Joke } from './components/Joke/Joke';
import { Wrapper } from './components/Wrapper/Wrapper';

function App() {
  const [jokeData, setJokeData] = useState();
  const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

  const getJokeData = async () => {
    let res = await fetch(jokeUrl);
    let data = await res.json();
    setJokeData(data);
  }

  useEffect(() => {
    getJokeData();
  }, [])


  return (
    <>
     <Wrapper theme='dark'>
      <h1>React Joke App</h1>
      <img src='./src/assets/brainrot.png' alt='brainrot' />
      {jokeData ? <Joke type={jokeData.type} setup={jokeData.setup} punchline={jokeData.punchline}/>: <p>Loading...</p>}
      <JokeButton action={getJokeData} joke={jokeData}/>
     </Wrapper>
    </>
  );
}

export default App;
