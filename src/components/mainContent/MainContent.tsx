import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"


const MainContent = () => {
  return (
    <main className="py-4 px-8">
        <div>
        <Tabs defaultValue="todo" className="w-[400px]">
  <TabsList className="flex gap-2 text-[.8rem]">
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white bg-whiteOpacity rounded-full px-3 py-2" value="todo">Todo</TabsTrigger>
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white bg-whiteOpacity rounded-full px-3 py-2" value="music">Música</TabsTrigger>
    <TabsTrigger className="data-[state=active]:text-black data-[state=inactive]:bg-whiteOpacityInactive data-[state=inactive]:text-white bg-whiteOpacity rounded-full px-3 py-2" value="podcasts">Podcasts</TabsTrigger>
  </TabsList>
  <TabsContent value="todo">Todo</TabsContent>
  <TabsContent value="music">Música</TabsContent>
  <TabsContent value="podcasts">Podcasts</TabsContent>
</Tabs>
        </div>
    </main>
  )
}

export default MainContent