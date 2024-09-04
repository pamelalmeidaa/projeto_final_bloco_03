import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg">
      <header className="py-2 px-6 bg-pink-500  text-white font-bold text-2xl">
        Categoria
      </header>
      <p className="p-8 text-3xl bg-white h-full">{categoria.nome}</p>
      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-green-500 hover:bg-green-700 
            flex items-center justify-center py-2 transition-colors duration-200"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="text-white bg-red-500 hover:bg-red-700 w-full 
            flex items-center justify-center transition-colors duration-200"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;
