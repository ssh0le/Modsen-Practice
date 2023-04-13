import React, {FC} from 'react'
import { BodyContainer, EventsContainer, CurrentWeatherContainer } from './styled';
import Calendar from '@components/Calendar';
import CurrentWeather from '@components/CurrentWeather';

const PageBody: FC = () => {
    return (
        <BodyContainer>
            <CurrentWeatherContainer>
                <CurrentWeather/>
            </CurrentWeatherContainer>
            <EventsContainer>
                <Calendar/>
            </EventsContainer>
        </BodyContainer>
    )
}

export default PageBody;