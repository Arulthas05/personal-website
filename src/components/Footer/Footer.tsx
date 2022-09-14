import clsx from 'clsx'
import SocialMedia from './SocialMedia'
import Yarlithublogo from './Yarlithublogo'
import Ukilogo from './Ukilogo'
import UkiAddress from './UkiAddress'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'bg-yellow-600', 'flex flex-nowrap justify-between','py-3')}>
      <div className='flex'>
        <Yarlithublogo />
        <Ukilogo />
        <UkiAddress />
      </div>
      <SocialMedia />
    </div>
  )
}

export default Footer
