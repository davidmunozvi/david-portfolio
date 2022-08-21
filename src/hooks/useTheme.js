import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';

export default function () {
  const [state, dispatch] = useContext(GlobalContext);
  const { theme } = state

  const setTheme = (selectedTheme) => {
    dispatch({
      type: 'SET_THEME',
      payload: selectedTheme,
    });
  }

  return {
    setTheme,
    theme
  }
}