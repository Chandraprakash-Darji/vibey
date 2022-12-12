import DarkModebtn from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'DarkModebtn',
  component: DarkModebtn,
} as ComponentMeta<typeof DarkModebtn>;

const Template: ComponentStory<typeof DarkModebtn> = (args) => (
  <DarkModebtn {...args} />
);
export const Default = Template.bind({});

Default.args = {};
