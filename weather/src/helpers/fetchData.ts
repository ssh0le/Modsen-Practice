import axios from "axios";

export async function fetchData<T>(url: string): Promise<T>{
    const response = await axios.get(url);
    if (response.status >= 200 && response.status < 300) {
        return response.data;
    } else {
        throw new Error(response.data);
    }
    
}