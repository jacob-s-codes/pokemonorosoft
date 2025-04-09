"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function PokemonOrSoftware() {
  // Game states
  const [currentItem, setCurrentItem] = useState('');
  const [score, setScore] = useState(0);
  const [totalGuesses, setTotalGuesses] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [itemType, setItemType] = useState('');

  // Sample items (in a real app, you'd have a more extensive list)
  const pokemonList = [
    "Pikachu", "Charizard", "Bulbasaur", "Jigglypuff", "Eevee", 
    "Gengar", "Snorlax", "Mewtwo", "Squirtle", "Dragonite",
    "Lucario", "Gardevoir", "Blaziken", "Greninja", "Zoroark"
  ];
  
  const softwareList = [
    "Docker", "Kubernetes", "TensorFlow", "Ansible", "Jenkins",
    "Flutter", "Hadoop", "Apache", "React", "MongoDB", 
    "PostgreSQL", "Maven", "Eclipse", "Terraform", "Grafana"
  ];

  // Get a random item from the specified list
  const getRandomItem = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  // Randomly select a Pokémon or software
  const getNextItem = () => {
    setLoading(true);
    // Reset feedback and correctness
    setFeedback('');
    setIsCorrect(null);
    
    setTimeout(() => {
      // 50/50 chance for either Pokémon or software
      const isPokemon = Math.random() > 0.5;
      const selected = isPokemon 
        ? getRandomItem(pokemonList)
        : getRandomItem(softwareList);
      
      setCurrentItem(selected);
      setItemType(isPokemon ? 'pokemon' : 'software');
      setLoading(false);
    }, 1000); // Short delay for better UX
  };

  // Handle user guess
  const handleGuess = (guessPokemon) => {
    setTotalGuesses(totalGuesses + 1);
    const isPokemon = itemType === 'pokemon';
    const isCorrectGuess = (guessPokemon === isPokemon);
    
    setIsCorrect(isCorrectGuess);
    
    if (isCorrectGuess) {
      setScore(score + 1);
      setFeedback(`Correct! ${currentItem} is ${isPokemon ? 'a Pokémon' : 'software'}.`);
    } else {
      setFeedback(`Wrong! ${currentItem} is ${isPokemon ? 'a Pokémon' : 'software'}.`);
    }
    
    // Get next item after a short delay
    setTimeout(getNextItem, 2000);
  };

  // Start the game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTotalGuesses(0);
    getNextItem();
  };

  // Set title styles based on feedback
  const getTitleStyle = () => {
    if (isCorrect === null) return { color: '#FF686B' };
    return isCorrect 
      ? { color: '#84DCC6' } // Correct answer color
      : { color: '#FF686B' }; // Wrong answer color
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#C2EEE3' }}>
      <Head>
        <title>Pokémon or Software?</title>
        <meta name="description" content="A fun game to test if you can tell the difference between Pokémon names and software names" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-4 px-6" style={{ backgroundColor: '#84DCC6' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold" style={{ color: '#FF686B' }}>
            Pokémon or Software?
          </h1>
          {gameStarted && (
            <div className="text-lg font-semibold" style={{ color: '#FF686B' }}>
              Score: {score}/{totalGuesses}
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {!gameStarted ? (
          <div className="text-center max-w-2xl mx-auto p-8 rounded-lg" style={{ backgroundColor: '#95EECE' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FF686B' }}>
              Welcome to Pokémon or Software!
            </h2>
            <p className="text-lg mb-8" style={{ color: '#333' }}>
              Can you tell whether a name belongs to a Pokémon or a software tool? 
              Test your knowledge in this fun guessing game!
            </p>
            <button 
              onClick={startGame}
              className="px-8 py-3 text-xl font-semibold rounded-full transition transform hover:scale-105"
              style={{ backgroundColor: '#FF686B', color: 'white' }}
            >
              Start Game
            </button>
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto">
            <div 
              className="p-10 mb-8 rounded-lg shadow-lg"
              style={{ backgroundColor: '#FFA69E' }}
            >
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-8 w-40 mx-auto rounded" style={{ backgroundColor: '#D2D3BA' }}></div>
                </div>
              ) : (
                <h2 
                  className="text-4xl md:text-5xl font-bold transition-colors duration-300"
                  style={getTitleStyle()}
                >
                  {currentItem}
                </h2>
              )}
            </div>
            
            {feedback ? (
              <div 
                className="p-4 mb-8 rounded"
                style={{ 
                  backgroundColor: isCorrect ? '#95EECE' : '#FF8785',
                  color: isCorrect ? '#333' : 'white'
                }}
              >
                <p className="text-xl">{feedback}</p>
              </div>
            ) : (
              <p className="text-xl mb-8" style={{ color: '#333' }}>
                Is this a Pokémon or software?
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleGuess(true)}
                disabled={loading || feedback !== ''}
                className="px-8 py-3 text-lg font-semibold rounded-full transition transform hover:scale-105 disabled:opacity-50"
                style={{ backgroundColor: '#84DCC6', color: '#333' }}
              >
                Pokémon
              </button>
              <button 
                onClick={() => handleGuess(false)}
                disabled={loading || feedback !== ''}
                className="px-8 py-3 text-lg font-semibold rounded-full transition transform hover:scale-105 disabled:opacity-50"
                style={{ backgroundColor: '#FF686B', color: 'white' }}
              >
                Software
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-4 px-6" style={{ backgroundColor: '#D2D3BA' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p style={{ color: '#333' }}>
            © 2025 Pokémon or Software Game | For educational purposes only
          </p>
        </div>
      </footer>
    </div>
  );
}