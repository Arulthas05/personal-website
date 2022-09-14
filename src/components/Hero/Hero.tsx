import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'
import Sutitle from './Sutitle'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className,'flex flex-col ')}>
      <span>
      <Avatar/>
      <Title/>
      <Sutitle/>
      </span>
    </div>
  )
}

export default Hero
