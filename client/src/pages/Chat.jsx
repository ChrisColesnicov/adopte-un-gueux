/* eslint-disable react/button-has-type */
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Footer from "../components/Footer";
import chatData from "../services/chatData";
import maleChatData from "../services/maleChatData";

import "../styles/chat.css";
import Envoyer from "../assets/images/Envoyer.png";

export default function Chat() {
  const [input, setInput] = useState({});
  const [messages, setMessages] = useState([]);

  const dataFromLoader = useLoaderData();
  const navigate = useNavigate();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();

  const dataFilter = data.filter((user) => {
    const userChoices = localStorage.getItem("choix");
    const userName = localStorage.getItem("userName");
    if (userChoices) {
      if (userChoices.includes("Cousin")) {
        return userName.includes(user.Nom);
      }
      return (
        (userChoices.includes(user.Sexe) &&
          userChoices.includes(user.ClasseSociale)) ||
        userChoices.includes(user.Sexe) ||
        userChoices.includes(user.ClasseSociale)
      );
    }
    return true;
  });

  const [gender, setGender] = useState("");
  console.info("depuis findgender", gender);

  const getInputText = (event) => {
    setInput(event.target.value);
  };

  const [chatIndex, setChatIndex] = useState(0);

  const handleClickNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <section className="chat-caroussel">
        <div className="active-chat">
          <button
            type="button"
            className="btn-Back"
            onClick={handleClickNavigate}
          >
            <img src="../src/assets/images/backArrow.png" alt="fleche retour" />
          </button>
          <Splide
            className="carrousel-content"
            options={{
              pagination: false,
              perPage: 3,
              snap: true,
              speed: 500,
              type: "loop",
              arrows: false,
            }}
          >
            {dataFilter?.map((picture) => (
              <SplideSlide key={picture.ID} className="chat-carrousel">
                <img
                  aria-hidden="true"
                  onClick={() => {
                    setGender(picture.Sexe);
                    setMessages([]);
                  }}
                  className="chat-profil"
                  src={picture.image}
                  alt="profil"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <div className="separator" />
      <section className="chat-window">
        <div className="chat">
          {messages.map((message) => (
            <p key={message.id} className="message-text">
              {message}
            </p>
          ))}
        </div>
        <form className="input-area">
          <input className="chat-input" type="text" onChange={getInputText} />
          <button
            type="reset"
            className="send"
            onClick={() => {
              setMessages([...messages, input]);
              setTimeout(() => {
                setMessages((prevMessages) => [
                  ...prevMessages,
                  gender === "Femme"
                    ? chatData[chatIndex].response
                    : maleChatData[chatIndex].response,
                ]);
                if (chatIndex === chatData.length - 1) {
                  setChatIndex(0);
                } else {
                  setChatIndex(chatIndex + 1);
                }
              }, 2000);
            }}
          >
            <img src={Envoyer} alt="Send your message" />
            {}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
