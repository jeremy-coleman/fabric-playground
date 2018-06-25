import styled from './TypedEmotionTheme'


//uncomment for fun type errors 

/*
const ButtonInvalidTypes = styled('button')`
  padding: 20px;
  background-color: ${props => props.theme.color};
  border-radius: 3px;
`
*/


const Button = styled('button')`
  padding: 20px;
  background-color: ${props => props.theme.themeDarker};
  border-radius: 3px;
`

export default Button