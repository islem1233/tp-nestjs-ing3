
import { Injectable } from '@nestjs/common';

@Injectable()
export class TravelService {

  private trips = [
    { id: 1, name: 'To China', price: 9000 },
    { id: 2, name: 'To Morocco', price: 4000 },
  ];

  // Afficher tous les voyages
  findAll() {
    return this.trips;
  }

  // Afficher un voyage par son id
  findOne(id: number) {
    return this.trips.find(trip => trip.id === id);
  }

  // Message pour planifier un voyage
  planifierVoyage(): string {
    return 'Planifier un nouveau voyage ici';
  }

}
