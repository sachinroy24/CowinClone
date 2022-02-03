import MemberForm from "../../Components/addMember";
import Navbar from "../../Components/Navbar";
import { useRouter } from "next/router";
const AddMember = () => {
  const router = useRouter();
  const name = router.query.name;
  return (
    <div>
      <Navbar>{name}</Navbar>
      <MemberForm />
    </div>
  );
};

export default AddMember;
