import { useEffect } from "react"
import { setGeolocation, setCityInfo } from "@redux/ForecastLocation"
import { useAppDispatch, useAppSelector } from "./storeHooks"
import { getData, LocalStorageItem } from '@helpers/localStorage';
import { CityInfoResponse } from "../api/cityInfoByGeolocationApi";


export const useGeolocation = (): void => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.location);

    useEffect(() => {
        const storageLocation = getData<CityInfoResponse>(LocalStorageItem.Location);
        if (storageLocation !== null) {
            dispatch(setCityInfo(storageLocation.data));
        }
        else {
            location.geolocation === null && navigator.geolocation.getCurrentPosition((position) => {
                dispatch(setGeolocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }));
            });
        }
    }, [])
}