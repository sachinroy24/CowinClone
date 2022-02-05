import Issue from "../../Components/issue";
import { useRouter } from "next/router";
const IssueForm = () => {
  const router = useRouter();
  const name = router.query.name;
  console.log(router.query);
  return <Issue name={name}></Issue>;
};
export default IssueForm;
