import clsx from 'clsx'
import Typed from 'react-typed'

export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'px-2' ,'font-semibold')}>
      <Typed
        className="flex justify-center text-2xl"
        strings={['React developer',"Uki Student","Web developer","Fullstack developer"]} 
        typeSpeed={30}
        loop
         />
    </div>
  )
}

export default Subtitle
