import { Input, Form, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

export const CustomInputField = ({ label, name, placeholder, type, width = 16, handleChange, handleShowPass, matchPass }) => {
	return (
		<StyledFormField width={width}>
			<Input
				icon={
					name === 'password' ? (
						<Icon name={type === 'password' ? 'eye slash' : 'eye'} link color='blue' onClick={handleShowPass} />
					) : name === 'cpassword' ? (
						<Icon name={matchPass ? 'check' : 'close'} color={matchPass ? 'green' : 'red'} />
					) : null
				}
				name={name}
				label={label}
				type={type}
				placeholder={placeholder}
				onChange={handleChange}
				required
			/>
		</StyledFormField>
	);
};

const StyledFormField = styled(Form.Field)`
	& .label {
		min-width: 90px;
		text-align: left;
	}
`;
