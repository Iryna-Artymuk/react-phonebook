import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected === true,
      })}
      type={type}
      {...otherProps}
    >
      <span> {children}</span>
      <i></i>
    </button>
  );
};
