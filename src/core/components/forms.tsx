import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import { FormTextFieldProps } from './forms.d'

export function FormTextField<Variant extends TextFieldVariants>(props: FormTextFieldProps<Variant>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={
        ({ field, fieldState, formState }) => (
          <TextField
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            helperText={fieldState.error?.message}
            error={!!fieldState.error}
            {...props}
          />
        )

      }
    />
  )
}

export function FormDatePicker(props: any) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={
        ({ field, fieldState, formState }) => (
          <DatePicker
            onChange={field.onChange}
            value={field.value}
            {...props}
          />
        )
      }

    />
  )
}
