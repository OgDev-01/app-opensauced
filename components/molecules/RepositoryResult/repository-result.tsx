import Button from "components/atoms/Button/button";
import RepoCardProfile from "../RepoCardProfile/repo-card-profile";

const RepositoryResult = () => {
  return (
    <div className="flex py-3 justify-between group hover:bg-light-orange-9 px-4">
      <RepoCardProfile orgName="OpenSauced" prCount={23} issueCount={102} avatar="" repoName="insights" />
      <Button className="text-light-orange-10 group-hover:text-white" variant="text">
        Add Repository
      </Button>
    </div>
  );
};

export default RepositoryResult;
