import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Account from "../../Components/dashboard_acc";
const DashBoard = () => {
  const router = useRouter();
  const uid = router.query.uid;

  return (
    <>
      <Account>{uid}</Account>
    </>
  );
};

export default DashBoard;
