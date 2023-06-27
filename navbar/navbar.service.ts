import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  forumOption: 'sac' | 'price' = 'sac';
  
  constructor() { }
}
