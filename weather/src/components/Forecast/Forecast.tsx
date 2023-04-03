import { MouseEventHandler, useState, MouseEvent } from "react";
import styled from "styled-components";
import ForecastSwitch from "./ForecastSwitch";
import DailyForecast from "./DailyForecast/DailyForecast";


const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    .switch {
        display: flex;
        justify-content: center;
    }
`

const Forecast = () => {
    const [selectedOption, setSelectedOption] = useState(0);

    const onOptionClickHandler = (index: number): MouseEventHandler<HTMLLIElement> => {
        return (event: MouseEvent<HTMLLIElement>) => {
            setSelectedOption(index);
        }
    }

    return (<ForecastWrapper>
        <div className="switch">
            <ForecastSwitch selectedId={selectedOption} onClick={onOptionClickHandler}/>
        </div>
        {selectedOption === 0 && <DailyForecast/>}
    </ForecastWrapper>)
}

export default Forecast;