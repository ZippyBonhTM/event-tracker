import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../hooks/useAtualizarEventos';

const EventoCheckbox: React.FC<{ evento: IEvento}> = ({ evento }) => {
  const atualizarEvento = useAtualizarEvento()
  
  const aoAlterarStatus = () => {
    const eventoAtualizado = {
      ...evento,
      completo: !evento.completo
    }
    atualizarEvento(eventoAtualizado)
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={aoAlterarStatus}></i>)
}

export default EventoCheckbox