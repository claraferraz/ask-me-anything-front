import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { createMessageReaction } from "../http/create-message-reaction";
import { removeMessageReaction } from "../http/remove-message-reaction";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

interface MessageProps {
  messageId: string;
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}
export function Message({
  messageId,
  text,
  amountOfReactions,
  answered = false,
}: MessageProps) {
  const [hasReacted, setHasReacted] = useState(false);

  const { roomId } = useParams();
  if (!roomId) {
    throw new Error("Messages components must be used within room page");
  }

  async function createMessageReactionAction() {
    if (!roomId || !messageId) {
      return;
    }
    try {
      await createMessageReaction({ messageId, roomId });
    } catch {
      toast.error("Falha ao curtir mensagem, tente novamente");
    }

    setHasReacted(true);
  }
  async function removeMessageReactionAction() {
    if (!roomId || !messageId) {
      return;
    }
    try {
      await removeMessageReaction({ messageId, roomId });
    } catch {
      toast.error("Falha ao remover curtida da mensagem, tente novamente");
    }
    setHasReacted(false);
  }

  return (
    <>
      <li
        data-answered={answered}
        className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
      >
        {text}
        {hasReacted ? (
          <button
            onClick={removeMessageReactionAction}
            className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
          >
            <ArrowUp className="size-4" />
            Curtir Pergunta ({amountOfReactions})
          </button>
        ) : (
          <button
            onClick={createMessageReactionAction}
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
          >
            <ArrowUp className="size-4" />
            Curtir Pergunta ({amountOfReactions})
          </button>
        )}
      </li>
    </>
  );
}
