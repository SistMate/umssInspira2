import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { HabilidadesService } from './habilidades.service';
import { CreateHabilidadDto } from './dto/create-habilidad.dto';
import { UpdateHabilidadDto } from './dto/update-habilidad.dto';

@Controller('habilidades')
export class HabilidadesController {
  constructor(
    private readonly habilidadesService: HabilidadesService,
  ) {}

  @Get('catalogo')
  obtenerCatalogo() {
    return this.habilidadesService.obtenerCatalogo();
  }

  @Post('egresados/:egresadoId')
  registrar(
    @Param('egresadoId', ParseUUIDPipe) egresadoId: string,
    @Body() createHabilidadDto: CreateHabilidadDto,
  ) {
    return this.habilidadesService.registrar(
      egresadoId,
      createHabilidadDto,
    );
  }

  @Get('egresados/:egresadoId')
  listarPorEgresado(
    @Param('egresadoId', ParseUUIDPipe) egresadoId: string,
  ) {
    return this.habilidadesService.listarPorEgresado(egresadoId);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateHabilidadDto: UpdateHabilidadDto,
  ) {
    return this.habilidadesService.actualizar(
      id,
      updateHabilidadDto,
    );
  }

  @Delete(':id')
  eliminar(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.habilidadesService.eliminar(id);
  }
}
