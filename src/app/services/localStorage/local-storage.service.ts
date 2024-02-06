import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    //Event triggered after modifications to localStorage
    public storageEvent = new Event('storage');

    //Get data from localStorage and convert it
    public getLocalStorageItem(name: string) {
        const res = localStorage.getItem(name);
        return res ? JSON.parse(res) : null;
    }

    //Set data in localStorage
    public setLocalStorageItem(name: string, value: any) {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(name, stringValue);
        window.dispatchEvent(this.storageEvent);
    }
}
