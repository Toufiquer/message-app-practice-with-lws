import React from "react";
import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../redux/features/conversation/conversationApi";
import Conversation from "./Conversation";
import { getParticipants } from "../../utils/getParticipants";

const Conversations = () => {
  const { user } = useSelector((state) => state.auth) || {};
  const { email } = user || {};
  const { data, isLoading, isError, error } = useGetConversationsQuery(email);
  let content;
  if (isLoading && !isError) {
    content = <li className={` text-center`}>Loading...</li>;
  }
  if (!isLoading && isError) {
    content = <li className={` text-center`}>{error.message}</li>;
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <li className={` text-center`}>No Conversation found.</li>;
  }
  if (!isLoading && !isError && data.length > 0) {
    content = data.map((conversation) => {
      const { email: participantEmail, name: participantName } =
        getParticipants(conversation.users, email);
      const data = { ...conversation, participantEmail, participantName };
      return <Conversation data={data} key={conversation.id} />;
    });
  }
  return (
    <>
      <ul className="overflow-auto">{content}</ul>
    </>
  );
};

export default Conversations;
