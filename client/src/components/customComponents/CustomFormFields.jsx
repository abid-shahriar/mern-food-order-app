import { Input, Form } from 'semantic-ui-react';
import styled from 'styled-components';

export const CustomInputField = ({ label, name, placeholder, type, width = 16 }) => (
	<StyledFormField width={width}>
		<Input name={name} label={label} type={type} placeholder={placeholder} />
	</StyledFormField>
);

const StyledFormField = styled(Form.Field)`
	& .label {
		min-width: 138px;
		text-align: center;
	}
`;
