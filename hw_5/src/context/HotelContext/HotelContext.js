import React, { useState, useEffect } from 'react';
import loader from '../../loader.gif';

export const HotelContext = React.createContext([]);

export const HotelContextProvider = ({ children }) => {
    const [hotels, setHotelsData] = useState([]);

    const [ loading, isLoading ] = useState(true);
	const [ error, setError ] = useState('');

    useEffect(() => {
        isLoading(true);
        fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
            "destinationId": "1506246",
            "pageNumber": "1",
            "checkIn": "2021-12-01",
            "checkOut": "2021-12-30",
            "pageSize": "25",
            "adults1": "1",
            "currency": "USD",
            "locale": "en_US",
            "sortOrder": "PRICE"
        })}`, {
            method: 'GET',
            headers: {
                "x-rapidapi-key": "7f600d37eamsh713520cffaeb781p16142cjsnb2608dad6911",
                "x-rapidapi-host": "hotels4.p.rapidapi.com",
                "useQueryString": true
            }
        })
        .then(data => data.json())
        .then(json => {
            isLoading(false);
            setHotelsData(json.data.body.searchResults.results)
        })
        .catch((error) => {
            console.log(error);
            isLoading(false);
			setError('fetch failed');
        })
    }, []);
    if (loading) {
		return <div className="loading"><img src={ loader } className="loader" alt="loader" /></div>
	}
	if (error !== '') {
		return (
			<div className="container">
				<div className="ErrorMessage">Error: { error }</div>
			</div>
		)
    }
    return (
        <HotelContext.Provider value={{ hotels: hotels, setHotelsData: setHotelsData }}>
            { children }
        </HotelContext.Provider>
    )
};