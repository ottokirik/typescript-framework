import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

// T - тип модели, K -атрибуты модели
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  // deserialize => функция, которая может взять данные типа K и вернуть объект типа T
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      this.models = response.data.map((model: K) => this.deserialize(model));

      this.trigger('change');
    });
  }
}
