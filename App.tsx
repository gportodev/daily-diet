import { Routes } from './src/routes';

import useCachedResources from './src/hooks/useCachedResources';
import { StatusBar } from 'expo-status-bar';
import { Loader } from './src/components/Loader/Loader';

export default function App(): JSX.Element {
  const isLoading = useCachedResources();

  if (!isLoading) {
    return <Loader />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
