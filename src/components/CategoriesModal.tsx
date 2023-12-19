import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { CategoryProps } from "../types";

const CategoriesModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 27) event.preventDefault();
    });

    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.keyCode === 27) event.preventDefault();
      });
    };
  }, []);

  function handleDialogModalButtonClicked(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();

    // dialogRef.current?.close();
  }
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal " ref={dialogRef}>
        <div className="modal-box text-center">
          <h2 className="text-2xl font-bold">Choose your favourite topic</h2>
          <p>select at least 1 topic to start the quiz.</p>
          <div>
            <Categorie categoryName={"Full Stack"} />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="specialbtn"
                onClick={handleDialogModalButtonClicked}
              >
                Start
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CategoriesModal;

function Categorie({ categoryName }: CategoryProps) {
  return (
    <div className="flex flex-row justify-stretch">
      <span>{categoryName}</span>
      <span>
        <IoClose className="bg-dark text-[#fff]" />
      </span>
    </div>
  );
}
