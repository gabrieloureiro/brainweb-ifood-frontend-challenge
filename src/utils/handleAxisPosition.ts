/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const handleAxisPosition = (axis: string) => {
  switch (axis) {
    case 'center': {
      return 'center'
    }
    case 'spaceBetween': {
      return 'space-between'
    }
    case 'spaceEvenly': {
      return 'space-evenly'
    }
    case 'spaceAround': {
      return 'space-around'
    }
    case 'start': {
      return 'flex-start'
    }
    case 'end': {
      return 'flex-end'
    }
    default: {
      return 'unset'
    }
  }
}

export default handleAxisPosition
