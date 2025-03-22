import axios from "axios";
import { Captain } from "../models/captain.model.js";

const getAddressCoordinate = async (address) => {
    const api = process.env.GOOGLE_MAP_API;
    const encodedAddress = encodeURIComponent(address.trim());
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${api}`;

    try {
        const response = await axios.get(url);


        if (response.data.status === 'OK' && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Unable to fetch coordinates: ${JSON.stringify(response.data)}`);
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        throw error;
    }
};

const getdistancetime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAP_API;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }
            return response.data.rows[0].elements[0];
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const Autocompletesuggetions = async (input) => {
    const requiredinput = input.input;
    if (!requiredinput) {
        throw new Error('Input query is required');
    }
    const api = process.env.GOOGLE_MAP_API;

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(requiredinput)}&key=${api}`;
    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getCaptainsInRadius = async (ltd, lng, radius) => {
    
       const captains = await Captain.find({
            location: {
                $geoWithin: {
                    $centerSphere: [[ltd,lng], radius / 6371]
                }
            }
        });
   

    return captains; 
}
export { getAddressCoordinate, getdistancetime, Autocompletesuggetions, getCaptainsInRadius };