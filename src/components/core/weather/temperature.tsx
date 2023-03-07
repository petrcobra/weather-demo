import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

interface ITemperature {
    value: number
}

const Temperature = ({value}: ITemperature) => {
    const unit = useSelector((state: RootState) => state.settings.unit);

    return (
        <div>
            <span>{value}</span> °<span>{unit}</span>

        </div>
    )
};

export default Temperature;