import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [filmesBemAvaliados, setFilmesBemAvaliados] = useState([]);
    const [filmesUpcoming, setFilmesUpcoming] = useState([]);

    const fetchMovies = async () => {
        try {
            const [respostaPopulares, respostaBemAvaliados, respostaUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`),
                    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`), 
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}&language=pt-br`)
                ]
            );

            const popularData = await respostaPopulares.json();
            const bemAvaliadosData = await respostaBemAvaliados.json(); 
            const upcomingData = await respostaUpcoming.json();

            setFilmesPopulares(popularData.results);
            setFilmesBemAvaliados(bemAvaliadosData.results); 
            setFilmesUpcoming(upcomingData.results);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <>
            <CardContainer titulo="Filmes Populares">
                <div className="flex overflow-x-auto space-x-4 p-4">
                    {filmesPopulares.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))}
                </div>
            </CardContainer>

            <CardContainer titulo="Filmes Bem Avaliados"> {}
                <div className="flex overflow-x-auto space-x-4 p-4">
                    {filmesBemAvaliados.map(filme => ( 
                        <MovieCard key={filme.id} {...filme} />
                    ))}
                </div>
            </CardContainer>

            <CardContainer titulo="Filmes que Estão por Vir">
                <div className="flex overflow-x-auto space-x-4 p-4">
                    {filmesUpcoming.map(filme => (
                        <MovieCard key={filme.id} {...filme} />
                    ))}
                </div>
            </CardContainer>
        </>
    );
}

