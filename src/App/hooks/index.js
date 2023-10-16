import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';

export const useFetchCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        (async function getCountries() {
            try {
                const response = await axios.get(`http://worldtimeapi.org/api/timezone/`);
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        })();
    }, []);

    return countries;
}

export const useCountryTime = (selectedCountry, isClockRunning) => {
    // const [currentTime, setCurrentTime] = useState(null);
    const [currentOffsetInSeconds, setCurrentOffsetInSeconds] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const getCurrentTimeForCountry = async () => {
            try {
                const response = await axios.get(`http://worldtimeapi.org/api/timezone/${selectedCountry}`);
                setCurrentTime(response.data.utc_datetime);
                setCurrentOffsetInSeconds(response.data.raw_offset)
            } catch (error) {
                console.error('Error fetching current time:', error);
            }
        };
        getCurrentTimeForCountry()
    }, [selectedCountry]);

    useEffect(() => {
        let interval;
        if (isClockRunning) {
            interval = setInterval(() => {
                if (!currentTime) {
                    return
                }
                setCurrentTime(prevTime => new Date(prevTime).getTime() + 1000);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isClockRunning, currentTime]);

    return moment(currentTime).add('seconds', currentOffsetInSeconds).format('HH:mm:ss');
}
