import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard'; // Verifique o caminho correto para o componente MovieCard

export default function MoviesByGenrePage() {
    const { genreId } = useParams(); // Captura o 'genreId' da URL
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMoviesByGenre = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreId}&language=pt-br`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes por gênero');
                }
                const data = await response.json();
                setMovies(data.results);  // Armazena os filmes no estado
            } catch (error) {
                console.error("Erro ao buscar filmes por gênero:", error);
            }
        };

        fetchMoviesByGenre();
    }, [genreId]);  // Reexecuta o efeito sempre que 'genreId' muda

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Filmes do Gênero Selecionado</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} />
                    ))
                ) : (
                    <p>Não há filmes disponíveis para este gênero.</p>
                )}
            </div>
        </div>
    );
}
