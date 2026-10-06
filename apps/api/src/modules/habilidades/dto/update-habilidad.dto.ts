import { IsInt, IsOptional, IsUUID, Min } from 'class-validator';

export class UpdateHabilidadDto {
  @IsOptional()
  @IsUUID()
  areaId?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  aniosExperiencia?: number;
}
