import { GridCallbackDetails, GridPaginationModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { gridPaginationModelToPageable } from "../../core/page";
import { Pageable } from "../../models/Page";
import { TransferenciaPageDto, TransferenciaRequestParam } from "../../models/Transferencia";
import { useContaProvider } from "../conta/ContaProvider";
import useTransferenciaRepository from "./TransferenciaRepository";

export default function useTransferenciaViewModel() {
  const contaProvider = useContaProvider();
  const { control, handleSubmit } = useForm<TransferenciaRequestParam>();
  const [data, setData] = useState<TransferenciaPageDto>();
  const { listTransferencias } = useTransferenciaRepository();
  const [loading, setLoading] = useState(false);
  const conta = contaProvider.currentConta!;
  const [filter, setFilter] = useState<TransferenciaRequestParam>();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  function list(params?: TransferenciaRequestParam, pageable?: Pageable) {
    setLoading(true)
    listTransferencias(conta.id, params, pageable).then(
      res => setData(res.data)
    ).finally(() => setLoading(false));
  }

  function onPaginationModelChange(model: GridPaginationModel, details: GridCallbackDetails) {
    setPaginationModel(model)
  }

  const handleFilterSubmit = handleSubmit(p => {
    setFilter(p); 
    setPaginationModel({...paginationModel, page: 0})
  })

  useEffect(() => {
    const pageable = gridPaginationModelToPageable(paginationModel);
    if (contaProvider.currentConta) list(filter, pageable);
  }, [contaProvider.currentConta, paginationModel])

  return {
    control,
    data,
    handleFilterSubmit,
    loading,
    paginationModel,
    onPaginationModelChange
  }
}
