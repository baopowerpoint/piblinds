import classNames from "classnames";

export const Container = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "mx-auto w-full max-w-[var(--page-max-width)] px-4 ",
        className,
      )}
    >
      {children}
    </div>
  );
};
