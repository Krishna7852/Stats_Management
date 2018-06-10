import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

  public put(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public value(key: string): string {
    return sessionStorage.getItem(key);
  }

  public remove(key: string): void {
    sessionStorage.removeItem(key);
  }

}
