type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <div className="mt-12">{children}</div>;
};

export default Warning;
