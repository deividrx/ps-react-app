import AccountBalance from "@mui/icons-material/AccountBalance";
import SwapHorizRounded from "@mui/icons-material/SwapHorizRounded";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { FormattedNumber } from "react-intl";
import { useContaDialog } from "../ContaDialogProvider";
import { useContaProvider } from "../ContaProvider";

function ContaView() {
  const contaProvider = useContaProvider()
  const dialog = useContaDialog();

  return (
    <AppBar position="static" >
      <Toolbar variant="dense" style={{ gap: "10px", justifyContent: "space-between" }}>
        <div className='user-info'>
          <AccountBalance />
          <Typography>
            Conta: {contaProvider?.currentConta?.id ?? ""}
          </Typography>
          <Typography>
            Responsavel: {contaProvider?.currentConta?.nomeResponsavel ?? ""}
          </Typography>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>
            Saldo Total:
          </Typography>
          <Typography>
            <FormattedNumber style="currency" currency="BRL"
              value={contaProvider?.currentConta?.saldoTotal ?? 0} />
          </Typography>
          <Button variant="contained"
            endIcon={<SwapHorizRounded />}
            onClick={() => dialog.setOpen(true)}
          >
            Alterar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default ContaView;
