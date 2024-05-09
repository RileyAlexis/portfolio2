import React, { useState, useEffect } from 'react'
import './App.css'

//Interfaces
import { LightColors, DarkColors } from './interfaces';

//Components
import { BoxDraw } from './components/BoxDraw/BoxDraw';

import { ButterflySVG } from './components/Butterfly';

export const App: React.FC = () => {

  const [colorScheme, setColorScheme] = useState<string>('light');

  const lightBar: LightColors = {
    violetlight100: '#8800c7',
    violetlight75: '#9F32D2',
    violetlight50: '#B766DD',
    violetlight25: '#CF99E8',
    violetlight0: '#E7CCF3',
    yellowlight100: '#FFFDD5',
    yellowlight75: '#FFFBAB',
    yellowlight50: '#FFF981',
    yellowlight25: '#FFF757',
    yellowlight0: '#FFF52E',
  };

  const darkBar: DarkColors = {
    violetdark100: '#8800c7',
    violetdark75: '#6C009F',
    violetdark50: '#510077',
    violetdark25: '#36004F',
    violetdark0: '#1B0027',
    yellowdark100: '#333109',
    yellowdark75: '#666212',
    yellowdark50: '#99931B',
    yellowdark25: '#CCC424',
    yellowdark0: '#FFF52E',
  }

  //Detects light or dark theme requested by browser
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setColorScheme(darkModeQuery.matches ? 'dark' : 'light');

    const updateColorScheme = () => {
      setColorScheme(darkModeQuery.matches ? 'dark' : 'light');
    };

    darkModeQuery.addEventListener('change', updateColorScheme);
    return () => {
      darkModeQuery.removeEventListener('change', updateColorScheme);
    };
  }, []);

  return (
    <div className='container'>
      <div className='butterflyContainer'>
        <ButterflySVG color={'green'} />
      </div>
      <div>
        <BoxDraw />
      </div>
    </div>
  )
}