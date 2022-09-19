import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { Key } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

export type CustomSelectProps<T extends FieldValues> = {
	control: Control<T, any>;
	name: Path<T>;
	options: { value: any; label: string }[];
	key?: Key | null | undefined;
} & SelectProps;
const CustomSelect = <T extends FieldValues>(props: CustomSelectProps<T>) => {
	const { name, control, options, key, label, ...rest } = { ...props };
	return (
		<Controller
			key={key}
			name={name}
			control={control}
			render={({ field: { value, onChange, ...field }, fieldState: { error, isDirty, isTouched }, formState: { errors } }) => (
				<FormControl fullWidth error={!!error}>
					<InputLabel>{label} </InputLabel>
					<Select onChange={onChange} label={label} defaultValue={value} {...rest}>
						{options.map((item) => (
							<MenuItem key={item.label} value={item.value}>
								{item.label}
							</MenuItem>
						))}
					</Select>
					<FormHelperText>{error?.message}</FormHelperText>
				</FormControl>
			)}
		/>
	);
};

export default CustomSelect;
