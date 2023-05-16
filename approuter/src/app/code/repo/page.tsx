import RepoList from "@/components/repo";

const RepoPage = () => {
  return (
    <>
      {/*@ts-expect-error */}
      <RepoList user={"expitc"} />
    </>
  );
};

export default RepoPage;
