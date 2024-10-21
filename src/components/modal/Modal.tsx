"use client";

import { Modal } from "flowbite-react";

interface props {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: (boolean: boolean) => void;
}

export function ModalView({ openModal, setOpenModal, children }: props) {
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        popup
        positions=""
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}
