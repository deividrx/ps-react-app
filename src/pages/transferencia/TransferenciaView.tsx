import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Button, Card, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueFormatterParams } from "@mui/x-data-grid";
import { FormattedNumber } from "react-intl";
import { intl } from "../../App";
import { FormDatePicker, FormTextField } from "../../core/components/forms";
import useTransferenciaViewModel from "./useTransferenciaController";

const columns: GridColDef[] = [
  {
    flex: 1,
    field: 'valor',
    headerName: 'Dados',
    valueFormatter: (params) => {
      return intl.formatNumber(
        Math.abs(params.value),
        { style: 'currency', currency: 'BRL' }
      )
    }
  },
  {
    flex: 1,
    field: 'dataTransferencia',
    headerName: 'Valentia',
    valueFormatter: (params ) => {
      return `${intl.formatDate(params.value)} ${intl.formatTime(params.value)}` 
    }
  },
  {
    flex: 1,
    field: 'tipo',
    headerName: 'Tipo',
    valueFormatter(params) {
      switch (params.value) {
        case "SAQUE": return "Saque"
        case "DEPOSITO": return "Depósito"
        case "TRANSFERENCIA": return "Transferência"
      }
    },
  },
  {
    flex: 1,
    field: 'nomeOperadorTransacao',
    headerName: 'Operador',
    valueFormatter: (params) => params.value ?? "Indisponível",
  },
];

export default function TransferenciaView() {
  const {
    control,
    data,
    handleFilterSubmit,
    loading,
    paginationModel,
    onPaginationModelChange
  } = useTransferenciaViewModel();

  return (
    <div className="Conta" >
      <form className="Conta-filters" onSubmit={handleFilterSubmit}>
        <FormDatePicker label="Data de Início" control={control} name="dataInicio" />
        <FormDatePicker control={control} name="dataFim" label="Data de Fim" />
        <FormTextField control={control} name="operador" label="Operador" variant="outlined" />
        <Button type="submit" variant="contained" endIcon={<SearchOutlined />}>Pesquisar</Button>
      </form>
      <Card variant="outlined" className="account-info">
        <Typography>Saldo Periodo:
          <FormattedNumber value={data?.saldoPeriodo ?? 0} style="currency" currency="BRL" />
        </Typography>
      </Card>
      <DataGrid disableColumnMenu disableRowSelectionOnClick
        rows={data?.page.content ?? []}
        columns={columns}
        paginationMode="server"
        rowCount={data?.page.totalElements ?? 0}
        loading={loading}
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
        pageSizeOptions={[5, 10]}
      />
    </div >
  )
}
