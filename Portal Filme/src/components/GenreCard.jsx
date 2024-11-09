import { NavLink } from 'react-router-dom';

export default function GenreCard({ genre }) {
    return (
        <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100 transition">
            <NavLink to={`/genres/${genre.id}`}>  {/* Corrigido para '/genres/${genre.id}' */}
                <h2 className="text-lg font-semibold">{genre.name}</h2>
            </NavLink>
        </div>
    );
}
