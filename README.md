# Countries Information App

This school project uses React to display information about different countries and provide weather details for their capitals. It utilizes a REST API to fetch data about all countries and the OpenWeatherMap API to retrieve weather information for the selected country’s capital.

## Live Demo:

[Countries Information Demo](https://saima445.github.io/05-react-maiden-tiedot/)

## Overview

The application offers the following features:
- Search for countries by name.
- Display a list of countries matching the search criteria.
- Clicking the “Show” button allows users to view detailed information about a selected country.
- Displays the weather details of the country’s capital (temperature, wind speed, and a weather icon).

### Features

- Search and Filter: You can search for countries by entering a name in the search field. If there are fewer than 10 results, they will be displayed as a list. If there is only one match, detailed information and weather data for the selected country will be shown.
- Country Information: Displays details about the selected country, such as name, capital, area, languages, and flag.
- Weather Information: Retrieves temperature, wind speed, and weather details for the country’s capital using the OpenWeatherMap API.

## Technologies Used

- React: For building the user interface and managing state.
- Axios: For making HTTP requests to the RestCountries and OpenWeatherMap APIs.
- CSS: For styling and responsiveness.

## Components

	1.	App: The main application component that handles search logic and state management.
	2.	Filter: A search field that filters countries based on the search results.
	3.	Countries: Displays a list of countries matching the search criteria.
	4.	CountryInfo: Shows detailed information about a selected country, including the capital, languages, and weather details.
	5.	Country: Represents an individual country in the list.
	6.	countryService: A service responsible for fetching country and weather data from the API.
