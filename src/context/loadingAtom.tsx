import { atom, useRecoilState } from 'recoil';

import { InitialLoadingType } from './types';

type LoadingInitialState = {
  loading: InitialLoadingType;
  setLoading: React.Dispatch<React.SetStateAction<InitialLoadingType>>;
};

export const initialLoadingState: InitialLoadingType = {
  isLoading: false,
};

export const loadingAtom = atom<InitialLoadingType>({
  key: 'loadingAtom',
  default: initialLoadingState,
});

export const useLoadingState = (): LoadingInitialState => {
  const [loading, setLoading] = useRecoilState(loadingAtom);
  return { loading, setLoading };
};
