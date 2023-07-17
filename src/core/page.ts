import { GridPaginationModel } from "@mui/x-data-grid"
import { Pageable } from "../models/Page"

export function gridPaginationModelToPageable(model: GridPaginationModel) {
  const pageable: Pageable = {
    page: model.page,
    size: model.pageSize
  }

  return pageable
}
