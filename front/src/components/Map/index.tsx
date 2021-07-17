import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

import './index.css';
import { Countriees } from '../../interfaces/map';

import axios from 'axios';
import { useEffect, useState } from 'react';

const icon: L.DivIcon = L.divIcon({
	className: 'covid-icon',
	iconSize: [30, 30],
	iconAnchor: [0, 0],
	popupAnchor: [15, 0],
});

export default function FavoritesMap() {
	
	const position: LatLngExpression = [40.4093, 49.8671];
	const zoom: number = 2;

	const [countries, setcountries] = useState<Countriees[]>();

	useEffect(() => {
		// Use [] as second argument in useEffect for not rendering each time
		axios.get('https://corona.lmao.ninja/v2/countries').then((response: any) => {
			console.log(response.data);
			setcountries(response.data);
		});
	}, []);

	return (
		<MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
			<TileLayer
				attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{
				// Placeholder, we'll put our markers here
			}

			{countries?.map((item, index) => {
				let a = new Date(item.updated);
				return (
					<Marker
						icon={icon}
						key={index}
						position={[item.countryInfo.lat, item.countryInfo.long]}
						title={`${item.country} at ${item.countryInfo}`}
					>
						<Popup>
							<img
								src={`${item.countryInfo.flag}`}
								style={{ width: '50px', display: 'inline-block' }}
								alt="welfuhwuke"
							/>{' '}
							<p>Last updated {a.toString()}</p>
							<p style={{ fontWeight: 'bold' }}>Country {item.country}</p>
							<p>Population {item.population}</p>
							<p>Continent {item.continent}</p>
							<p>Total Active {item.active}</p>
							<p>
								Total Death <strong>{item.deaths}</strong>
							</p>
							<p>Total Recovered {item.recovered}</p>
							<p>Today recovered {item.todayRecovered}</p>
							<p>Today Death {item.todayDeaths}</p>
							<p>Today cases {item.todayCases}</p>
							<p>Death per one million {item.deathsPerOneMillion}</p>
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
}
