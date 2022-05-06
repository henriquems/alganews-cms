import * as IN from './Info.styles'
import Icon from "@mdi/react"
import { mdiInformation } from '@mdi/js'

export interface InfoProps {
    title: string
    description: string
}

export default function Info (props: InfoProps) {
    return <IN.Wrapper>
        <IN.InfoInnerContent>
            <IN.InfoIcon>
                <Icon 
                    color="#09F"
                    size="48px"
                    path={mdiInformation}
                />
            </IN.InfoIcon>
            <IN.InfoMessages>
                <IN.InfoTitle>{ props.title }</IN.InfoTitle>
                <p>{ props.description }</p>
            </IN.InfoMessages>
        </IN.InfoInnerContent>
    </IN.Wrapper> 
}