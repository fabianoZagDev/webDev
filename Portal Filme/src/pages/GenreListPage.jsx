import React, { useEffect, useState } from 'react';
import GenreCard from '../components/GenreCard'; // Certifique-se de que o caminho está correto

export default function GenreListPage() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`);
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error("Erro ao buscar gêneros:", error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Gêneros</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {genres.map(genre => (
                    <GenreCard key={genre.id} genre={genre} />
                ))}
            </div>
        </div>
    );
}
