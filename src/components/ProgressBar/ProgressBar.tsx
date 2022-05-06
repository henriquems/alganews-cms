import { CurrentProgress, ProgressBarWrapper, TextShadow } from "./ProgressBar.styles"

export interface ProgressBarProps {
  title: string
  progress: number
  theme: 'primary' | 'secondary'
  width?: number
}

export default function ProgressBar (props: ProgressBarProps) {
  return <ProgressBarWrapper style={{ width: props.width || 'auto' }}>
    <TextShadow progress={props.progress} theme={props.theme}>
      {props.title}
    </TextShadow>
    <CurrentProgress progress={props.progress} theme={props.theme}>
      <span>
        {props.title}
      </span>
    </CurrentProgress>
  </ProgressBarWrapper>
}