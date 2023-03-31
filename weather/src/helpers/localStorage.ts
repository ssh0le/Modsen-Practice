export enum LocalStorageItem {
    CurrentCity = 'current_city',
    example = 'test'
}

interface SavedData<T> {
    data: null | T,
    saveDate: null | Date
}

export function setData<T>(data: T, name: LocalStorageItem): void {
    const date = new Date();
    localStorage.setItem(name, JSON.stringify({
        data,
        saveDate: date.toString()
    }));
}

export function getData<T>(name: LocalStorageItem): SavedData<T> {
    const storageData = localStorage.getItem(name);
    if (storageData === null) {
        return {
            data: null,
            saveDate: null
        }
    } else {
        return JSON.parse(storageData);
    }
}