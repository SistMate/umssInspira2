import { Injectable } from '@nestjs/common';

@Injectable()
export class HabilidadesService {
  private habilidades: any[] = [];

  obtenerCatalogo() {
    return this.habilidades;
  }

  registrar(egresadoId: string, data: any) {
    const nuevaHabilidad = {
      id: this.habilidades.length + 1,
      egresadoId,
      ...data,
    };

    this.habilidades.push(nuevaHabilidad);

    return nuevaHabilidad;
  }

  listarPorEgresado(egresadoId: string) {
    return this.habilidades.filter(
      (habilidad) => habilidad.egresadoId === egresadoId,
    );
  }

  actualizar(id: number, data: any) {
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

  eliminar(id: number) {
    const index = this.habilidades.findIndex(
      (habilidad) => habilidad.id === id,
    );

    if (index === -1) {
      return null;
    }

    const eliminada = this.habilidades[index];

    this.habilidades.splice(index, 1);

    return eliminada;
  }
}
