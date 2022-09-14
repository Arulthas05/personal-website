import clsx from 'clsx'
import ukiLogo from "./uki-logo.png";

export interface Props {
  className?: string
}

const ukilogo = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'pl-20')}>
       <img alt="Uki Coding School Logo" src={ukiLogo} className="h-24" />
    </div>
  )
}

export default ukilogo
