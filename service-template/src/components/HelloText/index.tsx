interface TextProps {
  className?: string;
  children?: React.ReactNode;
}

export function HelloText({ className, children }: TextProps) {
  return (
    <>
      <div className={className}>
        {children && children}
      </div>
    </>
  );
}