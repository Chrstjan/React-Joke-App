import { useEffect, useState } from 'react';

import "./App.scss";
import { JokeButton } from './components/JokeButton/JokeButton';
import { Joke } from './components/Joke/Joke';
import { Wrapper } from './components/Wrapper/Wrapper';
import { JokeSelection } from './components/JokeSelection/JokeSelection';

function App() {
  const [jokeData, setJokeData] = useState();
  const [jokeCategory, setJokeCategory] = useState();
  const [categoryJoke, setCategoryJoke] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");

  const jokeUrl = "https://official-joke-api.appspot.com/random_joke";
  const allCategoriesUrl = "https://official-joke-api.appspot.com/types";

  const getJokeData = async () => {
    let res = await fetch(jokeUrl);
    let data = await res.json();
    setJokeData(data);
  }

  const getCategories = async () => {
    let res = await fetch(allCategoriesUrl);
    let data = await res.json();
    console.log(data);
    setJokeCategory(data);
  }

  const getCategoryJoke = async () => {
    console.log(selectedCategory);
    let res = await fetch(`https://official-joke-api.appspot.com/jokes/${selectedCategory}/random`)
    let data = await res.json();
    let joke = data[0];
    setJokeData(joke);
    console.log(data);
  }

  useEffect(() => {
    getJokeData();
    getCategories();
  }, [])


  return (
    <>
     <Wrapper theme='dark'>
      <span>
        <h1>React Joke App</h1>
        <img src='./src/assets/brainrot.png' alt='brainrot' />
      </span>
      {jokeCategory ? <JokeSelection categories={jokeCategory} selectCategoey={setSelectedCategory}/>: null} 
      {jokeData ? <Joke type={jokeData.type} setup={jokeData.setup} punchline={jokeData.punchline}/>: <p>Loading...</p>}
      <footer>
        <JokeButton action={getJokeData} text='Tell New Joke'/>
        <JokeButton action={getCategoryJoke}  text='Tell Category Joke'/>
      </footer>
     </Wrapper>
    </>
  );
}

export default App;
