import axios from "axios";

export async function fetchData<T>(url: string): Promise<T>{
    const response = await axios.get(url);
    return response.data;
}