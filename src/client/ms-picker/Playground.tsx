import * as React from 'react'
import { ThemeGeneratorPage } from './themegen';

export class Playground extends React.Component<any, any> {

  render(){
    return(
      <div>
        playground
        <ThemeGeneratorPage/>
      </div>
    )
  }
}