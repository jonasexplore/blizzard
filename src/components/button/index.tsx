type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
};

export const Button = ({
  variant = "primary",
  children,
  className,
  icon = false,
  ...props
}: Props) => {
  const buttonClasses =
    variant === "primary"
      ? "bg-primary text-white py-2 px-4 rounded"
      : "text-white py-2 px-4 rounded border border-white";

  return (
    <button
      className={`flex items-center ${buttonClasses} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
