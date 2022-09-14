import clsx from 'clsx'
import avatarImage from './arulthas-profile.png'


export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'mx-auto' ,'w-48')}>
      <img alt="Profile avatar" src={avatarImage} />
    </div>
  )
}

export default Avatar
