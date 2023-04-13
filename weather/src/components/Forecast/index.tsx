import React, { MouseEventHandler, useState, MouseEvent, FC }  from "react";
import ForecastSwitch from "./ForecastSwitch";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { useUpdateForecast } from "@hooks/useUpdateForecast";
import { useAppSelector } from "@hooks/storeHooks";
import Loader from "@components/Loader";
import { ForecastContainer, SwitchContainer, LoaderContainer } from "./styled";


const Forecast: FC = () => {
    useUpdateForecast();
    const [selectedOption, setSelectedOption] = useState(0);
    const isLoading = useAppSelector(state => state.forecast.isLoading);
    const onOptionClickHandler = (index: number): MouseEventHandler<HTMLLIElement> => {
        return (event: MouseEvent<HTMLLIElement>) => {
            setSelectedOption(index);
        }
    }

    return (<ForecastContainer>
        <SwitchContainer>
            <ForecastSwitch selectedId={selectedOption} onClick={onOptionClickHandler}/>
        </SwitchContainer>
        {isLoading && <LoaderContainer><Loader/></LoaderContainer>}
        {!isLoading && selectedOption === 0 && <DailyForecast/>}
        {!isLoading && selectedOption === 1 && <HourlyForecast/>}
    </ForecastContainer>)
}

export default Forecast;