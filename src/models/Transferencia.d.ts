import { GridPaginationModel } from "@mui/x-data-grid";

export interface TransferenciaDto {
  id: number;
  dataTransferencia: Date;
  valor: number;
  tipo: TipoTransferencia;
  nomeOperadorTransacao: string;
}

export interface TransferenciaPageDto {
  page: Page<TransferenciaDto>
  saldoPeriodo: number
}

export interface TransferenciaRequestParam {
  operador?: string
  dataInicio?: Date | null
  dataFim?: Date | null
}
