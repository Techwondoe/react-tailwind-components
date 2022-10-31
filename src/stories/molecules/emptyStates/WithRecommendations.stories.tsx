import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  WithRecommendations,
  Props,
} from '../../../components/molecules/emptyStates/WithRecommendations';

const meta: Meta = {
  title: 'Empty states/With recommendations',
  component: WithRecommendations,
  argTypes: {
    description: {
      defaultValue:
        'You haven’t added any team members to your project yet. As the owner of this project, you can manage team member permissions.',
    },
    formData: {
      defaultValue: {
        label: 'Enter an email',
        buttonText: 'Send invite',
      },
    },
    icon: {
      defaultValue: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    people: {
      defaultValue: [
        {
          name: 'Lindsay Walton',
          role: 'Front-end Developer',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Courtney Henry',
          role: 'Designer',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Tom Cook',
          role: 'Director, Product Development',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    peopleListLabel: {
      defaultValue: 'Team members previously added to projects',
    },
    title: {
      defaultValue: 'Add team members',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <WithRecommendations {...args} />;

export const Default = Template.bind({});
