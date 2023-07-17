import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { DataGrid, GridColDef, useGridApiContext, useGridApiRef } from "@mui/x-data-grid";
import { useContaDialog } from "../ContaDialogProvider";
import useContaDialogViewModel from "./useContaDialogController";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Número', flex: 1 },
  {
    field: 'nomeResponsavel',
    headerName: 'Responsável',
    flex: 1,
  },
];

export default function ContaDialog() {
  const {
    data,
    paginationModel,
    setPaginationModel,
    onRowSelected,
    onClose
  } = useContaDialogViewModel();

  const dialogProvider = useContaDialog();

  return (
    <div>
      <Dialog
        open={dialogProvider.open}
        onClose={onClose}
      >
        <DialogTitle>
          Selecione Conta
        </DialogTitle>
        <DialogContent>
          <DataGrid
            disableColumnMenu
            sx={{ minWidth: "400px" }}
            rows={data?.content ?? []}
            columns={columns}
            pageSizeOptions={[5]}
            rowCount={data?.totalElements ?? 0}
            paginationMode="server"
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            onRowClick={onRowSelected}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}


