import { atom } from "recoil";
import { IEvento } from "../IEvento";
import { IFiltroDeEventos } from "../IFiltroDeEventos";
import { eventosAsync } from "../../hooks/seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key: "listaDeEventos",
    default: eventosAsync,
});

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: "filtroDeEventos",
    default: {}
})