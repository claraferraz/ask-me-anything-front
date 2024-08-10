import { useParams } from "react-router-dom";
import amaLogo from "../assets/AMA-logo.svg";
import { Share2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Messages } from "../components/messages";
import { Suspense } from "react";

export function Room() {
  const { roomId } = useParams();
  function handleSendMessage() {}

  function handleShareRoom() {
    const url = window.location.href.toString();
    if (navigator.share != undefined && navigator.canShare()) {
      navigator.share({ url });
    } else {
      navigator.clipboard.writeText(url);
      toast.info("URL copiada para área de transferência");
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA logo" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Código da sala: <span className="text-zinc-300  ">{roomId}</span>
        </span>

        <button
          type="submit"
          onClick={handleShareRoom}
          className="ml-auto bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm"
        >
          Compartilhar
          <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form
        action={handleSendMessage}
        className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
      >
        <input
          type="text"
          name="message"
          placeholder="Qual a sua pergunta?"
          className="flex-1 bg-transparent text-sm mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-orange-400 hover:bg-orange-500 transition-colors text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm"
        >
          Criar Pergunta
          <ArrowRight className="size-4" />
        </button>
      </form>

      <Suspense fallback={<p>Carregando...</p>}>
        <Messages />
      </Suspense>
    </div>
  );
}
