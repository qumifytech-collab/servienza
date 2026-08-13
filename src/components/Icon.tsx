import { ICONS } from '@/lib/icons'

type IconProps = {
  name: string
  className?: string
  style?: React.CSSProperties
}

/* Server-rendered icon. `data-l` is kept on the element because globals.css sizes
   icons through selectors like `.ic-box svg[data-l]`. */
export default function Icon({ name, className, style }: IconProps) {
  const paths = ICONS[name]
  if (!paths) return null

  return (
    <svg
      data-l={name}
      className={className}
      style={style}
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  )
}
