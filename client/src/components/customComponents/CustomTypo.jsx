import styled, { css } from 'styled-components';

const CustomType = (props) => {
	return <StyledTypo {...props}>{props.children}</StyledTypo>;
};

export default CustomType;

const StyledTypo = styled.div`
	margin: 0;
	padding: 0;

	${(props) =>
		props.bold &&
		css`
			font-weight: bold;
			font-size: 1.4rem;
		`}

	${(props) =>
		props.padded &&
		css`
			padding: 0 1rem 0 0.5rem;
		`}
`;
