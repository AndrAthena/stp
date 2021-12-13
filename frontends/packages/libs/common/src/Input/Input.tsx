import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  InputAdornment,
  Radio,
  RadioProps,
  Switch,
  SwitchProps,
  TextField,
  TextFieldProps,
} from '@mui/material';
import {} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import React, { ElementType, FC } from 'react';
import { useField, useFormikContext } from 'formik';
import _ from 'lodash';

type CustomRadioType = 'radio' | 'checkbox' | 'switch';
type CustomRadioProps = RadioProps | CheckboxProps | SwitchProps;

const ControlType = (type: CustomRadioType): ElementType => {
  switch (type) {
    case 'radio':
      return Radio;
    case 'switch':
      return Switch;
    case 'checkbox':
      return Checkbox;
    default:
      return Checkbox;
  }
};

interface RadioInputProps {
  type: CustomRadioType;
  inputProps?: CustomRadioProps;
  gutterBottom?: boolean;
}

const RadioInput: FC<RadioInputProps & Omit<FormControlLabelProps, 'control'>> = ({ type, inputProps, sx, name, gutterBottom = false, ...rest }) => {
  const { isSubmitting } = useFormikContext();
  const [field] = useField(name);
  const { value, onChange } = field;

  const Control = ControlType(type);

  return (
    <FormControlLabel
      value={value}
      onChange={onChange}
      control={<Control {...inputProps} />}
      sx={{ mb: gutterBottom ? 2 : 0, ...sx }}
      {...rest}
      disabled={isSubmitting}
    />
  );
};

interface TextInputProps extends Omit<TextFieldProps, 'onChange'> {
  gutterBottom?: boolean;
  wait?: number;
  //onChange(value: unknown): void;
}

const TextInput: FC<TextInputProps> = ({
  type,
  placeholder,
  variant,
  InputProps,
  name,
  //onChange,
  disabled,
  gutterBottom = false,
  wait,
  sx,
  ...rest
}) => {
  const { isSubmitting, isValid } = useFormikContext();
  const [field, meta] = useField(name);
  const { value, onChange } = field;
  const { error, touched } = meta;

  const searchAdornment =
    type === 'search'
      ? {
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }
      : undefined;

  const handleChange = (e: React.ChangeEvent<any>) => {
    if (type === 'search') {
      _.debounce(onChange, wait ?? 200);
    } else onChange(e);
  };

  return (
    <TextField
      variant={variant || 'outlined'}
      InputProps={{ ...searchAdornment, ...InputProps }}
      type={type}
      placeholder={type === 'search' && !placeholder ? 'Search' : placeholder}
      sx={{ mb: gutterBottom ? 2 : 0, border: !isValid ? '1px solid secondary.main' : 'none', ...sx }}
      helperText={touched ? error : ''}
      name={name}
      value={value}
      onChange={handleChange}
      error={touched && !!error}
      disabled={isSubmitting || disabled}
      {...rest}
    />
  );
};

export { RadioInput, TextInput };
