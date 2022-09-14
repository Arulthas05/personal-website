import clsx from 'clsx'
import yarlItHubLogo from './yarl-it-hub-logo (1).png'

export interface Props {
  className?: string
}

const yarlithublogo = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'pl-60')}>
      <img alt="Yarl IT Hub Logo" src={yarlItHubLogo} className="h-24" />
    </div>
  )
}

export default yarlithublogo
