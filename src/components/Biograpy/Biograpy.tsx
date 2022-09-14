import clsx from 'clsx'

export interface Props {
  className?: string
}

const Biograpy = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'bg-orange-400', 'border-2  border-black', 'w-1/2', 'mx-auto', '','my-8', 'flex p-5')}>
      <span>
      I am Lernisvinsenthi Arulthas , studying in UKI coding school.I am Bio student and also I am studying progrmming languages both frontend and backend here.I am instrested in It field. So I will apply for a best CS company to continue my career .You can contact me with lernisvinsenthi05gmail.com.


      </span>
    </div>
  )
}

export default Biograpy
