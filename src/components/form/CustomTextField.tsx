import { TextField, TextFieldProps } from '@mui/material';
import { Key } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
export type CustomTextFieldProps<T extends FieldValues> = {
	control: Control<T, any>;
	name: Path<T>;
	key?: Key | null | undefined;
	details?: string;
} & TextFieldProps;
const CustomTextField = <T extends FieldValues>(props: CustomTextFieldProps<T>) => {
	const { control, name, details, ...rest } = props;
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, ...field }, fieldState: { error, isDirty, isTouched } }) => (
				<TextField {...field} defaultValue={value} error={!!error} helperText={!!error ? error?.message : details} {...rest} />
			)}
		/>
	);
};

export default CustomTextField;
