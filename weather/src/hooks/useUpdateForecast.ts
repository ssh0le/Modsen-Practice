import { useEffect } from "react";
import { selectGeolocation, selectFetchTime } from "@store/selectors";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { startFetch } from "@store/forecastSlice";
import { isSameDates } from "@helpers/isSameDates";

export const useUpdateForecast = (): void => {
    const dispatch = useAppDispatch();
    const geolocation = useAppSelector(selectGeolocation);
    const fetchTime = useAppSelector(selectFetchTime);
    let isShouldUpdate = false;

    if (fetchTime !== null) {
        isShouldUpdate = !isSameDates(new Date(), new Date(fetchTime));
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