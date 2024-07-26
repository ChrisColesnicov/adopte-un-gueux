/* eslint-disable react/button-has-type */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Papa from "papaparse";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Footer from "../components/Footer";
import chatData from "../services/chatData";

import "../styles/chat.css";
import Envoyer from "../assets/images/Envoyer.png";

export default function Chat() {
  const [input, setInput] = useState({});
  const [messages, setMessages] = useState([]);

  const dataFromLoader = useLoaderData();

  const parse = () =>
    Papa.parse(dataFromLoader.data, {
      header: true,
      complete: (result) => result,
    });
  const { data } = parse();
  console.info(data);

  const getInputText = (event) => {
    setInput(event.target.value);
  };

  const [chatIndex, setChatIndex] = useState(0);

  return (
    <>
      <section className="chat-caroussel">
        <div className="active-chat">
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
            {data?.map((picture) => (
              <SplideSlide key={picture.ID} className="chat-carrousel">
                <img className="chat-profil" src={picture.image} alt="profil" />
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
                  chatData[chatIndex].response,
                ]);
                setChatIndex(chatIndex + 1);
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
