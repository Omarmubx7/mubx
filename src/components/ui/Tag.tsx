interface TagProps {
  children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider border border-red/30 text-red rounded-sm">
      {children}
    </span>
  )
}
