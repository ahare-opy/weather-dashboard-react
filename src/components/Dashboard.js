import React from "react";

import useNightMode from '../hooks/useNightMode';
import useTempUnit from '../hooks/useTempUnit';
import useImageFetch from '../hooks/useImageFetch';
import useCoordination from "../hooks/useCoordinations";
import useWeatherLocation from '../hooks/useWeatherLocation';

function Dashboard(){
    const [nightMode, useNightModeChanged] = useNightMode();
    const [tempUnit, useTempUnitChanged] = useTempUnit();
    const [imageFetch, useImageFetchChanged] = useImageFetch();
    const [{lat, long}, loadingLocation, findCoordinates] = useCoordination();
    const [weather, loading, error, fetchWeather, searchByLocation,getWeatherLocation] = useWeatherLocation();
    const [showDays, setShowDays] = useState(false);



    return(
        <div>
            
        </div>
    )
}

export default Dashboard;