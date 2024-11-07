import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const [trailerKey, setTrailerKey] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br&append_to_response=credits`);
                const data = await response.json();
                setMovie(data);

                const videoResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`);
                const videoData = await videoResponse.json();
                if (videoData.results.length > 0) {
                    setTrailerKey(videoData.results[0].key);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="flex flex-col items-center p-4 max-w-3xl mx-auto"> {/* Largura máxima de 900px */}
            {/* Seção do título e poster */}
            <div className="flex flex-row mb-8 w-full">
                <img 
                    src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} 
                    alt={movie.title} 
                    className="rounded-lg shadow-md w-48"
                />
                <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="mt-2">{movie.overview}</p>
                    <p className="mt-2"><strong>Avaliação:</strong> {movie.vote_average} / 10</p>
                    <p className="mt-2"><strong>Data de Lançamento:</strong> {movie.release_date}</p>
                </div>
            </div>

            {/* Seção do trailer */}
            {trailerKey && (
                <div className="mt-4 w-full">
                    <h2 className="text-xl font-semibold">Trailer:</h2>
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        title="Trailer"
                        frameBorder="0"
                        allowFullScreen
                        className="mt-2"
                    ></iframe>
                </div>
            )}
            
            {/* Seção do elenco */}
            <h2 className="text-xl font-semibold mt-4">Elenco:</h2>
            <p className="mb-8">
                {movie.credits && movie.credits.cast.map((actor, index) => (
                    <span key={actor.id}>
                        {actor.name} como {actor.character}
                        {index < movie.credits.cast.length - 1 ? " - " : ""} {/* Adiciona " - " entre os atores, mas não no final */}
                    </span>
                ))}
            </p>
        </div>
    );
}
