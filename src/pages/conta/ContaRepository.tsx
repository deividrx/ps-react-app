import axios, { AxiosResponse } from "axios";
import { ContaDto } from "../../models/Conta";
import { Page, Pageable } from "../../models/Page";

export default function useContaRepository() {

  function listContas(pageable?: Pageable):
    Promise<AxiosResponse<Page<ContaDto>, any>> {
    const params = new URLSearchParams();

    if (pageable) {
      params.set("page", pageable.page.toString())
      params.set("size", pageable.size.toString())
    }

    return axios.get(
      `${process.env.REACT_APP_API_URL}/conta`,
      { params: params }
    )
  }

  return {
    listContas
  }
}
