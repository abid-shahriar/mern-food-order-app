import { Input, Form } from 'semantic-ui-react';

export const CustomInputField = ({ label, name, placeholder, type, width = 16 }) => (
	<Form.Field width={width}>
		<Input name={name} label={label} type={type} placeholder={placeholder} />
	</Form.Field>
);
