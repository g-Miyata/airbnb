interface IconButtonProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const IconButton = ({ icon, children }: IconButtonProps) => {
  return (
    <>
      <button className="rounded-xl px-4 py-2 hover:border-gray-400 border-2 flex items-center gap-2">
        <span>{icon}</span>
        <span>{children}</span>
      </button>
    </>
  );
};

export default IconButton;
