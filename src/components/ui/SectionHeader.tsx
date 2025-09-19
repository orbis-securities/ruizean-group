interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  className?: string
}

export default function SectionHeader({
  label,
  title,
  description,
  className
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col ${className || ''}`} style={{ gap: '24px' }}>
      {/* 라벨 */}
      {label && (
        <p
          className="font-atkinson-mono font-normal text-sm uppercase text-[#A6A6A6]"
          style={{
            lineHeight: '140%',
            letterSpacing: '3%'
          }}
        >
          {label}
        </p>
      )}

      {/* 제목 */}
      <h2
        className="font-funnel-display font-semibold text-[40px] text-black"
        style={{
          lineHeight: '115%',
          letterSpacing: '0%'
        }}
      >
        {title}
      </h2>

      {/* 설명 (옵션) */}
      {description && (
        <p
          className="font-funnel-sans font-normal text-base text-black"
          style={{
            lineHeight: '150%',
            letterSpacing: '0%'
          }}
        >
          {description}
        </p>
      )}
    </div>
  )
}