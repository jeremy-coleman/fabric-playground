
import * as React from 'react'

type IHoveredColors = 'red' | 'blue';
function isHovered(): IHoveredColors {return 'red'};
type isHovered = ReturnType<typeof isHovered>;


interface ButtonsProps extends React.HTMLAttributes<HTMLButtonElement> {
 /**
  * Editor feedback, cool - 1000x more useful than css types alone.
  */
  type?: 'button';
  isHovered?: isHovered
}
export const Button: React.SFC<ButtonsProps> = (props) => 
      <button {...props}
      type="button"
      onMouseEnter={() => {console.log('i could replace :hover')}}
      style={{backgroundColor: isHovered()}}
      />;
