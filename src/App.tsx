import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import './App.css';
import ContaDialogProvider from './pages/conta/ContaDialogProvider';
import ContaProvider from './pages/conta/ContaProvider';
import ContaView from './pages/conta/detail/ContaView';
import ContaDialog from './pages/conta/dialog/ContaDialog';
import TransferenciaView from './pages/transferencia/TransferenciaView';
import 'dayjs/locale/pt-br';

const cache = createIntlCache();

export const intl = createIntl({
  locale: 'pt-BR',
  messages: {}
}, cache)


const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}
      adapterLocale="pt-br"
    >
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
