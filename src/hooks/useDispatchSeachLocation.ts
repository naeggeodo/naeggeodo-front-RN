import {OnCompleteParams} from '@actbase/react-daum-postcode/lib/types';
import {useCallback, useState} from 'react';
import locationSlice from '../slices/location';
import {useAppDispatch} from '../store';

export interface UseSearchLocationProps {
  webviewIsOpened?: boolean;
  openWebview?: () => void;
  closeWebview: () => void;
  handleLocation: (data: OnCompleteParams) => void;
}

export function useDispatchSearchLocation(): UseSearchLocationProps {
  const [webviewIsOpened, setWebview] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const openWebview = useCallback(() => {
    setWebview(true);
  }, []);

  const closeWebview = useCallback(() => {
    setWebview(false);
  }, []);

  const handleLocation = useCallback<(data: OnCompleteParams) => void>(data => {
    dispatch(
      locationSlice.actions.searchLocation({
        address: JSON.stringify(data.address),
      }),
    );
    closeWebview();
  }, []);

  return {openWebview, webviewIsOpened, handleLocation, closeWebview};
}
