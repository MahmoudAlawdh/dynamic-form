import { Box, Button, Stack } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { FormGenerator } from '../components/FormGenerator';

const Home: NextPage = () => {
	const { handleSubmit, control } = useForm({});
	const onSubmit = handleSubmit((data) => {
		setState(data);
	});
	const [state, setState] = useState<FieldValues>({});
	return (
		<Stack>
			<form onSubmit={onSubmit}>
				<FormGenerator
					control={control}
					fields={[
						{ component: 'TextField', name: 'TEST', label: 'Input', details: 'test' },
						{ component: 'TextField', name: 'a', label: 'Input', details: 'test' },
						{ component: 'TextField', name: 'b', label: 'Input', details: 'test' },
						{
							component: 'Select',
							name: 'd',
							label: 'Select this',
							options: [
								{ label: 'hello1', value: 'Bye1' },
								{ label: 'hello2', value: 'Bye2' },
								{ label: 'hello3', value: 'Bye3' },
							],
						},
					]}
				/>
				<Button type="submit" variant="contained" color="primary" sx={{ float: 'right' }}>
					Submit
				</Button>
			</form>
			<Box>{JSON.stringify(state, null, '\t')}</Box>
		</Stack>
	);
};

export default Home;
