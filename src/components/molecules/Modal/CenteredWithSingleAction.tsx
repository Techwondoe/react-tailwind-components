import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Typography, Button } from '../../atoms';

export interface CenteredWithSingleActionModalProps extends React.HTMLAttributes<HTMLDivElement> {
  actions: {
    label: string;
    onClick: () => void;
    ref?: React.RefObject<HTMLButtonElement>;
  }[];
  description: string;
  title: string;
}

export function CenteredWithSingleAction({ title, description, actions }: CenteredWithSingleActionModalProps) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <Typography>{description}</Typography>
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-5 sm:mt-6 ${
                    actions.length > 1 && ` sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3`
                  }`}>
                  {actions?.map((action, index) => (
                    <Button
                      key={index}
                      variant={actions.length > 1 && index === 0 ? 'contained' : 'outlined'}
                      fullWidth={actions.length > 0}
                      onClick={() => setOpen(false)}>
                      {action.label}
                    </Button>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}