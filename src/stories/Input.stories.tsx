import { Story, Meta } from '@storybook/react';
import Input, { InputProps } from '../components/Input/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const WithPlaceHolder = Template.bind({})
WithPlaceHolder.args = {
    placeholder: 'e.g.: Jon Doe'
}

export const WithLabelAndPlaceHolder = Template.bind({})
WithLabelAndPlaceHolder.args = {
    label: 'Name',
    placeholder: 'e.g.: Jon Doe'
}

export const WithLabelAndContent = Template.bind({})
WithLabelAndContent.args = {
    label: 'Name',
    placeholder: 'e.g.: Jon Doe',
    value: 'Jon Doe'
}

export const WithContent = Template.bind({})
WithContent.args = {   
    value: 'Jon Doe'
}