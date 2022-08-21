import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';

export default function () {
  const [state, dispatch] = useContext(GlobalContext);
  const { locale } = state

  const setTheme = (selectedLocale) => {
    dispatch({
      type: 'SET_LOCALE',
      payload: selectedLocale,
    });
  }

  return {
    setTheme,
    locale
  }
}