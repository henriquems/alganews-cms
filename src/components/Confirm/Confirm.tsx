import Button from '../Button/Button'
import * as CN from './Confirm.styles'

export interface ConfirmProps {
    title: string
    onConfirm: () => any
    onCancel: () => any
}

export default function Confirm(props: ConfirmProps) {
    return <CN.Wrapper>
        <CN.ConfirmTitle>{ props.title }</CN.ConfirmTitle>
        <CN.ConfirmButtonDisplay>
            <Button variant="danger" label='Não' onClick={props.onCancel} />
            <Button variant="primary" label='Sim' onClick={props.onConfirm} />
        </CN.ConfirmButtonDisplay>
    </CN.Wrapper>
}