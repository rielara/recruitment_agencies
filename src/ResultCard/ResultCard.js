import React, { useState, useEffect } from 'react';
import recruitment_agencies from '../Data/recruitment_agencies.json';
import './ResultCard.css';
import Switch from './Switch'; 

export default function ResultCard() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <div className="ResultCard">
            <h1>Recruitment Agencies by Country</h1>

            <Switch onChange={toggleTheme} checked={theme === 'dark'} />

            <div className="country-buttons">
                {Object.keys(recruitment_agencies).map((country) => (
                    <button
                        key={country}
                        onClick={() => handleCountrySelect(country)}
                        className={`country-button ${selectedCountry === country ? 'active' : ''}`}
                    >
                        {country}
                    </button>
                ))}
            </div>

            {selectedCountry && (
                <div>
                    <h2>Agencies in {selectedCountry}</h2>
                    <ul>
                        {recruitment_agencies[selectedCountry].map((url, index) => (
                            <li key={index}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    {url}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
