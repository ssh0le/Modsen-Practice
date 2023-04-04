import { useEffect } from "react"
import { setGeolocation } from "../redux/ForecastLocation"
import { useAppDispatch, useAppSelector } from "./storeHooks"
import { selectGeolocation } from "../redux/selectors/selectLocation"


export const useGeolocation = (): void => {
    const dispatch = useAppDispatch();
    const geolocation = useAppSelector(selectGeolocation);

    useEffect(() => {
        !geolocation && navigator.geolocation.getCurrentPosition((position) => {
            dispatch(setGeolocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }));
        });
    }, [])
}