import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MoviesByGenrePage() {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log("Gênero selecionado:", genreId); // Verificando o gênero selecionado

        const fetchMoviesByGenre = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreId}&language=pt-br`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes por gênero');
                }
                const data = await response.json();
                console.log(data); // Verifique a resposta da API
                setMovies(data.results);
            } catch (error) {
                console.error("Erro ao buscar filmes por gênero:", error);
            }
        };

        fetchMoviesByGenre();
    }, [genreId]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Filmes do Gênero Selecionado</h1>
            <ul>
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <li key={movie.id} className="mb-2">
                            {movie.title}
                        </li>
                    ))
                ) : (
                    <li>Não há filmes disponíveis para este gênero.</li>
                )}
            </ul>
        </div>
    );
}
