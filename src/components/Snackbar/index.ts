import MainSnackbar from './Snackbar';
import Imperative from './SnackbarImperative';
import Provider, { useSnackbar } from './SnackbarProvider';

type Contract = typeof MainSnackbar & {
  Imperative: typeof Imperative;
  Provider: typeof Provider;
  useSnackbar: typeof useSnackbar;
};

// @ts-expect-error irfanandriansyah10@gmail.com expected error
const Snackbar: Contract = MainSnackbar;

Snackbar.Imperative = Imperative;

Snackbar.Provider = Provider;

Snackbar.useSnackbar = useSnackbar;

export default Snackbar;
