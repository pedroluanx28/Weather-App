import axios from 'axios'

export const Api = {
    searchWeather: async (city: string) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ded3f796b16afe0854746d4c62c93c8`
            );
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch weather data');
        }
    }
};
