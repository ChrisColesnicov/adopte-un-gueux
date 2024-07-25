import profilesList from "../services/profilsData";

export default function Chat() {
  console.info(profilesList);
  return (
    <>
      <div className="chat-list">
        <img src="https://picsum.photos/80" alt="" />
      </div>
      <div className="chat-window">fenetre de chat</div>
    </>
  );
}
