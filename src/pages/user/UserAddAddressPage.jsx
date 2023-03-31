import React from "react";
import SideNav from "../../components/user/sideNav/SideNav";
import { Container } from "react-bootstrap";
import UserAddAddress from "../../components/user/UserAddAddress"
function UserAddAddressPage() {
  return (
    <div class={"wrapper"}>
      <SideNav />
      <section>
        <Container className="py-5">
          <UserAddAddress />
        </Container>
      </section>
    </div>
  );
}

export default UserAddAddressPage;
