export enum LocalStorageItem {
    Location = 'location',
}

interface SavedData<T> {
    data: T,
    saveDate: Date
}

export function setData<T>(data: T, name: LocalStorageItem): void {
    const date = new Date();
    localStorage.setItem(name, JSON.stringify({
        data,
        saveDate: date.toString()
    }));
}

export function getData<T>(name: LocalStorageItem): SavedData<T> | null {
    const storageData = localStorage.getItem(name);
    if (storageData === null) {
        return null
    } else {
        return JSON.parse(storageData) as SavedData<T>;
    }
}