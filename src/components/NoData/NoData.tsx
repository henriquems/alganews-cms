import * as ND from './NoData.styles'

export interface NoDataProps {
  height?: number
}

export default function NoData ({ height = 120 }: NoDataProps) {
  return <ND.Wrapper height={height}>
    <ND.Message>Sem dados para exibir</ND.Message>
    <ND.SadFace>:(</ND.SadFace>
  </ND.Wrapper>
}