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

const RadioInput: FC<{ type: CustomRadioType; inputProps?: CustomRadioProps; gutterBottom?: boolean } & Omit<FormControlLabelProps, 'control'>> = ({
  type,
  inputProps,
  sx,
  gutterBottom = false,
  ...rest
}) => {
  const Control = ControlType(type);

  return <FormControlLabel control={<Control {...inputProps} />} sx={{ mb: gutterBottom ? 2 : 0, ...sx }} {...rest} />;
};

const TextInput: FC<TextFieldProps & { gutterBottom?: boolean }> = ({
  type,
  placeholder,
  variant,
  InputProps,
  gutterBottom = false,
  sx,
  ...rest
}) => {
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

  return (
    <TextField
      variant={variant || 'outlined'}
      InputProps={{ ...searchAdornment, ...InputProps }}
      type={type}
      placeholder={type === 'search' && !placeholder ? 'Search' : placeholder}
      sx={{ mb: gutterBottom ? 2 : 0, ...sx }}
      {...rest}
    />
  );
};

export { RadioInput, TextInput };
