import axios from "axios"
import { ApiError } from "../utils/ApiError.js";

const getAddressCoordinate = async (addressObj) => {
    const api = process.env.GOOGLE_MAP_API;

    // Extract the address string if the input is an object
    const address = typeof addressObj === 'object' && addressObj.address ? addressObj.address : addressObj;

    if (typeof address !== 'string') {
        throw new Error(`Invalid address format. Expected a string but received ${typeof address}`);
    }

    const encodedAddress = encodeURIComponent(address.trim());
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${api}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === 'OK' && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
        // console.log(location);
        
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            console.error("Google Maps API Error:", response.data);
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
        console.log("API Response:", response.data);
        if (response.data.status === 'OK') {

            if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            }

            return response.data.rows[ 0 ].elements[ 0 ];
        } else {
            throw new Error('Unable to fetch distance and time');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }
}

const Autocompletesuggetions=async(input)=>{
    
    const requiredinput=input.input;
    if(!requiredinput){
        throw new Error('Input query is required')
    }
    const api=process.env.GOOGLE_MAP_API;

    const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(requiredinput)}&key=${api}
`;



try {
    const response=await axios.get(url);
    
    if(response.data.status==='OK'){
        return response.data.predictions;
    }
    else{
        throw new Error('Unable to fetch suggetions')
    }
} catch (error) {
    console.log(error);
    throw error;
    
}
}

export { getAddressCoordinate,getdistancetime,Autocompletesuggetions };
