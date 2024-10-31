import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  title,
  children,
  to,
  onClick,
  variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        onClick={onClick}
        type={type}
        title={title}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
