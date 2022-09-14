import clsx from 'clsx'

export interface Props {
  className?: string
}

const Title = ({ className }: Props) => {
  return (
    <div className={clsx(className, 'flex justify-center',
    'font-accent font-bold mx-auto max-w-md',
    'text-5xl md:text-6xl lg:text-5xl',
    '-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10',
    'drop-shadow-2xl')}>
      Arulthas{" "}
    </div>
  )
}

export default Title
