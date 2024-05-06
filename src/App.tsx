import { useState, useEffect } from 'react'
import './App.css'

export const App: React.FC = () => {

  const [colorScheme, setColorScheme] = useState<string>('light');
  const lightBar: string[] = [
    '#8800c7',
    '#9F32D2',
    '#B766DD',
    '#CF99E8',
    '#E7CCF3',

    '#FFFDD5',
    '#FFFBAB',
    '#FFF981',
    '#FFF757',
    '#FFF52E',
  ];

  const darkBar: string[] = [
    '#8800c7',
    '#6C009F',
    '#510077',
    '#36004F',
    '#1B0027',

    '#333109',
    '#666212',
    '#99931B',
    '#CCC424',
    '#FFF52E',
  ]

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
      {darkBar.map((color, index) => (
        <div
          key={index}
          className='verticalBar'
          style={{
            backgroundColor: color,
            animationDelay: `${index * 0.2}s`
          }}
        ></div>
      ))}
    </div>
  )
}