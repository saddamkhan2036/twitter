import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "Saddam Khan",
            username: "yousafzai2036",
            userImg:"https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
            img:"https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            text: "nice view!",
            timestamp:" 2 hours ago"
        },
        {
            id: "2",
            name: "Saddam Khan",
            username: "yousafzai2036",
            userImg:"https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
            img:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
            text: "wonder full shot!",
            timestamp:" 4 hours ago"
        },
        {
          id: "3",
          name: "Saddam Khan",
          username: "yousafzai2036",
          userImg:"https://th.bing.com/th/id/OIP.WtH2O_VTIn8pQrkDDqNNAgAAAA?pid=ImgDet&rs=1",
          img:"https://images.unsplash.com/photo-1666644235536-b3524428b331?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80",
          text: "Porcupine Mountains, Carp Lake Township, MI, USA!",
          timestamp:" 6 hours ago"
      },
    ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg  sm:text-xl font-bold cursor-pointer ">Home</h2>
        <div className=" hoverEffects flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post)=>(
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
