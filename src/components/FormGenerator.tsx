import { Stack } from '@mui/material';
import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import CustomSelect, { CustomSelectProps } from './form/CustomSelect';
import CustomTextField, { CustomTextFieldProps } from './form/CustomTextField';

type RemoveControl<T> = Omit<T, 'control' | 'name'>;

interface Props<T extends FieldValues> {
	control: Control<T, any>;
	fields: (
		| ({ component: 'TextField'; name: Path<T> } & RemoveControl<CustomTextFieldProps<T>>)
		| ({ component: 'Select'; name: Path<T> } & RemoveControl<CustomSelectProps<T>>)
	)[];
}
export const FormGenerator = <T extends FieldValues>({ fields, control }: Props<T>) => {
	return (
		<Stack>
			{fields.map((i, index) => {
				const { component, name, ...rest } = { ...i };
				if (i.component === 'Select') {
					return <CustomSelect key={index} name={i.name} label={'Select'} options={[]} {...rest} control={control} />;
				}
				if (i.component === 'TextField') {
					// @ts-ignore
					return <CustomTextField key={index} name={i.name} {...rest} control={control} />;
				}
			})}
		</Stack>
	);
};
