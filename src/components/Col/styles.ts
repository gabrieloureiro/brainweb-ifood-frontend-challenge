import styled from 'styled-components'

import { ColInterface } from './types'

import handleAxisPosition from '@/utils/handleAxisPosition'

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }: ColInterface) =>
    handleAxisPosition(justify)};
  align-items: ${({ align }: ColInterface) => handleAxisPosition(align)};
`
