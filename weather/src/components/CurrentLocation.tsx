import styled from "styled-components"
import React from 'react'

const CurrentLocationWrapper = styled.div`
    
`


const CurrentLocation = () => {
    const locationInfo = {
        country: 'Belarus',
        town: 'Minsk'
    }
    return(
        <CurrentLocationWrapper>
            {locationInfo.town}, {locationInfo.country}
        </CurrentLocationWrapper>
    )
}

export default CurrentLocation;