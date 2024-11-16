import clsx from 'clsx';
import { fieldset, form, input, label, legend } from '~/core/utils/create-element';
import styles from './pick-category-form.module.css';

const TAB_INPUT_NAME = 'category';
const CATEGORY_FIELDSET_LEGEND = 'Pick gift category';

function getCategoryValue(form: HTMLFormElement) {
  const formData = new FormData(form);

  const currentValue = formData.get(TAB_INPUT_NAME)?.toString();

  if (!currentValue) {
    throw new Error('current value is not defined');
  }

  return currentValue;
}

export default function PickCategoryForm({
  categoryList,
  onCategoryChange,
}: {
  categoryList: string[];
  onCategoryChange?: (category: string) => void;
}) {
  return form(
    {
      onsubmit(event) {
        event.preventDefault();

        if (event.target instanceof HTMLFormElement) {
          onCategoryChange?.(getCategoryValue(event.target));
        }
      },
    },
    [
      fieldset({ className: styles.categoryTabFieldset }, [
        legend({ className: 'sr-only', textContent: CATEGORY_FIELDSET_LEGEND }),
        ...categoryList.map((category, index) =>
          label({ className: clsx(styles.categoryTabLabel, 'text-action-small'), textContent: category }, [
            input({
              type: 'radio',
              className: 'sr-only',
              name: TAB_INPUT_NAME,
              value: category,
              defaultChecked: index === 0,
              onchange(event) {
                if (event.target instanceof HTMLInputElement) {
                  event.target.closest('form')?.requestSubmit();
                }
              },
            }),
          ]),
        ),
      ]),
    ],
  );
}
