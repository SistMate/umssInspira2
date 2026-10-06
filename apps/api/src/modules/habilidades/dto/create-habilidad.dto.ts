import { IsInt, IsUUID, Min } from 'class-validator';

export class CreateHabilidadDto {
  @IsUUID()
  areaId: string;

  @IsInt()
  @Min(0)
  aniosExperiencia: number;
}
