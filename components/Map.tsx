import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, ImageOverlay } from 'react-leaflet';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: "/image/station-icon.png",
    iconSize: [30, 30]
  });

const redStyle = { color: "red" };
const blueStyle = { color: "blue" };

const millStations: { name: string, position: [number, number] }[][] = [
  [
    { name: 'VCC–Clark', position: [49.26598888885872, -123.07863295126705] },
    { name: 'Commercial–Broadway Station', position: [49.262791008577636, -123.06870006171086] },
    { name: 'Renfrew Station', position: [49.2591480418142, -123.04495085007177] },
    { name: 'Rupert Station', position: [49.260990907447734, -123.03252642308792] },
    { name: 'Gilmore Station', position: [49.26508599336608, -123.01292717149758] },
    { name: 'Brentwood Town Centre Station', position: [49.26669145950492, -123.0012754577432] },
    { name: 'Holdom Station', position: [49.26482921898758, -122.9815357224611] },
    { name: 'Sperling–Burnaby Lake Station', position: [49.25947305046942, -122.96327034266204] },
    { name: 'Lake City Way Station', position: [49.254712014456196, -122.93883668076055] },
    { name: 'Production Way–University Station', position: [49.253545214239885, -122.91764137705579] },
    { name: 'Lougheed Town Centre Station', position: [49.24861884611804, -122.89604005244962] },
    { name: 'Burquitlam Station', position: [49.261601004652576, -122.88890491603031] },
    { name: 'Moody Centre Station', position: [49.27814295939468, -122.84518252546387] },
    { name: 'Inlet Centre Station', position: [49.27732196312931, -122.82772866356221] },
    { name: 'Coquitlam Central Station', position: [49.27403609911577, -122.79946222750706] },
    { name: 'Lincoln Station', position: [49.2805023539904, -122.79342317705384] },
    { name: 'Lafarge Lake–Douglas Station', position: [49.28578913707071, -122.7910203886928] },
  ]
];

const expoStations: { name: string, position: [number, number] }[][] = [
  [
    { name: 'King George Station', position: [49.182866188418615, -122.84484021531652] },
    { name: 'Surrey Central Station', position: [49.18991726620077, -122.84806019089498] },
    { name: 'Gateway Station', position: [49.19909949860894, -122.8507282605841] },
    { name: 'Scot Road Station', position: [49.20454084792252, -122.87428487369635] },
    { name: 'Columbia Station', position: [49.20495094687599, -122.9060556295154] },
    { name: 'New Westminster Station', position: [49.201571135026555, -122.91257535835175] },
    { name: '22nd Street Station', position: [49.20006170717063, -122.94898885846776] },
    { name: 'Edmonds Station', position: [49.212395466982855, -122.95913431602362] },
    { name: 'Royal Oak Station', position: [49.22020721554063, -122.98849496020415] },
    { name: 'Metrotown Station', position: [49.225883832381925, -123.00380835835065] },
    { name: 'Patterson Station', position: [49.2299127080579, -123.01269398903993] },
    { name: 'Joyce–Collingwood Station', position: [49.238492182500615, -123.03175781639052] },
    { name: '29th Avenue Station', position: [49.24440539621261, -123.0460714057189] },
    { name: 'Nanaimo Station', position: [49.248404235966895, -123.05593876020285] },
    { name: 'Main–Street Science World Station', position: [49.27331197248742, -123.10032854485695] },
    { name: 'Stadium–Chinatown', position: [49.27974938131259, -123.10975465870506] },
    { name: 'Granville Station', position: [49.28332861418609, -123.11613886695145] },
    { name: 'Burrard Station', position: [49.285720730490375, -123.12021463136499] },
    { name: 'Waterfront Station', position: [49.28600964018542, -123.11157743416624] },
  ],
  [
    { name: 'Columbia Station', position: [49.20495094687599, -122.9060556295154] },
    { name: 'Sapperton Station', position: [49.22485315006658, -122.88943907406737] },
    { name: 'Braid Station', position: [49.23340098572, -122.88289458903968] },
    { name: 'Lougheed Station', position: [49.24861176880698, -122.89698420289588] },
    { name: 'Production Way–University Station', position: [49.24861176880698, -122.89698420289588] },
  ]
];

const TransitMap = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '150vh' }}>
      <header>
        <Image src="/image/logo.png" width={100} height={100} alt="station-logo"/>
        <h1>Carolina's Transit Map</h1>
      </header>

      <MapContainer style={{ height: "90vh", width: "120rem" }} center={[49.25926999181031, -122.96347419054722]} zoom={14} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://github.com/carolinalxu/Exercise-1.git">By Carolina Loo Xu</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {millStations.map((millennium, index) => (
          <div key={index}>
            {millennium.map((station, index) => (
              <Marker key={index} position={station.position} icon={icon}>
                <Popup>{station.name}</Popup>
              </Marker>
            ))}
            {millennium.length > 1 && <Polyline pathOptions={redStyle} positions={millennium.map(station => station.position)} />}
          </div>
        ))}

        {expoStations.map((expo, index) => (
          <div key={index}>
            {expo.map((station, index) => (
              <Marker key={index} position={station.position} icon={icon}>
                <Popup>{station.name}</Popup>
              </Marker>
            ))}
            {expo.length > 1 && <Polyline pathOptions={blueStyle} positions={expo.map(station => station.position)} />}
          </div>
        ))}
      </MapContainer>
    </div>
  );
}

export default TransitMap;
