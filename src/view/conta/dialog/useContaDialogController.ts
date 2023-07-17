import { GridCallbackDetails, GridPaginationModel, GridRowParams, MuiEvent, useGridApiRef } from "@mui/x-data-grid";
import { useEffect, useState } from "react"
import { gridPaginationModelToPageable } from "../../../data/page";
import { ContaDto } from "../../../models/Conta";
import { Page, Pageable } from "../../../models/Page";
import { useContaDialog } from "../ContaDialogProvider";
import { useContaProvider } from "../ContaProvider";
import useContaRepository from "../ContaRepository";

export default function useContaDialogViewModel() {
  const dialogProvider = useContaDialog();
  const contaProvider = useContaProvider();
  const [data, setData] = useState<Page<ContaDto>>();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>(
    {
      page: 0,
      pageSize: 5
    }
  );
  const contaRepository = useContaRepository();

  function onRowSelected(params: GridRowParams, event: MuiEvent<React.MouseEvent>,
    details: GridCallbackDetails) {
    contaProvider.setConta(params.row);
    dialogProvider.setOpen(false);
  }

  function onClose(event: object, reason: string) {
    if (contaProvider.haveConta())
      dialogProvider.setOpen(false)
  }

  useEffect(() => {
    if (dialogProvider.open) {
      const pageable: Pageable = gridPaginationModelToPageable(paginationModel)
      contaRepository.listContas(pageable).then(
        r => setData(r.data)
      )
    }
  }, [paginationModel, dialogProvider.open])

  return {
    data,
    paginationModel,
    setPaginationModel,
    onRowSelected,
    onClose,
  }
}
