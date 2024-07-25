export default function Separator({ dark = false, size = 'base' }: { dark?: boolean, size?: 'base' | 'sm' }) {
  let css = ['w-[1px]']

  dark ? css.push('bg-zinc-600') : css.push('bg-zinc-300')
  size === 'base' && css.push('h-7')
  size === 'sm' && css.push('h-5')

  return <div className={css.join(' ')}></div>
}
