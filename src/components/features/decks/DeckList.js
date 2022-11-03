import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDecks, setCurrentDeck } from "stores/deckSlice";
import { MdEditNote } from "react-icons/md";
import MyModal from "../modal/MyModal";
import DeckEdit from "./DeckEdit";

function DeckList() {
  const items = useSelector((state) => state.decks.items);

  const errorMessageOnFetched = useSelector(
    (state) => state.decks.errorMessage
  );
  const dispatch = useDispatch();

  const [isEditDeckModalOpen, setEditDeckModal] = useState(false);
  const openUpdateDeckModal = (id) => {
    dispatch(setCurrentDeck({ id }));
    setEditDeckModal(true);
  };

  const closeEditModal = () => {
    setEditDeckModal(false);
  };

  useEffect(() => {
    dispatch(fetchDecks());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-start ml-10">
      {items.length === 0 ? (
        <p>"There is no deck!"</p>
      ) : (
        items.map((item) => (
          <div className="w-full" key={item.id}>
            <ul>
              <li className="w-full underline text-blue-600 text-xl flex justify-between">
                {item.deckName}
                <button onClick={() => openUpdateDeckModal(item.id)}>
                  <MdEditNote />
                </button>
              </li>
            </ul>
            {errorMessageOnFetched && <p>Unexpected error occured.</p>}
          </div>
        ))
      )}

      <MyModal
        isOpen={isEditDeckModalOpen}
        setOpen={setEditDeckModal}
        title={"Edit Deck"}>
        <DeckEdit closeEditModal={closeEditModal} />
      </MyModal>

      <button className="underline text-blue-600 rounded font-medium text-xl p-1 cursor-pointer">
        What am i?
      </button>
      <div>{errorMessageOnFetched && <p>Unexpected error occured.</p>}</div>
    </div>
  );
}

export default DeckList;
