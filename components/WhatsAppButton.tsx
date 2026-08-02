import { Button } from "./ui/button";
import WhatsAppSvg from "./ui/WhatsAppSvg";

const WhatsAppButton = () => {
  return (
    <Button
      size={"icon-lg"}
      variant={"secondary"}
      className="rounded-full fixed bottom-7 left-7 w-[60px] h-[60px] drop-shadow-2xl backdrop-blur-lg [&_svg:not([class*='size-'])]:size-6"
      whatsapp
    >
      <WhatsAppSvg fill="#f5d7cc" size={30} />
    </Button>
  );
};

export default WhatsAppButton;
