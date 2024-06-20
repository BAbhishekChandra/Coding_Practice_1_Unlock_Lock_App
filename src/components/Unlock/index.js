// Write your code here
import {useState} from 'react'
import {
  UnlockContainer,
  ImageContainer,
  Image,
  DescriptionParagraph,
  ButtonUnlockLock,
} from './styledComponents'

const Unlock = () => {
  const [lockState, setChangeLockState] = useState(true)

  const imageSource = lockState
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altImageText = lockState ? 'lock' : 'unlock'
  const lockParagraph = lockState
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const buttonText = lockState ? 'Unlock' : 'lock'

  const onClickButtonChangeLockState = () => {
    setChangeLockState(prevState => !prevState)
  }

  return (
    <UnlockContainer>
      <ImageContainer>
        <Image src={imageSource} alt={altImageText} />
      </ImageContainer>
      <DescriptionParagraph>{lockParagraph}</DescriptionParagraph>
      <ButtonUnlockLock type="button" onClick={onClickButtonChangeLockState}>
        {buttonText}
      </ButtonUnlockLock>
    </UnlockContainer>
  )
}

export default Unlock
