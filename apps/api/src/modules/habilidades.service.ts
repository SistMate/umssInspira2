import { Injectable } from '@nestjs/common';

@Injectable()
export class HabilidadesService {
  private habilidades = [];

  findAll() {
    return this.habilidades;
  }

  findOne(id: number) {
    return this.habilidades.find((habilidad) => habilidad.id === id);
  }

  create(data: any) {
    const nuevaHabilidad = {
      id: this.habilidades.length + 1,
      ...data,
    };

    this.habilidades.push(nuevaHabilidad);

    return nuevaHabilidad;
  }

  update(id: number, data: any) {
    const index = this.habilidades.findIndex(
      (habilidad) => habilidad.id === id,
    );

    if (index === -1) {
      return null;
    }

    this.habilidades[index] = {
      ...this.habilidades[index],
      ...data,
    };

    return this.habilidades[index];
  }

  remove(id: number) {
    const index = this.habilidades.findIndex(
      (habilidad) => habilidad.id === id,
    );

    if (index === -1) {
      return null;
    }

    const habilidadEliminada = this.habilidades[index];

    this.habilidades.splice(index, 1);

    return habilidadEliminada;
  }
}
