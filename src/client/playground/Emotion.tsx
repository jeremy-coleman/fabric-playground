import * as React from 'react'
import styled from 'react-emotion'
import {withTheme} from 'theming'

import {ITheme, IPalette} from 'office-ui-fabric-react'



const Tester = withTheme(styled('div')(({theme}) => ({
  backgroundColor: theme.palette.themePrimary,
  color: theme.palette.primaryBackground,
})))


export let EmotionPage = props =>
<div>
  <Tester>
<p>EMOTION JS Dashboard</p>

<p>Recent Projects</p>

<p>Reports</p>

<p>Feeds</p>

<p>Progress for most recent project</p>
</Tester>
</div>

