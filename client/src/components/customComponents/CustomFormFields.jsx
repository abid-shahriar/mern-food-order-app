import { Input, Form } from 'semantic-ui-react';
import styled from 'styled-components';

export const CustomInputField = ({ label, name, placeholder, type, width = 16, handleChange }) => (
	<StyledFormField width={width}>
		<Input name={name} label={label} type={type} placeholder={placeholder} onChange={handleChange} />
	</StyledFormField>
);

const StyledFormField = styled(Form.Field)`
	& .label {
		min-width: 90px;
		text-align: left;
	}
`;
