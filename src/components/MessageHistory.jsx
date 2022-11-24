import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

const MessageHistory = ({ list = [] }) => {

  if (list.length === 0) {
    return null
  }

  return (
    <ul>
      {list.map((message) => {
        if (message.type === 'message') {
          return <Message key={message.id.toString()}  from={message.from} message={message} />
        }
        if (message.type === 'response') {
          return <Response key={message.id.toString()}  from={message.from} message={message} />
        }
        if (message.type === 'typing') {
          return <Typing key={message.id.toString()}  from={message.from} message={message} />
        }

        return null;
      })}
    </ul>
  )
}

export default MessageHistory;