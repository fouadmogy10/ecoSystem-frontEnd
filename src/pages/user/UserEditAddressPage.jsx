import React from "react";
import UserEditAddress from "../../components/user/UserEditAddress"
import SideNav from "../../components/user/sideNav/SideNav";
import { Container } from "react-bootstrap";
function UserEditAddressPage() {
  return (
    <>
      <div class={"wrapper"}>
        <SideNav />
        <section>
          <Container className="py-5">
            {" "}
            <UserEditAddress />
          </Container>
        </section>
      </div>
    </>
  );
}

export default UserEditAddressPage;
