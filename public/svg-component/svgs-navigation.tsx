import React from 'react';

import colors from '../../styles/theme';

export interface IColorSVG {
  width: number;
  height: number;
  selected?: boolean;
}

export const AcessoriosSVG: React.FC<IColorSVG> = ({width, height, selected}: IColorSVG) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 23.683 9.868">
      <g id="reading" transform="translate(0 -149.334)">
        <g id="Grupo_25554" data-name="Grupo 25554" transform="translate(0 149.334)">
          <path id="Caminho_29724" data-name="Caminho 29724" d="M22.7,153.281h-.1a4.922,4.922,0,0,0-9-1.628,4.129,4.129,0,0,0-1.754-.345,4.132,4.132,0,0,0-1.754.345,4.922,4.922,0,0,0-9,1.628h-.1a.987.987,0,1,0,0,1.974h.1a4.934,4.934,0,0,0,9.768-.987,4.838,4.838,0,0,0-.077-.761,2.027,2.027,0,0,1,1.064-.226,2.007,2.007,0,0,1,1.064.224,4.863,4.863,0,0,0-.077.763,4.934,4.934,0,0,0,9.768.987h.1a.987.987,0,0,0,0-1.974Z" transform="translate(0 -149.334)" fill={selected ? colors.danger : colors.medium}/>
        </g>
      </g>
    </svg>
  )
}

export const RoupasSVG: React.FC<IColorSVG> = ({width, height, selected}: IColorSVG) => {
    return (
      <svg id="clothing-hanger" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 19.052 14.005">
        <path id="Caminho_29719" data-name="Caminho 29719" d="M18.146,71.98l-7.878-5.055v-.38a.67.67,0,0,1,.354-.568c.03-.02.065-.042.1-.066A2.129,2.129,0,0,0,11.9,64.044a2.4,2.4,0,0,0-1.852-2.261,2.42,2.42,0,0,0-2.395.672A2.553,2.553,0,0,0,6.966,64.3c0,.057,0,.179-.005.3,0,.164.315.3.707.3h.142c.391,0,.709-.133.71-.3,0-.136,0-.272,0-.3.022-.54.163-.857.7-.969a1.023,1.023,0,0,1,.907.239.559.559,0,0,1,.133.434.64.64,0,0,1-.268.477l-.675.471a1.223,1.223,0,0,0-.614,1.13v.845l-7.8,5.036A2.038,2.038,0,0,0,.091,74.3a1.958,1.958,0,0,0,2.045,1.416H17.013a1.994,1.994,0,0,0,1.966-1.436A2.1,2.1,0,0,0,18.146,71.98Zm-.8,1.759a.369.369,0,0,1-.354.278H2.117a.361.361,0,0,1-.205-.667l7.623-4.888L17.2,73.37A.317.317,0,0,1,17.345,73.739Z" transform="translate(0 -61.712)" fill={selected ? colors.danger : colors.medium}/>
      </svg>
    )
}

export const EletronicosSVG: React.FC<IColorSVG> = ({width, height, selected}: IColorSVG) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16.93 13.302">
        <g id="computer" transform="translate(-32 -80)">
          <path id="Caminho_29819" data-name="Caminho 29819" d="M41.069,385.209H39.86A1.514,1.514,0,0,1,38.379,384H32v.72a1.1,1.1,0,0,0,1.094,1.094H47.836a1.1,1.1,0,0,0,1.094-1.094V384H42.551A1.514,1.514,0,0,1,41.069,385.209Z" transform="translate(0 -292.512)" fill={selected ? colors.danger : colors.medium}/>
          <path id="Caminho_29820" data-name="Caminho 29820" d="M88,120.465h12.7V112H88Zm9.847-4.287-3.023,2.116a.3.3,0,1,1-.347-.5l3.023-2.116a.3.3,0,0,1,.347.5Zm-7,.109,3.023-2.116a.3.3,0,0,1,.347.5L91.2,116.782a.3.3,0,1,1-.347-.5Zm-.6,2.418,7.86-5.442a.3.3,0,0,1,.344.5l-7.86,5.442a.3.3,0,0,1-.344-.5Z" transform="translate(-53.884 -30.791)" fill={selected ? colors.danger : colors.medium}/>
          <path id="Caminho_29821" data-name="Caminho 29821" d="M71.116,80.931A.932.932,0,0,0,70.185,80H56.931a.932.932,0,0,0-.931.931v9.952H71.116Zm-.6,9.046a.3.3,0,0,1-.3.3h-13.3a.3.3,0,0,1-.3-.3V80.907a.3.3,0,0,1,.3-.3h13.3a.3.3,0,0,1,.3.3Z" transform="translate(-23.093)" fill={selected ? colors.danger : colors.medium}/>
          <path id="Caminho_29822" data-name="Caminho 29822" d="M218.231,384.6h1.209a.908.908,0,0,0,.855-.6h-2.919A.908.908,0,0,0,218.231,384.6Z" transform="translate(-178.371 -292.512)" fill={selected ? colors.danger : colors.medium}/>
        </g>
      </svg>
    )
}