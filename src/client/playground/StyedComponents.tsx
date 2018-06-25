import * as React from 'react';
import styled from 'styled-components';
import { withTheme } from 'theming';

import {lighten} from 'polished'


 const Tester = withTheme(styled.div`
  color: ${props => props.theme.palette.primaryBackground};
  background-color: ${props => lighten(0.1, props.theme.palette.themePrimary)};
`)

const TesterNoFancyQQ = withTheme(styled.div`
color: ${props => props.theme.palette.primaryBackground};
background-color: ${props => props.theme.palette.themePrimary};
`)


export let StyledComponentsPage = props =>
<div>
  <Tester>
<p>Styled Components Dashboard</p>
* and some help from polished *
<p>Recent Projects</p>

<p>Reports</p>

<p>Feeds</p>

<p>Progress for most recent project</p>
</Tester>
</div>

