import { Module } from '@nestjs/common';
import { HabilidadesModule } from './modules/habilidades/habilidades.module';

@Module({
  imports: [
    HabilidadesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
