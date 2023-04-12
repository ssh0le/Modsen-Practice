import React, { MouseEventHandler, useState, MouseEvent, FC }  from "react";
import styled from "styled-components";
import ForecastSwitch from "./ForecastSwitch";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { useUpdateForecast } from "@hooks/useUpdateForecast";
import { useAppSelector } from "@hooks/storeHooks";
import Loader from "@components/Loader";


const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    .switch, .loader {
        display: flex;
        justify-content: center;
    }
`

const Forecast: FC = () => {
    useUpdateForecast();
    const [selectedOption, setSelectedOption] = useState(0);
    const isLoading = useAppSelector(state => state.forecast.isLoading);
    const onOptionClickHandler = (index: number): MouseEventHandler<HTMLLIElement> => {
        return (event: MouseEvent<HTMLLIElement>) => {
            setSelectedOption(index);
        }
    }

    return (<ForecastWrapper>
        <div className="switch">
            <ForecastSwitch selectedId={selectedOption} onClick={onOptionClickHandler}/>
        </div>
        {isLoading && <div className="loader"><Loader/></div>}
        {!isLoading && selectedOption === 0 && <DailyForecast/>}
        {!isLoading && selectedOption === 1 && <HourlyForecast/>}
    </ForecastWrapper>)
}

export default Forecast;