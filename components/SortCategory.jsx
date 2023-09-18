import classNames from "classnames";

export const SortCategory = ({ wrap, categories }) => {
  return (
    <div
      className={classNames(
        "flex gap-3 overflow-x-scroll py-5",
        wrap && "flex-wrap overflow-y-visible",
      )}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className="whitespace-nowrap rounded bg-indicator-success p-3 text-sm font-semibold text-background-primary"
        >
          {category.label}
        </div>
      ))}
    </div>
  );
};
