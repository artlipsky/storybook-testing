import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },

  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['primary', 'cta', 'action', 'attention', 'base'],
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big'],
      },
    },
    fill: {
      control: {
        type: 'select',
        options: ['solid', 'lined', 'boundless'],
      },
    },
  },
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Submit',
    type: 'primary',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Primary Button is the main action trigger on the interface, designed to stand out and guide users towards the most important action. It features a bold, solid design, typically used for primary tasks like form submissions or calls to action.',
      },
    },
  },
};

export const CTA: Story = {
  args: {
    label: 'Push Me',
    type: 'cta',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The CTA Button (Call to Action) is designed to capture the user’s attention and encourage immediate interaction. It often highlights key actions, such as signing up, purchasing, or learning more, using vibrant colors and prominent styling to stand out on the page.',
      },
    },
  },
};

export const Action: Story = {
  args: {
    label: 'Calculate',
    type: 'action',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Action Button is intended for secondary, yet important actions on the page. It’s versatile and can be used for tasks like editing, saving, or navigating, providing users with clear, actionable steps without overshadowing the primary call to action.',
      },
    },
  },
};

export const Attention: Story = {
  args: {
    label: 'Warning',
    type: 'attention',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Attention Button is used to draw focus to critical actions or warnings. It typically appears in situations where immediate user attention is required, such as confirming a high-impact decision or highlighting important alerts, often using bold, contrasting colors to stand out.',
      },
    },
  },
};

export const Regular: Story = {
  args: {
    label: 'Cancel',
    type: 'base',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Base Button is a standard, neutral button used for general purposes across the interface. It offers a consistent and unobtrusive style for common actions, such as secondary interactions or simple tasks, ensuring a clean and cohesive look without drawing excessive attention.',
      },
    },
  },
};

export const Lined: Story = {
  args: {
    label: 'Cancel',
    type: 'base',
    fill: 'lined',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Lined Button features a clean, border-focused design that is ideal for secondary actions or less prominent calls to action. Its simple outline ensures it stands out without being overly bold.',
      },
    },
  },
};

export const Boundless: Story = {
  args: {
    label: 'Cancel',
    type: 'base',
    fill: 'boundless',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Boundless Button offers a sleek, edge-to-edge design with no visible borders. This style is ideal for actions that should seamlessly blend into the interface while still standing out through its use of color and form. Perfect for modern interfaces that require a minimalistic and unobtrusive button appearance.',
      },
    },
  },
};

export const BigSize: Story = {
  args: {
    label: 'Submit',
    type: 'primary',
    fill: 'solid',
    size: 'big',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Big Button is designed for high-visibility actions. Its larger size makes it ideal for primary calls to action or critical functions that need to stand out and grab user attention.',
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    label: 'Submit',
    type: 'primary',
    fill: 'solid',
    size: 'medium',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Medium Button provides a balanced size that fits well in various interfaces. It’s versatile and suitable for secondary actions, offering a moderate presence without overwhelming the design.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Submit',
    type: 'primary',
    fill: 'solid',
    size: 'small',
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The Small Button is perfect for minimal, space-efficient actions. Its compact size is ideal for less prominent actions or when space is limited, ensuring a subtle but functional design.',
      },
    },
  },
};
