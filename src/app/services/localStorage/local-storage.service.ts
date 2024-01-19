import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    public getLocalStorageItem(name: string) {
        const res = localStorage.getItem(name);
        return res ? JSON.parse(res) : null;
    }

    public setLocalStorageItem(name: string, value: any) {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(name, stringValue);
    }
}
