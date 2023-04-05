import styled from "styled-components"
import React from 'react'
import { useGeolocation } from "../hooks/useGeolocation"
import { useAppSelector } from "@hooks/storeHooks"
import { selectLocationInfo } from "@selectors/selectLocation"


const CurrentLocationWrapper = styled.div`
    
`

const CurrentLocation = () => {
    useGeolocation();
    const locationInfo = useAppSelector(selectLocationInfo);
    return(
        <CurrentLocationWrapper>
            {locationInfo?.city}, {locationInfo?.countryName}
        </CurrentLocationWrapper>
    )
}

export default CurrentLocation;