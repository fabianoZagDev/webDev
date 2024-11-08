import React, { useEffect, useState } from 'react';

export default function Watchlist() {
    const [toWatch, setToWatch] = useState([]); // Filmes para ver depois
    const [watched, setWatched] = useState([]); // Filmes assistidos

    useEffect(() => {
        // Carregar listas do LocalStorage ao montar o componente
        const storedToWatch = JSON.parse(localStorage.getItem('toWatch')) || [];
        const storedWatched = JSON.parse(localStorage.getItem('watched')) || [];
        setToWatch(storedToWatch);
        setWatched(storedWatched);
    }, []);

    const addToWatch = (movie) => {
        setToWatch(prev => {
            const updatedList = [...prev, movie];
            localStorage.setItem('toWatch', JSON.stringify(updatedList));
            return updatedList;
        });
    };

    const markAsWatched = (movie) => {
        setWatched(prev => {
            const updatedList = [...prev, movie];
            localStorage.setItem('watched', JSON.stringify(updatedList));
            // Remove o filme da lista para ver depois
            const newToWatch = toWatch.filter(item => item.id !== movie.id);
            localStorage.setItem('toWatch', JSON.stringify(newToWatch));
            setToWatch(newToWatch);
            return updatedList;
        });
    };

    const removeFromToWatch = (movieId) => {
        const updatedList = toWatch.filter(movie => movie.id !== movieId);
        setToWatch(updatedList);
        localStorage.setItem('toWatch', JSON.stringify(updatedList));
    };

    const removeFromWatched = (movieId) => {
        const updatedList = watched.filter(movie => movie.id !== movieId);
        setWatched(updatedList);
        localStorage.setItem('watched', JSON.stringify(updatedList));
    };

    return (
        <div className="p-4 max-w-3xl mx-auto"> {/* Largura máxima de 900px */}
            <h1 className="text-2xl font-bold">Lista de Filmes</h1>

            <h2 className="text-xl font-semibold mt-4">Para Ver Depois</h2>
            <ul>
                {toWatch.map(movie => (
                    <li key={movie.id} className="flex justify-between items-center mb-2">
                        <span>{movie.title}</span>
                        <div>
                            <button 
                                onClick={() => markAsWatched(movie)} 
                                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2">
                                Assistido
                            </button>
                            <button 
                                onClick={() => removeFromToWatch(movie.id)} 
                                className="border border-red-600 text-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white">
                                Remover
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-4">Filmes Assistidos</h2>
            <ul>
                {watched.map(movie => (
                    <li key={movie.id} className="flex justify-between items-center mb-2">
                        <span>{movie.title}</span>
                        <button 
                            onClick={() => removeFromWatched(movie.id)} 
                            className="border border-red-600 text-red-600 px-2 py-1 rounded hover:bg-red-600 hover:text-white">
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
