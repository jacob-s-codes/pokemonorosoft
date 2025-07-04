'use client';

import { useEffect, useState } from 'react';

const companies = [
    "Azumo", "Sift", "Django", "Appstem", "Qualia",
    "Evisort", "Vention", "Nuro", "Turing", "Zinrelo",
    "Workato", "Nexrage", "Mongo", "Okta", "Twilio",
    "Atlassian", "Ansys", "Fleetcor"
];

export default function ButtonGame({ pokemonNames }: { pokemonNames: string[] }) {
    const [questions, setQuestions] = useState<{ name: string; answer: 'pokemon' | 'software' }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [showQuestion, setShowQuestion] = useState(true);

    useEffect(() => {
        const newQuestions: { name: string; answer: 'pokemon' | 'software' }[] = [];

        for (let i = 0; i < 10; i++) {
            if (Math.random() < 0.5) {
                // Show a Pokémon
                const randPokemon = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];
                newQuestions.push({ name: randPokemon, answer: 'pokemon' });
            } else {
                // Show a software company
                const randCompany = companies[Math.floor(Math.random() * companies.length)];
                newQuestions.push({ name: randCompany, answer: 'software' });
            }
        }

        setQuestions(newQuestions);
    }, [pokemonNames]);

    const handleGuess = (guess: 'pokemon' | 'software') => {
        if (!questions.length || gameOver || !showQuestion) return;
    
        const current = questions[currentIndex];
        if (guess === current.answer) {
            setScore(prev => prev + 1);
            setFeedback('Correct!');
        } else {
            setFeedback(`Wrong! It was a ${current.answer === 'pokemon' ? 'Pokémon' : 'Software'}`);
        }
    
        setShowQuestion(false);
    
        setTimeout(() => {
            setFeedback(null);
    
            if (currentIndex + 1 < questions.length) {
                setCurrentIndex(prev => prev + 1);
                setShowQuestion(true);
            } else {
                setGameOver(true);
                setShowQuestion(true);
            }
        }, 1500); // 1.5 seconds delay to show feedback
    };
    

    if (gameOver) {
        return (
            <div className="text-center pt-32 h-screen bg-midyellow">
                <h2 className="text-5xl font-bold mb-4">Game Over!</h2>
                <h3 className="text-3xl">Your score: {score} / {questions.length}</h3>
                <p className='pt-4 text-xl'>Refresh to play again</p>
            </div>
        );
    }

    const currentQuestion = questions[currentIndex];

    return (
        <div className="text-center pt-24 h-screen bg-midyellow">
            <h2 className="xl:text-7xl lg:text-5xl text-4xl font-bold mb-16">
                Is it a <span className="text-red">Pokémon</span> or <span className="text-blue">Software</span>?
            </h2>
            <div className='mx-4'>
                {showQuestion && (
                <ul className="text-6xl font-bold uppercase border-2 border-black max-w-2xl mx-auto py-16 rounded-lg mb-12">
                    <li id="guess">{currentQuestion?.name}</li>
                </ul>
                )}
            </div>
            {feedback && <p className="text-2xl mb-4">{feedback}</p>}

            <div className="flex justify-center items-center gap-x-12">
                <button
                    className="border-2 border-black hover:bg-blue hover:text-white px-6 py-4 rounded-lg text-2xl uppercase"
                    onClick={() => handleGuess('pokemon')}
                >
                    <img src="/pokemonlogo.png" alt="Pokemon" className="w-32" />
                </button>
                <button
                    className="border-2 border-black hover:bg-blue hover:text-white px-6 py-4 rounded-lg text-2xl uppercase"
                    onClick={() => handleGuess('software')}
                >
                    <img src="/softwarelogo.png" alt="Software" className="w-32" />
                </button>
            </div>

            <p className="mt-8 text-xl">Question {currentIndex + 1} of {questions.length}</p>
        </div>
    );
}
