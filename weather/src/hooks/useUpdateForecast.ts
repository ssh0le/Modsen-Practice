import { useEffect } from "react";
import { selectGeolocation, selectFetchTime } from "@store/selectors";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { startFetch } from "@store/forecastSlice";

export const useFetchForecast = (): void => {
    const dispatch = useAppDispatch();
    const geolocation = useAppSelector(selectGeolocation);
    const fetchTime = useAppSelector(selectFetchTime);
    let isShouldUpdate = false;
    if (fetchTime !== null) {
        const today = new Date();
        const fetchDate = new Date(fetchTime);
        isShouldUpdate = today.getFullYear() > fetchDate.getFullYear() || today.getMonth() > fetchDate.getMonth() || today.getDate() > fetchDate.getDate();
    } else {
        isShouldUpdate = true;
    }

    useEffect(() => {
        if (geolocation !== null) {
            if (isShouldUpdate) {
                dispatch(startFetch(geolocation));
            }
        }
    })
}