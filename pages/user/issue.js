import Issue from "../../Components/issue";
import { useRouter } from "next/router";
const IssueForm = () => {
  const router = useRouter();
  const name = router.query.name;
  return <Issue name={name}></Issue>;
};
export default IssueForm;
