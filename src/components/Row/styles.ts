import styled from 'styled-components'

import { RowInterface } from './types'

import handleAxisPosition from '@/utils/handleAxisPosition'

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }: RowInterface) => (wrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ justify }: RowInterface) =>
    handleAxisPosition(justify)};
  align-items: ${({ align }: RowInterface) => handleAxisPosition(align)};
`
