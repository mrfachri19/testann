import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Card,
  CardBody,
  CardText,
  CardTitle
} from "reactstrap";

function Pages() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal1(!modal2);
  const [showButton, setShowButton] = useState(false);
  return (
    <div className="text-center">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Fachri & Ulfi
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar></Nav>
        </Collapse>
      </Navbar>{" "}
      <UncontrolledCarousel
        items={[
          {
            altText: "Slide 1",
            caption: "Slide 1",
            key: 1,
            src: "https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZlrPh62SPS44KUH26PcTuWL5cYdfB3jRoL_VZILaXEufg?cn=THISLIFE&res=small&ts=1659980907"
          },
          {
            altText: "Slide 2",
            caption: "Slide 2",
            key: 2,
            src: "https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZlsmiHcNxMYM1am2fDgH3AgrnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=small&ts=1659980905"
          },
          {
            altText: "Slide 3",
            caption: "Slide 3",
            key: 3,
            src: "https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZkZK7YXFC3hmmNYnC5w6VfIrnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=small&ts=1659980905"
          }
        ]}
      />
      {showButton ? (
        <Button color="primary" onClick={toggle1}>
          Click aku
        </Button>
      ) : (
        <></>
      )}
      <Button color="primary" onClick={toggle} className="mt-5">
        Click aku
      </Button>
      <Card
        className="mx-5 mt-5"
        style={{
          width: "18rem"
        }}
      >
        <img
          alt="Sample"
          src="https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZnVwthhQ1kQyJMD4mujFfScaAUrgnwgvQnZ_1RWb7NZPA?cn=THISLIFE&res=small&ts=1659981197"
        />
        <CardBody>
          <CardTitle tag="h5">Hari Bersamamu</CardTitle>

          <CardText>
            semoga hubungan kita semakin langgeng ke jenjang pernikahan
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="mx-5 mt-5"
        style={{
          width: "18rem"
        }}
      >
        <img
          alt="Sample"
          src="https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZless8BkWu73Fv3nxRfjw1YaAUrgnwgvQnZ_1RWb7NZPA?cn=THISLIFE&res=small&ts=1659981197"
        />
        <CardBody>
          <CardTitle tag="h5">Ulfi gendut</CardTitle>

          <CardText>semoga Kamu makin sayang sama ku</CardText>
        </CardBody>
      </Card>
      <Card
        className="mx-5 mt-5"
        style={{
          width: "18rem"
        }}
      >
        <img
          alt="Sample"
          src="https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZndHe2WwnKbWAOVFDW855rYrnHjCyIZu59oV2we_kMG9A?cn=THISLIFE&res=small&ts=1659981199"
        />
        <CardBody>
          <CardTitle tag="h5">Ulfi sayang</CardTitle>

          <CardText>
            semoga Kamu dan aku diberikan kesehatan dan dimurahkan rezekinya
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="mx-5 mt-5"
        style={{
          width: "18rem"
        }}
      >
        <img
          alt="Sample"
          src="https://uniim1.shutterfly.com/render/00-1ek7Cj_ZcsUKElW6FJT_Dd4vWHZDk5VjwjkYGldEgZmfwuNdqZfGGoH7QYma0jPA5cYdfB3jRoL_VZILaXEufg?cn=THISLIFE&res=small&ts=1659981697"
        />
        <CardBody>
          <CardTitle tag="h5">Bersama kita</CardTitle>

          <CardText>semoga Kamu dan aku jodoh di dunia dan diakhirat</CardText>
        </CardBody>
      </Card>
      {/* 1 */}
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <ModalHeader toggle={toggle}>Fachri :</ModalHeader>
        <ModalBody>
          Hai Sayang ga terasa ni kita dah setahun aja, hehehhehe
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal1(true)}>
            Click aku
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* 2 */}
      <Modal isOpen={modal1} toggle={toggle1} centered={true}>
        <ModalHeader toggle={toggle1}>Fachri :</ModalHeader>
        <ModalBody>
          Sayang gimana sekarang makin sayang ga sama ak yang ?{" "}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal2(true)}>
            Click aku
          </Button>{" "}
          <Button color="secondary" onClick={toggle1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/*modal 3 */}
      <Modal isOpen={modal2} toggle={toggle2} centered={true}>
        <ModalHeader toggle={toggle1}>Fachri :</ModalHeader>
        <ModalBody>
          <p>
            Doa untuk mu selalu kupanjatkan tiap malamku. <br /> Aku dibatas
            kota yang sepi tanpamu, <br /> ingin kutuliskan dengan air mataku
            bahwa ak sangat mencintaimu dan merindukanmu. <br /> Aku
            mengharapkan doa dan ketulusan dari mu, <br /> untuk selalu menunggu
            hari demi hari Kita.
            <br /> Suka, Canda dan Tangis menghiasi hariku harimu. <br />
            baris demi baris code yg kuketikkan untukmu, <br />
            semoga bisa sampai kepadamu. <br />
            malam yg tak hangat lagi tanpa pelukanmu disini. <br />
            kuharap kita bisa berjumpa di waktu dekat, <br />
            kuharap lembaran cinta kita tak akan habis, <br />
            diisi oleh tinta-tinta cinta kita
            <br />
            ak yg merindukanmu di pojok kerasnya kota <br />
            Bandung, 09-08-2022
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal2(false)}>
            Refresh halaman untuk melihat galeri dibawah{" "}
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <div className="mt-5 mx-5 mb-2" color="secondary">
        <p>Created by: @fachri maulana pakpahan</p>
      </div>
    </div>
  );
}

export default Pages;
