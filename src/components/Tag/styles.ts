import styled from 'styled-components'

import { TagInterface } from './types'

export const TagWrapper = styled.span`
  border-radius: 18px;
  padding: 6px 14px;
  margin: 0 12px 12px 0;
  font-size: 16px;
  background: ${(props: TagInterface) => props.backgroundColor};
  color: ${(props: TagInterface) => props.textColor};
  box-shadow: 0px 15px 20px #00000012;
`
