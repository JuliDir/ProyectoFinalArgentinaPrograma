import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  $emitter = new EventEmitter();

    emitirEvento() {
        this.$emitter.emit();
    }  
}
