import * as React from 'react'
import styled from 'styled-jss'
import {withTheme} from 'theming'
import {ITheme, IPalette} from 'office-ui-fabric-react'



 const Tester = withTheme(styled('div')(({theme}) => ({
  backgroundColor: theme.palette.themePrimary,
  color: theme.palette.primaryBackground,
})))


export let JssPage = props =>
<div>
  <Tester>
<p>Styled JSS Dashboard</p>

<p>Recent Projects</p>

<p>Reports</p>

<p>Feeds</p>

<p>Progress for most recent project</p>
</Tester>
</div>

