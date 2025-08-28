import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

interface Props {
    text: string;
    children: React.ReactNode;
}


const TooltipItem = ({ children, text }: Props) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger className="cursor-pointer">{children}</TooltipTrigger>
            <TooltipContent sideOffset={5}>{text}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipItem