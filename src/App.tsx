import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createIntl, createIntlCache, IntlProvider, RawIntlProvider } from 'react-intl';
import './App.css';
import ContaDialogProvider from './view/conta/ContaDialogProvider';
import ContaProvider from './view/conta/ContaProvider';
import ContaView from './view/conta/detail/ContaView';
import ContaDialog from './view/conta/dialog/ContaDialog';
import TransferenciaView from './view/transferencia/TransferenciaView';

const cache = createIntlCache();

export const intl = createIntl({
  locale: 'pt-BR',
  messages: {}
}, cache)


const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RawIntlProvider value={intl} >
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ContaProvider>
            <ContaDialogProvider initOpen={true}>
              <ContaView />
              <TransferenciaView />
              <ContaDialog/>
            </ContaDialogProvider>
          </ContaProvider>
        </ThemeProvider>
      </RawIntlProvider>
    </LocalizationProvider>
  );
}

export default App;
