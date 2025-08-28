import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import IndexContent from "./allContent/mainContent/IndexContent"


const MainContent = () => {
  return (
    <main className="py-4 px-8 w-full no-scrollbar">
        <div>
        <Tabs defaultValue="todo" className="w-full">
  <TabsList className="flex gap-2 text-[.8rem]">
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white data-[state=active]:bg-white bg-whiteOpacity rounded-full px-3 py-2 cursor-pointer" value="todo">Todo</TabsTrigger>
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white data-[state=active]:bg-white bg-whiteOpacity rounded-full px-3 py-2 cursor-pointer" value="music">Música</TabsTrigger>
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white data-[state=active]:bg-white bg-whiteOpacity rounded-full px-3 py-2 cursor-pointer" value="podcasts">Podcasts</TabsTrigger>
  </TabsList>
  <TabsContent className="w-full pb-16" value="todo"><IndexContent /></TabsContent>
  <TabsContent value="music">Música</TabsContent>
  <TabsContent value="podcasts">Podcasts</TabsContent>
</Tabs>
        </div>
    </main>
  )
}

export default MainContent