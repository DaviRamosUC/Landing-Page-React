import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Aperiam commodi neque quas dignissimos maxime itaque sit, ex ipsam dolorum,
    explicabo id similique aliquam hic blanditiis ut debitis temporibus ipsum.Sunt.`,
  },
  argTypes: {
    children: { Type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
