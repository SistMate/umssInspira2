import { Module } from '@nestjs/common';
import { HabilidadesModule } from './habilidades/habilidades.module';

@Module({
  imports: [
    HabilidadesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
