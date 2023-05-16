import Link from "next/link";

const AboutLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="space-y-4 mt-5 px-4">
      <Link href="/" className="hover:text-blue-500 font-semibold">
        This Text From About Layouts
      </Link>
      {children}
    </div>
  );
};

export default AboutLayout;
