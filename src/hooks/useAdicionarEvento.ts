import { useSetRecoilState } from "recoil"
import { IEvento } from "../interfaces/IEvento"
import { listaDeEventosState } from "../interfaces/state/atom"
import { obterId } from "../util"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser adicionados com a data menor do que hoje.")
        }
        evento.id = obterId();
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento