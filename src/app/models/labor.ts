import { Maquina } from "./maquina";
import { Parte } from "./parte";
import { Operario } from "./operario";

export class Labor {
    id: number;
    maquina: Maquina;
    parte: Parte;
    operario: Operario;
}