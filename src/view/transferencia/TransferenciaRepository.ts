import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";
import { Pageable } from "../../models/Page";
import { TransferenciaPageDto, TransferenciaRequestParam } from "../../models/Transferencia";

export default function useTransferenciaRepository() {

  function listTransferencias(id: number, filter?: TransferenciaRequestParam,
    pageable?: Pageable):
    Promise<AxiosResponse<TransferenciaPageDto, any>> {
    const params = new URLSearchParams();

    if (filter?.operador) params.set("operador", filter.operador)
    if (filter?.dataInicio) params.set("dataInicio", dayjs(filter.dataInicio).format())
    if (filter?.dataFim) params.set("dataFim", dayjs(filter.dataFim).format())
    
    if (pageable) {
      params.set("page", pageable.page.toString())
      params.set("size", pageable.size.toString())
    }

    return axios.get(
      `${process.env.REACT_APP_API_URL}/conta/${id}/transferencias`,
      { params: params }
    )
  }

  return {
    listTransferencias
  }
}
