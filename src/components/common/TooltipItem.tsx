import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

interface Props {
    text: string;
    children: React.ReactNode;
    className?: string;
}


const TooltipItem = ({ children, text, className }: Props) => {
  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger className={className}>{children}</TooltipTrigger>
            <TooltipContent sideOffset={5}>{text}</TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default TooltipItem