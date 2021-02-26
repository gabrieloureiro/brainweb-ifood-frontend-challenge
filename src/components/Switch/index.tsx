import React from 'react'

import { SwitchInterface } from './types'

import { Wrapper, Message } from './styles'

const Switch: React.FC<SwitchInterface> = ({ isOn, handleToggle }) => {
  return (
    <Wrapper>
      <Message>
        {!isOn ? 'Pagar com dinheiro?' : 'Pagamento com dinheiro'}
      </Message>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={'react-switch-new'}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#8b0000' }}
        htmlFor={'react-switch-new'}
      >
        <span />
      </label>
    </Wrapper>
  )
}

export default Switch
