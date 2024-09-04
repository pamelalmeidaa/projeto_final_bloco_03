import { ReactNode } from "react";
import Produto from "./Produto";

export default interface Categoria {
    tipo: ReactNode;
    id: number;
    nome: string;
    produto?: Produto | null;
}