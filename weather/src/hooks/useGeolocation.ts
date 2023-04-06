import { useEffect } from "react"
import { setGeolocation} from "@store/ForecastLocation"
import { useAppDispatch, useAppSelector } from "./storeHooks"


export const useGeolocation = (): void => {
    const dispatch = useAppDispatch();
    const location = useAppSelector(state => state.location);

    useEffect(() => {
        location.geolocation === null && navigator.geolocation.getCurrentPosition((position) => {
            dispatch(setGeolocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }));
        });
    }, [])
}